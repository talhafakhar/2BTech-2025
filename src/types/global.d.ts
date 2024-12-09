declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dataLayer: Record<string, any>[];
    }
}
if (!window.dataLayer) {
    window.dataLayer = [];
}
export {};