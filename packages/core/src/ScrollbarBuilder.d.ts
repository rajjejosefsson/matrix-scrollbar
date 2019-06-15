/// <reference types="react" />
export declare function buildScrollbar(
  scrollViewport: any,
  className: string
): {
  perspectiveContainer: HTMLElement;
  overflowHiddenElement: HTMLDivElement;
  rail: HTMLDivElement;
  thumb: HTMLDivElement;
  scrollViewport: any;
};
export declare function getElements(
  className: string
): {
  perspectiveContainer: HTMLElement;
  overflowHiddenElement: HTMLDivElement;
  rail: HTMLDivElement;
  thumb: HTMLDivElement;
};
export declare function placeElements({
  perspectiveContainer,
  overflowHiddenElement,
  rail,
  thumb,
  scrollViewport
}: {
  perspectiveContainer: any;
  overflowHiddenElement: any;
  rail: any;
  thumb: any;
  scrollViewport: any;
}): void;
export declare function createOverflowHiddenElement(
  className: string
): HTMLDivElement;
export declare function createRail(): HTMLDivElement;
export declare function createThumb(): HTMLDivElement;
export declare function createPerspectiveContainer(): HTMLElement;
export declare function createEdgeDiv(): HTMLDivElement;
