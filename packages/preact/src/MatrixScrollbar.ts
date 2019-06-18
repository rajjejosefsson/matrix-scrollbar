import Scrollbar from "@matrix-scrollbar/core";
import { Component } from "preact";
import { findDOMNode } from "preact-compat";

const defaultProps = {
  autoHideThumb: true,
  minThumbHeight: 30
};

export interface MatrixScrollbarProps {
  children: any;
  autoHideThumb?: boolean;
  minThumbHeight?: number;
  viewportId?: string;
  totalHeight?: number;
  class?: string;
}

export class MatrixScrollbar extends Component<MatrixScrollbarProps, {}> {
  private _scrollbar: any;
  private _scrollViewport: any;

  public static defaultProps = defaultProps;

  get ownerWindow() {
    return this._scrollbar.scrollViewport.ownerDocument.defaultView;
  }

  componentDidMount() {
    let viewport = document.querySelector(`#${this.props.viewportId}`);

    if (!viewport) {
      viewport = findDOMNode(this);
    }

    this._scrollViewport = viewport;

    if (!this._scrollViewport) {
      console.warn("MatrixScrollbar: there were no target prop provided");
      return;
    }

    this._scrollbar = new Scrollbar({
      scrollViewport: this._scrollViewport,
      totalHeight: this.props.totalHeight,
      minThumbHeight: this.props.minThumbHeight || 30,
      className: this.props.class,
      autoHideThumb: this.props.autoHideThumb || true
    });
  }

  componentDidUpdate(nextProps) {
    if (this._scrollViewport && this._scrollbar) {
      if (
        !this.props.totalHeight ||
        this.props.totalHeight !== nextProps.totalHeight
      ) {
        this._scrollbar.recount();
      }
    }
  }

  componentWillUnmount() {
    this._scrollbar.disconnect();
  }

  render(props) {
    return props.children[0];
  }
}
