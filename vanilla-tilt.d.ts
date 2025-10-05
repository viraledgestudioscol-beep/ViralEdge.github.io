export {};

declare global {
  interface Window {
    VanillaTilt?: {
      init: (
        el: HTMLElement | HTMLElement[] | null,
        opts?: Record<string, any>
      ) => void;
    };
  }
}
/**
 * TypeScript declaration for the global VanillaTilt object.
 * This structure allows for:
 * 1. The static 'init' method, which takes an element (or array of elements) and an optional configuration object.
 * 2. An index signature ([key: string]: any) to allow for other properties or methods that might be attached to the global object,
 * which resolves the conflict seen in the error message.
 */
declare const VanillaTilt: {
    // Allows for arbitrary properties/methods on the global object, covering '[key: string]: any'
    [key: string]: any; 
    
    /**
     * Initializes the tilt effect on one or more elements.
     * @param element The HTML element(s) to initialize the tilt effect on.
     * @param config Optional configuration object for the tilt effect.
     */
    init: (
        element: HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | null,
        config?: Record<string, any> 
    ) => void;
};
export {};

declare global {
  interface Window {
    VanillaTilt: any;
  }
}