import Scrollbar from "@matrix-scrollbar/core";
import { Component, InfernoNode } from "inferno";
import { findDOMNode } from "inferno-compat";

export interface MatrixScrollbarProps {
  children: InfernoNode;
  autoHideThumb?: boolean;
  minThumbHeight?: number;
  viewportId?: string;
  totalHeight?: number;
  className?: string;
}

const defaultProps = {
  autoHideThumb: true,
  minThumbHeight: 30
};

export class MatrixScrollbar extends Component<MatrixScrollbarProps> {
  private _scrollbar: any;
  private _scrollViewport: any;

  public static defaultProps = defaultProps;

  public get ownerWindow() {
    return this._scrollbar.scrollViewport.ownerDocument.defaultView;
  }

  public componentDidMount() {
    let viewport = document.querySelector(
      `#${this.props.viewportId}`
    ) as HTMLElement;

    if (!viewport) {
      viewport = findDOMNode(this) as HTMLElement;
    }

    this._scrollViewport = viewport;

    if (!this._scrollViewport) {
      console.warn("MatrixScrollbar: there were no target prop provided");
      return;
    }

    this._scrollbar = new Scrollbar({
      scrollViewport: this._scrollViewport,
      totalHeight: this.props.totalHeight,
      minThumbHeight: this.props.minThumbHeight,
      className: this.props.className,
      autoHideThumb: this.props.autoHideThumb
    });
  }

  public componentDidUpdate(nextProps: MatrixScrollbarProps) {
    if (this._scrollViewport && this._scrollbar) {
      if (
        !this.props.totalHeight ||
        this.props.totalHeight !== nextProps.totalHeight
      ) {
        this._scrollbar.recount();
      }
    }
  }

  public componentWillUnmount() {
    this._scrollbar.disconnect();
  }

  public render() {
    return this.props.children;
  }
}
