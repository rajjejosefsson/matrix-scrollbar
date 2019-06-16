import { isEdge } from "@matrix-scrollbar/utils";

export function buildScrollbar(scrollViewport, className: string) {
  const {
    perspectiveContainer,
    overflowHiddenElement,
    rail,
    thumb
  } = getElements(className);

  placeElements({
    perspectiveContainer,
    overflowHiddenElement,
    rail,
    thumb,
    scrollViewport
  });

  applyViewportStyle({ scrollViewport, overflowHiddenElement });

  return {
    perspectiveContainer,
    overflowHiddenElement,
    rail,
    thumb,
    scrollViewport
  };
}

export function getElements(className: string) {
  const perspectiveContainer = createPerspectiveContainer();
  const overflowHiddenElement = createOverflowHiddenElement(className);
  const rail = createRail();
  const thumb = createThumb();

  return { perspectiveContainer, overflowHiddenElement, rail, thumb };
}

export function placeElements({
  perspectiveContainer,
  overflowHiddenElement,
  rail,
  thumb,
  scrollViewport
}) {
  while (scrollViewport && scrollViewport.hasChildNodes()) {
    perspectiveContainer.appendChild(scrollViewport.firstChild);
  }

  scrollViewport.parentNode.appendChild(overflowHiddenElement);
  overflowHiddenElement.appendChild(scrollViewport);
  scrollViewport.appendChild(perspectiveContainer);
  scrollViewport.appendChild(rail);

  if (isEdge()) {
    perspectiveContainer.appendChild(thumb);

    const edgeDiv = createEdgeDiv();
    overflowHiddenElement.insertBefore(
      edgeDiv,
      overflowHiddenElement.firstElementChild
    );
  } else {
    scrollViewport.appendChild(thumb);
  }
}

function applyViewportStyle({ scrollViewport, overflowHiddenElement }) {
  scrollViewport.classList.add("matrixScrollbar__scrollViewport");
  if (isEdge()) {
    overflowHiddenElement.classList.add(
      "matrixScrollbar__overflowHiddenElement-edgeFix"
    );
  }
}

export function createOverflowHiddenElement(className: string): HTMLDivElement {
  const overflowHiddenElement = document.createElement("div");

  overflowHiddenElement.className = className || "";
  overflowHiddenElement.classList.add("matrixScrollbar__overflowHiddenElement");
  overflowHiddenElement.setAttribute(
    "dir",
    overflowHiddenElement.ownerDocument.dir === "rtl" ? "rtl" : "ltr"
  );
  return overflowHiddenElement;
}

export function createRail(): HTMLDivElement {
  const rail = document.createElement("div");
  rail.classList.add("matrixScrollbar__rail");
  return rail;
}

export function createThumb(): HTMLDivElement {
  const thumb = document.createElement("div");
  thumb.classList.add("matrixScrollbar__thumb");
  return thumb;
}

export function createPerspectiveContainer(): HTMLElement {
  const perspectiveContainer = document.createElement("div");
  perspectiveContainer.classList.add("matrixScrollbar__perspectiveContainer");
  perspectiveContainer.setAttribute("role", "none");
  return perspectiveContainer;
}

// this fixes jagged scroll problem in edge
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18309691/
export function createEdgeDiv(): HTMLDivElement {
  const edgeDiv = document.createElement("div");
  edgeDiv.classList.add("matrixScrollbar__edgeDiv");
  return edgeDiv;
}
