import Inferno, { InfernoNode } from "inferno";
export interface MatrixScrollbarProps {
  children: InfernoNode;
  autoHideThumb?: boolean;
  minThumbHeight?: number;
  viewportId?: string;
  totalHeight?: number;
  className?: string;
}
export declare class MatrixScrollbar extends Inferno.Component<
  MatrixScrollbarProps
> {
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
  render(): Inferno.InfernoNode;
}
