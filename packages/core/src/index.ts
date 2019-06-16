import { isSafari, supportsPassiveEvents } from "@matrix-scrollbar/utils";
import { buildScrollbar } from "./ScrollbarBuilder";
import "./styles.css";

let supportsPassive = supportsPassiveEvents();

export interface MatrixScrollbarProps {
  autoHideThumb?: boolean;
  minThumbHeight?: number;
  id?: string;
  totalHeight?: number; // helps the calculation
  className?: string;
}

interface ThumbElement extends HTMLElement {
  scale?: number;
}

interface IMatrixScrollbar {
  scrollViewport: HTMLElement | undefined;
  perspectiveContainer: HTMLElement | undefined;
  rail: HTMLElement | undefined;
  thumb: ThumbElement;
}

export default class MatrixScrollbar {
  totalHeight: number | undefined;
  minThumbHeight: number | undefined;
  className: string | undefined;
  autoHideThumb: boolean | undefined;

  private _isDragging: boolean = false;
  private _lastClientY: number = 0;

  private _scrollbar: IMatrixScrollbar = {
    scrollViewport: undefined,
    perspectiveContainer: undefined,
    rail: undefined,
    thumb: undefined
  };

  constructor({
    scrollViewport,
    totalHeight,
    className,
    minThumbHeight = 30,
    autoHideThumb = false
  }) {
    this.totalHeight = totalHeight;
    this.minThumbHeight = minThumbHeight;
    this.className = className;
    this.autoHideThumb = autoHideThumb;
    this._scrollbar.scrollViewport = scrollViewport;

    this.init();
  }

  private init = () => {
    this._createMatrixScrollbar();
    this.recount();
    this._setupEventListeners();
  };

  private _createMatrixScrollbar = () => {
    const {
      scrollViewport,
      perspectiveContainer,
      rail,
      thumb
    } = buildScrollbar(this._scrollbar.scrollViewport, this.className);
    this._scrollbar.scrollViewport = scrollViewport;
    this._scrollbar.perspectiveContainer = perspectiveContainer;
    this._scrollbar.rail = rail;
    this._scrollbar.thumb = thumb;
  };

  public recount = () => {
    this._recountScrollbar({
      ...this._scrollbar,
      totalHeight: this.totalHeight,
      minThumbHeight: this.minThumbHeight
    });
  };

  private get ownerWindow() {
    return this._scrollbar.scrollViewport.ownerDocument.defaultView;
  }

  private _recountScrollbar({
    scrollViewport,
    thumb,
    rail,
    totalHeight,
    minThumbHeight
  }) {
    const scrollViewportRect = scrollViewport.getBoundingClientRect();
    const scrollHeight = totalHeight || scrollViewport.scrollHeight;

    let thumbHeight =
      (scrollViewportRect.height * scrollViewportRect.height) / scrollHeight;

    thumbHeight = thumbHeight > minThumbHeight ? thumbHeight : minThumbHeight;

    const maxOffsetTop = scrollViewportRect.height - thumbHeight;
    const maxScrollTop = scrollHeight - scrollViewportRect.height;

    this._updateThumbPosition({
      maxOffsetTop,
      maxScrollTop,
      scrollHeight,
      thumbHeight,
      thumb,
      rail
    });
  }

  private _updateThumbPosition({
    thumb,
    rail,
    maxOffsetTop,
    maxScrollTop,
    scrollHeight,
    thumbHeight
  }) {
    thumb.scale = maxOffsetTop / maxScrollTop;
    thumb.style.transform = `
        scale(${1 / thumb.scale})
        matrix3d(10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, -10)
        translateZ(${-1 - 1 / thumb.scale}px)
        translateX(0)
        `;
    rail.style.height = `${scrollHeight}px`;
    thumb.style.height = `${thumbHeight}px`;
  }

  private _highlightRail({
    event,
    scrollViewport,
    perspectiveContainer,
    rail,
    thumb
  }) {
    const SCROLL_THUMB_WIDTH = 10;
    const rect = scrollViewport.getBoundingClientRect();
    const leftSide = event.clientX - rect.left;
    const rightSide = event.clientX - rect.right;
    const topSide = event.clientY - rect.top;
    const bottomSide = event.clientY - rect.bottom;

    const isWithinContainerY = topSide >= 0 && bottomSide <= 0;
    const isWithinScrollSides =
      document.dir === "rtl"
        ? leftSide <= SCROLL_THUMB_WIDTH && leftSide >= 0
        : rightSide >= -SCROLL_THUMB_WIDTH && rightSide <= 0;

    const isInActiveRailArea = isWithinContainerY && isWithinScrollSides;

    if (isInActiveRailArea) {
      perspectiveContainer.classList.add(
        "matrixScrollbar__perspectiveContainer-railActive"
      );
      rail.classList.add("matrixScrollbar__rail-active");
      thumb.classList.add("matrixScrollbar__thumb-railActive");
    } else {
      perspectiveContainer.classList.remove(
        "matrixScrollbar__perspectiveContainer-railActive"
      );
      rail.classList.remove("matrixScrollbar__rail-active");
      thumb.classList.remove("matrixScrollbar__thumb-railActive");
    }
  }

