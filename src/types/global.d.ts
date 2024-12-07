declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}
if (!window.dataLayer) {
    window.dataLayer = [];
}
export {};