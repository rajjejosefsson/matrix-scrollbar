import Scrollbar from "@matrix-scrollbar/core";
import { isIE } from "@matrix-scrollbar/utils";

const MatrixScrollbar = {
  name: "MatrixScrollbar",
  props: {
    viewportId: {
      defualt: null,
      type: String
    },
    totalHeight: {
      defualt: 0,
      type: Number
    },
    minThumbHeight: {
      default: 30,
      type: Number
    },
    autoHideThumb: {
      defualt: true,
      type: Boolean
    },
    class: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      scrollbar: null
    };
  },
  mounted() {
    if (isIE()) {
      console.warn("MatrixScrollbar doesnt support Internet Explorer yet...");
      return;
    }

    let viewport = document.querySelector(`#${this.viewportId}`);

    if (!viewport) {
      viewport = this.$el;
    }

    if (!viewport) {
      console.warn("MatrixScrollbar: there were no target prop provided");
      return;
    }

    this.scrollbar = new Scrollbar({
      scrollViewport: viewport,
      totalHeight: this.totalHeight,
      minThumbHeight: TouchList.minThumbHeight,
      className: this.class,
      autoHideThumb: this.autoHideThumb
    });
  },
  destroyed() {
    this.scrollbar.disconnect();
  },
  render() {
    return this.$slots.default;
  }
};

export { MatrixScrollbar };
