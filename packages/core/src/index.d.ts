import "./styles.css";
export interface MatrixScrollbarProps {
  autoHideThumb?: boolean;
  minThumbHeight?: number;
  id?: string;
  totalHeight?: number;
  className?: string;
}
export default class MatrixScrollbar {
  totalHeight: number | undefined;
  minThumbHeight: number | undefined;
  className: string | undefined;
  autoHideThumb: boolean | undefined;
  private _isDragging;
  private _lastClientY;
  private _scrollbar;
  constructor({
    scrollViewport,
    totalHeight,
    className,
    minThumbHeight,
    autoHideThumb
  }: {
    scrollViewport: any;
    totalHeight: any;
    className: any;
    minThumbHeight?: number;
    autoHideThumb?: boolean;
  });
  private init;
  private _createMatrixScrollbar;
  recount: () => void;
  private readonly ownerWindow;
  private _recountScrollbar;
  private _updateThumbPosition;
  private _highlightRail;
  private readonly _setupEventListeners;
  private readonly _onDragMove;
  private readonly _updateScrollYPosition;
  private readonly _onDragStart;
  private readonly _onDragEnd;
  private toggleDraggingState;
  private readonly _onMouseEnterViewport;
  private readonly _onMouseLeaveViewport;
  private _hideThumb;
  private _showThumb;
  private readonly _onRailClick;
  disconnect(): void;
}
