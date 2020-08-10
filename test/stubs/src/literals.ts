const objectLiteral = {
  valueZ: 'foo',
  valueY: function () {
    return 'foo';
  },
  valueX: {
    valueZ: 'foo',
    valueY: (z: string) => {
      return { a: 'test', b: z };
    },
    valueA: [100, 200, 300],
  },
  valueA: 100,
  valueB: true,
  /**
   * Comment for valueN
   */ valueN: function (n: number) {
    return 2;
  },
};

let typeLiteral: {
  /**
   * Comment for valueZ
   */
  valueZ: string;
  valueY: { (): string };
  valueX: {
    valueZ: string;
    valueY: { (z: string): { a: string; b: string } };
    valueA: number[];
  };
  valueA?: number;
  valueB?: boolean;
};
