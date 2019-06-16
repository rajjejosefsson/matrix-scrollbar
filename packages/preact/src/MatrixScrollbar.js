import Scrollbar from "@matrix-scrollbar/core";
import { isIE } from "@matrix-scrollbar/utils";
import { Component } from "preact";
import { findDOMNode } from "preact-compat";

export class MatrixScrollbar extends Component {
  get ownerWindow() {
    return this._scrollbar.scrollViewport.ownerDocument.defaultView;
  }

  componentDidMount() {
    if (isIE()) {
      console.warn("MatrixScrollbar doesnt support Internet Explorer yet...");
      return;
    }

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
      autoHideThumb: this.props.autoHideThumbs || true
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
