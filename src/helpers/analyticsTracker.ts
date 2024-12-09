export const initializeDynamicEventTracking = (): void => {
    const hoverStartTimes = new Map<HTMLElement, number>(); // Track hover start times

    const submitHoverEvent = (target: HTMLElement, hoverDuration: number): Record<string, unknown> => {
        const name = target.dataset.trackName || 'undefined';
        const action = target.dataset.trackAction || 'hover';
        const pageUrl = window.location.href;

        const eventData: Record<string, unknown> = {
            event: `${name}_hover`,
            name: name,
            page_url: pageUrl,
            hover_duration: hoverDuration,
            timestamp: new Date().toISOString(),
        };

        if (action) {
            eventData.action = action;
        }

        window.dataLayer.push(eventData);
        return eventData;
    };

    const handleMouseEnter = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        if (target?.dataset.trackHover === "true") {
            hoverStartTimes.set(target, Date.now()); // Store hover start time
        }
    };

    const handleMouseLeave = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        if (target?.dataset.trackHover === "true" && hoverStartTimes.has(target)) {
            const hoverDuration = Date.now() - (hoverStartTimes.get(target) || 0); // Calculate duration
            hoverStartTimes.delete(target); // Clean up
            const eventData = submitHoverEvent(target, hoverDuration);

            if (process.env.NODE_ENV === 'development') {
                console.log('Hover Event:', eventData); // Debugging
            }
        }
    };

    const handleClick = (event: MouseEvent): void => {
        const target = event.target as HTMLElement;
        if (target?.dataset.trackClick === "true") {
            const name = target.dataset.trackName || 'undefined';
            const action = target.dataset.trackAction || 'click';
            const pageUrl = window.location.href;

            const eventData: Record<string, unknown> = {
                event: `${name}_click`,
                name: name,
                page_url: pageUrl,
                timestamp: new Date().toISOString(),
            };

            if (action) {
                eventData.action = action;
            }

            window.dataLayer.push(eventData);

            if (process.env.NODE_ENV === 'development') {
                console.log('Click Event:', eventData); // Debugging
            }
        }
    };

    const attachListeners = (element: HTMLElement): void => {
        if (element.dataset.trackHover === "true") {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseleave", handleMouseLeave);
        }

        if (element.dataset.trackClick === "true") {
            element.addEventListener("click", handleClick);
        }
    };

    const detachListeners = (element: HTMLElement): void => {
        if (element.dataset.trackHover === "true") {
            element.removeEventListener("mouseenter", handleMouseEnter);
            element.removeEventListener("mouseleave", handleMouseLeave);
        }

        if (element.dataset.trackClick === "true") {
            element.removeEventListener("click", handleClick);
        }
    };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
                // Attach listeners to added nodes
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        attachListeners(node);
                        // Handle nested elements
                        node.querySelectorAll("[data-track-hover], [data-track-click]").forEach((child) => {
                            attachListeners(child as HTMLElement);
                        });
                    }
                });

                // Detach listeners from removed nodes
                mutation.removedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        detachListeners(node);
                        // Handle nested elements
                        node.querySelectorAll("[data-track-hover], [data-track-click]").forEach((child) => {
                            detachListeners(child as HTMLElement);
                        });
                    }
                });
            }
        });
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Attach listeners to existing elements on initialization
    document.querySelectorAll("[data-track-hover], [data-track-click]").forEach((element) => {
        attachListeners(element as HTMLElement);
    });

    const flushPendingHoverEvents = (): void => {
        hoverStartTimes.forEach((startTime, target) => {
            if (document.body.contains(target)) {
                const hoverDuration = Date.now() - startTime;
                const eventData = submitHoverEvent(target, hoverDuration);

                if (process.env.NODE_ENV === 'development') {
                    console.log('Flushed Hover Event:', eventData); // Debugging
                }
            }
        });

        hoverStartTimes.clear();
    };

    // Handle beforeunload to flush hover events
    window.addEventListener('beforeunload', flushPendingHoverEvents);

    // Handle visibility change as a fallback
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            flushPendingHoverEvents();
        }
    });
};