  private readonly _setupEventListeners = () => {
    // problem with safari when using passive for _onDragStart. (creates horizontal movment)
    this._scrollbar.thumb.addEventListener(
      "mousedown",
      this._onDragStart,
      supportsPassive && !isSafari() ? { passive: true } : { passive: false }
    );
    this._scrollbar.rail.addEventListener(
      "mousedown",
      this._onRailClick,
      supportsPassive && !isSafari() ? { passive: true } : { passive: false }
    );
    this.ownerWindow.addEventListener(
      "mousemove",
      this._onDragMove,
      supportsPassive ? { passive: true } : { passive: false }
    );
    this.ownerWindow.addEventListener(
      "mouseup",
      this._onDragEnd,
      supportsPassive ? { passive: true } : { passive: false }
    );
    this._scrollbar.scrollViewport.addEventListener(
      "mouseenter",
      this._onMouseEnterViewport,
      {
        passive: true
      }
    );
    this._scrollbar.scrollViewport.addEventListener(
      "mouseleave",
      this._onMouseLeaveViewport,
      {
        passive: true
      }
    );
  };

  private readonly _onDragMove = (event: MouseEvent) => {
    if (!this._isDragging) {
      return this._highlightRail({ event, ...this._scrollbar });
    } else {
      this._updateScrollYPosition(event);
    }
  };

  private readonly _updateScrollYPosition = (event: MouseEvent) => {
    this._scrollbar.scrollViewport.scrollTop +=
      (event.clientY - this._lastClientY) / this._scrollbar.thumb.scale;
    this._lastClientY = event.clientY;
  };

  private readonly _onDragStart = (event: MouseEvent) => {
    this.toggleDraggingState(true);
    this._lastClientY = event.clientY;
  };

  private readonly _onDragEnd = () => {
    this.toggleDraggingState(false);
  };

  private toggleDraggingState(isDragging: boolean) {
    this._isDragging = isDragging;

    if (isDragging) {
      this._scrollbar.thumb.classList.add("matrixScrollbar__thumb-active");
      this._scrollbar.scrollViewport.classList.add(
        "matrixScrollbar__scrollViewport-dragging"
      );
    } else {
      this._scrollbar.thumb.classList.remove("matrixScrollbar__thumb-active");
      this._scrollbar.scrollViewport.classList.remove(
        "matrixScrollbar__scrollViewport-dragging"
      );
    }
  }

  private readonly _onMouseEnterViewport = () => {
    this._showThumb();
  };

  private readonly _onMouseLeaveViewport = () => {
    if (!this._isDragging) {
      this._hideThumb();
    }
  };

  private _hideThumb() {
    this._scrollbar.thumb.style.display = this.autoHideThumb ? "none" : "";
  }

  private _showThumb() {
    this._scrollbar.thumb.style.display = "initial";
  }

  private readonly _onRailClick = (event: MouseEvent) => {
    const offsetY =
      event.clientY -
      this._scrollbar.scrollViewport.getBoundingClientRect().top;
    this._scrollbar.scrollViewport.scrollTop =
      (offsetY * this._scrollbar.scrollViewport.scrollHeight) /
      this._scrollbar.scrollViewport.offsetHeight;
  };

  public disconnect() {
    this._scrollbar.thumb.removeEventListener("mousedown", this._onDragStart);
    this._scrollbar.rail.removeEventListener("mousedown", this._onRailClick);
    this.ownerWindow.removeEventListener("mousemove", this._onDragMove);
    this.ownerWindow.removeEventListener("mouseup", this._onDragEnd);
    this._scrollbar.scrollViewport.removeEventListener(
      "mouseenter",
      this._onMouseEnterViewport
    );
    this._scrollbar.scrollViewport.removeEventListener(
      "mouseleave",
      this._onMouseLeaveViewport
    );
  }
}
