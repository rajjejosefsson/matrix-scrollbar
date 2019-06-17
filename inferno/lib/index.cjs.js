"use strict";
function _interopDefault(t) {
  return t && "object" == typeof t && "default" in t ? t.default : t;
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var Inferno = _interopDefault(require("inferno")),
  infernoCompat = require("inferno-compat");
function _defineProperty(t, e, r) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[e] = r),
    t
  );
}
function unwrapExports(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function createCommonjsModule(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
var index_cjs_5 = createCommonjsModule(function(t) {
    function e(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function r(t) {
      for (var r = 1; r < arguments.length; r++) {
        var i = null != arguments[r] ? arguments[r] : {},
          o = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
          (o = o.concat(
            Object.getOwnPropertySymbols(i).filter(function(t) {
              return Object.getOwnPropertyDescriptor(i, t).enumerable;
            })
          )),
          o.forEach(function(r) {
            e(t, r, i[r]);
          });
      }
      return t;
    }
    var i,
      o =
        ((function(t, e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isEdge = function() {
              return -1 !== window.navigator.userAgent.indexOf("Edge");
            }),
            (e.isIE = function() {
              return -1 !== window.navigator.userAgent.indexOf("Trident/");
            }),
            (e.isSafari = function() {
              return -1 !== window.navigator.userAgent.indexOf("WebKit");
            }),
            (e.supportsPassiveEvents = function() {
              let t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                  get: function() {
                    t = !0;
                  }
                });
                window.addEventListener("testPassive", null, e),
                  window.removeEventListener("testPassive", null, e);
              } catch (t) {}
              return t;
            });
        })((i = { exports: {} }), i.exports),
        i.exports);
    !(function(t) {
      t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, "default") &&
        t.default;
    })(o);
    var l = o.isEdge,
      s = o.isIE,
      n = (o.isSafari, o.supportsPassiveEvents);
    function a(t, e) {
      const {
        perspectiveContainer: r,
        overflowHiddenElement: i,
        rail: o,
        thumb: s
      } = (function(t) {
        return {
          perspectiveContainer: p(),
          overflowHiddenElement: c(t),
          rail: h(),
          thumb: d()
        };
      })(e);
      return (
        (function({
          perspectiveContainer: t,
          overflowHiddenElement: e,
          rail: r,
          thumb: i,
          scrollViewport: o
        }) {
          for (; o && o.hasChildNodes(); ) t.appendChild(o.firstChild);
          if (
            (o.parentNode.appendChild(e),
            e.appendChild(o),
            o.appendChild(t),
            o.appendChild(r),
            l())
          ) {
            t.appendChild(i);
            const r = (function() {
              const t = document.createElement("div");
              return t.classList.add("matrixScrollbar__edgeDiv"), t;
            })();
            e.insertBefore(r, e.firstElementChild);
          } else o.appendChild(i);
        })({
          perspectiveContainer: r,
          overflowHiddenElement: i,
          rail: o,
          thumb: s,
          scrollViewport: t
        }),
        (function({ scrollViewport: t, overflowHiddenElement: e }) {
          t.classList.add("matrixScrollbar__scrollViewport"),
            l() &&
              e.classList.add("matrixScrollbar__overflowHiddenElement-edgeFix");
        })({ scrollViewport: t, overflowHiddenElement: i }),
        {
          perspectiveContainer: r,
          overflowHiddenElement: i,
          rail: o,
          thumb: s,
          scrollViewport: t
        }
      );
    }
    function c(t) {
      const e = document.createElement("div");
      return (
        (e.className = t || ""),
        e.classList.add("matrixScrollbar__overflowHiddenElement"),
        e.setAttribute("dir", "rtl" === e.ownerDocument.dir ? "rtl" : "ltr"),
        e
      );
    }
    function h() {
      const t = document.createElement("div");
      return t.classList.add("matrixScrollbar__rail"), t;
    }
    function d() {
      const t = document.createElement("div");
      return t.classList.add("matrixScrollbar__thumb"), t;
    }
    function p() {
      const t = document.createElement("div");
      return (
        t.classList.add("matrixScrollbar__perspectiveContainer"),
        t.setAttribute("role", "none"),
        t
      );
    }
    !(function(t, e) {
      void 0 === e && (e = {});
      var r = e.insertAt;
      if (t && "undefined" != typeof document) {
        var i = document.head || document.getElementsByTagName("head")[0],
          o = document.createElement("style");
        (o.type = "text/css"),
          "top" === r && i.firstChild
            ? i.insertBefore(o, i.firstChild)
            : i.appendChild(o),
          o.styleSheet
            ? (o.styleSheet.cssText = t)
            : o.appendChild(document.createTextNode(t));
      }
    })(
      ".matrixScrollbar__scrollViewport::-webkit-scrollbar{width:0;height:0}.matrixScrollbar__overflowHiddenElement{overflow:hidden;position:relative}.matrixScrollbar__scrollViewport{transform-style:preserve-3d;perspective:1px;pointer-events:auto;-webkit-user-select:initial;-moz-user-select:initial;-ms-user-select:initial;user-select:initial;overflow-x:hidden!important;display:flex;scrollbar-width:none}[dir=rtl] .matrixScrollbar__scrollViewport{perspective-origin:0 0}[dir=ltr] .matrixScrollbar__scrollViewport{perspective-origin:100% 0}.matrixScrollbar__scrollViewport-dragging{pointer-events:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}[dir=ltr] .matrixScrollbar__rail{right:0}[dir=rtl] .matrixScrollbar__rail{left:0}.matrixScrollbar__rail{width:10px;background-color:hsla(0,0%,78.4%,.1);position:absolute;top:0;z-index:-1}.matrixScrollbar__rail-active{background-color:hsla(0,0%,78.4%,.4)}[dir=ltr] .matrixScrollbar__thumb{right:-10px}[dir=rtl] .matrixScrollbar__thumb{left:-10px}.matrixScrollbar__thumb{pointer-events:auto;position:absolute;top:0;width:7px;background-color:#adadad;border-radius:4px}.matrixScrollbar__thumb-railActive{width:10px;border-radius:8px}[dir=rtl] .matrixScrollbar__thumb{transform-origin:top left}[dir=ltr] .matrixScrollbar__thumb{transform-origin:top right}.matrixScrollbar__perspectiveContainer{transform-style:preserve-3d;position:absolute;width:calc(100% - 10px)}[dir=rtl] .matrixScrollbar__perspectiveContainer{perspective-origin:0 0}[dir=ltr] .matrixScrollbar__perspectiveContainer{perspective-origin:100% 0}.matrixScrollbar__overflowHiddenElement-edgeFix{-ms-overflow-style:none;transform:translateZ(0)}.matrixScrollbar__edgeDiv{position:fixed;top:1;z-index:1;width:1px;height:1px}"
    );
    let u = n();
    t.exports = class {
      constructor({
        scrollViewport: t,
        totalHeight: i,
        className: o,
        minThumbHeight: l = 30,
        autoHideThumb: n = !1
      }) {
        e(this, "totalHeight", void 0),
          e(this, "minThumbHeight", void 0),
          e(this, "className", void 0),
          e(this, "autoHideThumb", void 0),
          e(this, "_isDragging", !1),
          e(this, "_lastClientY", 0),
          e(this, "_scrollbar", {
            scrollViewport: void 0,
            perspectiveContainer: void 0,
            rail: void 0,
            thumb: void 0
          }),
          e(this, "init", () => {
            this._createMatrixScrollbar(),
              this.recount(),
              this._setupEventListeners();
          }),
          e(this, "_createMatrixScrollbar", () => {
            const {
              scrollViewport: t,
              perspectiveContainer: e,
              rail: r,
              thumb: i
            } = a(this._scrollbar.scrollViewport, this.className);
            (this._scrollbar.scrollViewport = t),
              (this._scrollbar.perspectiveContainer = e),
              (this._scrollbar.rail = r),
              (this._scrollbar.thumb = i);
          }),
          e(this, "recount", () => {
            this._recountScrollbar(
              r({}, this._scrollbar, {
                totalHeight: this.totalHeight,
                minThumbHeight: this.minThumbHeight
              })
            );
          }),
          e(this, "_setupEventListeners", () => {
            this._scrollbar.thumb.addEventListener(
              "mousedown",
              this._onDragStart,
              u ? { passive: !0 } : { passive: !1 }
            ),
              this._scrollbar.rail.addEventListener(
                "mousedown",
                this._onRailClick,
                u ? { passive: !0 } : { passive: !1 }
              ),
              this.ownerWindow.addEventListener(
                "mousemove",
                this._onDragMove,
                u ? { passive: !0 } : { passive: !1 }
              ),
              this.ownerWindow.addEventListener(
                "mouseup",
                this._onDragEnd,
                u ? { passive: !0 } : { passive: !1 }
              ),
              this._scrollbar.scrollViewport.addEventListener(
                "mouseenter",
                this._onMouseEnterViewport,
                { passive: !0 }
              ),
              this._scrollbar.scrollViewport.addEventListener(
                "mouseleave",
                this._onMouseLeaveViewport,
                { passive: !0 }
              );
          }),
          e(this, "_onDragMove", t => {
            if (!this._isDragging)
              return this._highlightRail(r({ event: t }, this._scrollbar));
            this._updateScrollYPosition(t);
          }),
          e(this, "_updateScrollYPosition", t => {
            (this._scrollbar.scrollViewport.scrollTop +=
              (t.clientY - this._lastClientY) / this._scrollbar.thumb.scale),
              (this._lastClientY = t.clientY);
          }),
          e(this, "_onDragStart", t => {
            this.toggleDraggingState(!0), (this._lastClientY = t.clientY);
          }),
          e(this, "_onDragEnd", () => {
            this.toggleDraggingState(!1);
          }),
          e(this, "_onMouseEnterViewport", () => {
            this._showThumb();
          }),
          e(this, "_onMouseLeaveViewport", () => {
            this._isDragging || this._hideThumb();
          }),
          e(this, "_onRailClick", t => {
            const e =
              t.clientY -
              this._scrollbar.scrollViewport.getBoundingClientRect().top;
            this._scrollbar.scrollViewport.scrollTop =
              (e * this._scrollbar.scrollViewport.scrollHeight) /
              this._scrollbar.scrollViewport.offsetHeight;
          }),
          s() ||
            ((this.totalHeight = i),
            (this.minThumbHeight = l),
            (this.className = o),
            (this.autoHideThumb = n),
            (this._scrollbar.scrollViewport = t),
            this.init());
      }
      get ownerWindow() {
        return this._scrollbar.scrollViewport.ownerDocument.defaultView;
      }
      _recountScrollbar({
        scrollViewport: t,
        thumb: e,
        rail: r,
        totalHeight: i,
        minThumbHeight: o
      }) {
        const l = t.getBoundingClientRect(),
          s = i || t.scrollHeight;
        let n = (l.height * l.height) / s;
        n = n > o ? n : o;
        const a = l.height - n,
          c = s - l.height;
        this._updateThumbPosition({
          maxOffsetTop: a,
          maxScrollTop: c,
          scrollHeight: s,
          thumbHeight: n,
          thumb: e,
          rail: r
        });
      }
      _updateThumbPosition({
        thumb: t,
        rail: e,
        maxOffsetTop: r,
        maxScrollTop: i,
        scrollHeight: o,
        thumbHeight: l
      }) {
        (t.scale = r / i),
          (t.style.transform = `\n        scale(${1 /
            t.scale})\n        matrix3d(10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, -10)\n        translateZ(${-1 -
            1 / t.scale}px)\n        translateX(0)\n        `),
          (e.style.height = `${o}px`),
          (t.style.height = `${l}px`);
      }
      _highlightRail({
        event: t,
        scrollViewport: e,
        perspectiveContainer: r,
        rail: i,
        thumb: o
      }) {
        const l = e.getBoundingClientRect(),
          s = t.clientX - l.left,
          n = t.clientX - l.right,
          a = t.clientY - l.top,
          c = t.clientY - l.bottom,
          h = a >= 0 && c <= 0,
          d = "rtl" === document.dir ? s <= 10 && s >= 0 : n >= -10 && n <= 0;
        h && d
          ? (r.classList.add(
              "matrixScrollbar__perspectiveContainer-railActive"
            ),
            i.classList.add("matrixScrollbar__rail-active"),
            o.classList.add("matrixScrollbar__thumb-railActive"))
          : (r.classList.remove(
              "matrixScrollbar__perspectiveContainer-railActive"
            ),
            i.classList.remove("matrixScrollbar__rail-active"),
            o.classList.remove("matrixScrollbar__thumb-railActive"));
      }
      toggleDraggingState(t) {
        (this._isDragging = t),
          t
            ? (this._scrollbar.thumb.classList.add(
                "matrixScrollbar__thumb-active"
              ),
              this._scrollbar.scrollViewport.classList.add(
                "matrixScrollbar__scrollViewport-dragging"
              ))
            : (this._scrollbar.thumb.classList.remove(
                "matrixScrollbar__thumb-active"
              ),
              this._scrollbar.scrollViewport.classList.remove(
                "matrixScrollbar__scrollViewport-dragging"
              ));
      }
      _hideThumb() {
        this._scrollbar.thumb.style.display = this.autoHideThumb ? "none" : "";
      }
      _showThumb() {
        this._scrollbar.thumb.style.display = "initial";
      }
      disconnect() {
        this._scrollbar.thumb.removeEventListener(
          "mousedown",
          this._onDragStart
        ),
          this._scrollbar.rail.removeEventListener(
            "mousedown",
            this._onRailClick
          ),
          this.ownerWindow.removeEventListener("mousemove", this._onDragMove),
          this.ownerWindow.removeEventListener("mouseup", this._onDragEnd),
          this._scrollbar.scrollViewport.removeEventListener(
            "mouseenter",
            this._onMouseEnterViewport
          ),
          this._scrollbar.scrollViewport.removeEventListener(
            "mouseleave",
            this._onMouseLeaveViewport
          );
      }
    };
  }),
  Scrollbar = unwrapExports(index_cjs_5);
