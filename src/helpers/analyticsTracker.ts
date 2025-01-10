export const initializeDynamicEventTracking = (): void => {
    const hoverStartTimes: Map<HTMLElement, number> = new Map(); // Track hover start times

    interface EventData {
        event: string;
        name: string;
        page_url: string;
        timestamp: string;
        hover_duration?: number;
        action?: string;
    }

    /**
     * Submits hover events to the data layer
     */
    const submitHoverEvent = (target: HTMLElement, hoverDuration: number): EventData => {
        const name = target.dataset.trackName || 'undefined';
        const action = target.dataset.trackAction || 'hover';
        const pageUrl = window.location.href;
        const label = target.dataset.trackLabel;

        const eventData: EventData = {
            event: `${name}_hover`,
            name: label || name,
            page_url: pageUrl,
            hover_duration: hoverDuration,
            timestamp: new Date().toISOString(),
        };

        if (action) {
            eventData.action = action;
        }

        window.dataLayer?.push(eventData);
        return eventData;
    };

    /**
     * Submits click events to the data layer
     */
    const submitClickEvent = (target: HTMLElement): EventData => {
        const name = target.dataset.trackName || 'undefined';
        const action = target.dataset.trackAction || 'click';
        const pageUrl = window.location.href;

        const eventData: EventData = {
            event: `${name}_click`,
            name: name,
            page_url: pageUrl,
            timestamp: new Date().toISOString(),
        };

        if (action) {
            eventData.action = action;
        }

        window.dataLayer?.push(eventData);

        if (process.env.NODE_ENV === 'development') {
            console.log('Click Event:', eventData); // Debugging
        }

        return eventData;
    };

    /**
     * Handles mouse enter events
     */
    const handleMouseEnter = (event: MouseEvent): void => {
        const target = (event.target as HTMLElement)?.closest('[data-track-hover="true"]') as HTMLElement;
        if (target) {
            hoverStartTimes.set(target, Date.now()); // Store hover start time
        }
    };

    /**
     * Handles mouse leave events
     */
    const handleMouseLeave = (event: MouseEvent): void => {
        const target = (event.target as HTMLElement)?.closest('[data-track-hover="true"]') as HTMLElement;
        if (target && hoverStartTimes.has(target)) {
            const hoverDuration = Date.now() - (hoverStartTimes.get(target) || 0); // Calculate duration
            hoverStartTimes.delete(target); // Clean up
            const eventData = submitHoverEvent(target, hoverDuration);

            if (process.env.NODE_ENV === 'development') {
                console.log('Hover Event:', eventData); // Debugging
            }
        }
    };

    /**
     * Handles click events
     */
    const handleClick = (event: MouseEvent): void => {
        const target = (event.target as HTMLElement)?.closest('[data-track-click="true"]') as HTMLElement;
        if (target) {
            submitClickEvent(target);
        }
    };

    /**
     * Attaches event listeners to elements
     */
    const attachListeners = (element: HTMLElement): void => {
        if (element.dataset.trackHover === 'true') {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }

        if (element.dataset.trackClick === 'true') {
            element.addEventListener('click', handleClick);
        }
    };

    /**
     * Detaches event listeners from elements
     */
    const detachListeners = (element: HTMLElement): void => {
        if (element.dataset.trackHover === 'true') {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        }

        if (element.dataset.trackClick === 'true') {
            element.removeEventListener('click', handleClick);
        }
    };

    // Observe the DOM for dynamically added or removed elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        attachListeners(node);
                        // Attach listeners to nested elements
                        node.querySelectorAll('[data-track-hover="true"], [data-track-click="true"]').forEach((child) => {
                            attachListeners(child as HTMLElement);
                        });
                    }
                });

                mutation.removedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        detachListeners(node);
                        // Detach listeners from nested elements
                        node.querySelectorAll('[data-track-hover="true"], [data-track-click="true"]').forEach((child) => {
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
    document.querySelectorAll('[data-track-hover="true"], [data-track-click="true"]').forEach((element) => {
        attachListeners(element as HTMLElement);
    });

    /**
     * Flushes any pending hover events
     */
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
