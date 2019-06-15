import { Component, ReactNode } from "react";
export interface MatrixScrollbarProps {
  children: ReactNode;
  autoHideThumb?: boolean;
  minThumbHeight?: number;
  id?: string;
  totalHeight?: number;
  className?: string;
}
export declare class MatrixScrollbar extends Component<MatrixScrollbarProps> {
  private _scrollbar;
  private _scrollViewport;
  static defaultProps: {
    autoHideThumb: boolean;
    minThumbHeight: number;
  };
  readonly ownerWindow: any;
  componentDidMount(): void;
  componentDidUpdate(nextProps: MatrixScrollbarProps): void;
  componentWillUnmount(): void;
  render(): ReactNode;
}