const defaultProps = { autoHideThumb: !0, minThumbHeight: 30 };
class MatrixScrollbar extends Inferno.Component {
  constructor(...t) {
    super(...t),
      _defineProperty(this, "_scrollbar", void 0),
      _defineProperty(this, "_scrollViewport", void 0);
  }
  get ownerWindow() {
    return this._scrollbar.scrollViewport.ownerDocument.defaultView;
  }
  componentDidMount() {
    let t = document.querySelector(`#${this.props.viewportId}`);
    t || (t = infernoCompat.findDOMNode(this)),
      (this._scrollViewport = t),
      this._scrollViewport
        ? (this._scrollbar = new Scrollbar({
            scrollViewport: this._scrollViewport,
            totalHeight: this.props.totalHeight,
            minThumbHeight: this.props.minThumbHeight,
            className: this.props.className,
            autoHideThumb: this.props.autoHideThumb
          }))
        : console.warn("MatrixScrollbar: there were no target prop provided");
  }
  componentDidUpdate(t) {
    this._scrollViewport &&
      this._scrollbar &&
      ((this.props.totalHeight && this.props.totalHeight === t.totalHeight) ||
        this._scrollbar.recount());
  }
  componentWillUnmount() {
    this._scrollbar.disconnect();
  }
  render() {
    return this.props.children;
  }
}
_defineProperty(MatrixScrollbar, "defaultProps", defaultProps),
  (exports.MatrixScrollbar = MatrixScrollbar);
