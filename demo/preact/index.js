/* eslint-disable */

import "./style";
import { Component } from "preact";
import { MatrixScrollbar } from "@matrix-scrollbar/preact";

const items = new Array(100).fill(null);

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Preact</h1>

        <MatrixScrollbar
          autoHideThumb={false}
          class="styledBox"
          id="simpleList"
        >
          <div className="sizeOfList">
            {items.map((_, index) => (
              <p class="demo--viewportListItem" key={index}>
                {index}
              </p>
            ))}
          </div>
        </MatrixScrollbar>
      </div>
    );
  }
}
