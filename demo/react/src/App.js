import React, { Component } from "react";
import { MatrixScrollbar } from "@matrix-scrollbar/react";
import { FixedSizeList as List } from "react-window";
import "./styles.css";

export class App extends Component {
  render() {
    return (
      <div className="demos--wrapper">
        <div className="listWrapper">
          <h3>Normal List</h3>
          <SimpleList />
        </div>
        <div className="listWrapper">
          <h3>React Window List</h3>
          <ReactWindowList />
        </div>
      </div>
    );
  }
}

const items = new Array(100).fill(null);

class ReactWindowList extends Component {
  RenderRow = ({ data, index, style }) => {
    return (
      <div
        className="reactWindowListItem"
        style={{ ...style, background: index % 2 ? "#995cc92e" : "" }}
      >
        #{index}
      </div>
    );
  };

  render() {
    return (
      <MatrixScrollbar className="styledBox">
        <List
          itemData={items}
          itemCount={items.length}
          itemSize={50}
          height={300}
          width={250}
        >
          {this.RenderRow}
        </List>
      </MatrixScrollbar>
    );
  }
}

function SimpleList() {
  return (
    <MatrixScrollbar
      autoHideThumb={false}
      className="styledBox"
      id="simpleList"
    >
      <div className="sizeOfList">
        {items.map((_, index) => (
          <p className="demo--viewportListItem" key={index}>
            {index}
          </p>
        ))}
      </div>
    </MatrixScrollbar>
  );
}
