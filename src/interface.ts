interface Chai {
  flavour: String;
  price: number;
  milk?: boolean;
}

const masalachai: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: String;
}

const s: Shop = { id: 1, name: "chaicode cafe" };
//s.id = 2

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(price: number): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Start");
  },

  stop() {
    console.log("Stop");
  },
};

interface ChaiRatings {
  [flavour: String]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.0,
};

interface User {
  name: String;
}

interface User {
  age: number;
}

const u: User = {
  name: "Ram",
  age: 34,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}
