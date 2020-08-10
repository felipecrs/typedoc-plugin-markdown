class Control {
  state: any;
}

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

export interface MixedProperties {
  /**
   * Comment for color
   */
  color?: string;
  width: number;
  select(): void;
  (source: string, subString: string): boolean;
  readonly y: number;
  readonly x?: string;
  control: Control;
  shape: Shape;
  mixedObject: {
    /**
     * type declaration comment
     */
    x: string;
    y: number;
  };
  nestedMixedObject: {
    valueZ: string;
    valueY: { (z: string): { a: string; b: string } };
    valueA: number[];
  };
}

export interface IndexableInterface {
  [index: number]: string;
}

export interface SelectableControl extends Control {
  select(): void;
}

export interface Square extends Shape, PenStroke {
  sideLength: number;
}
