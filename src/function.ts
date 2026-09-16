function makechai(type: string, cups: number) {
  console.log(`making${cups} of ${type}`);
}

makechai("masala", 3);

function getchaiprice(): number {
  return 35;
}

function makeorder(order: string) {
  if (!order) return null;
  return order;
}

function logchai(): void {
  console.log("chai is ready");
}

function orderchai(type?: string) {
  console.log();
}

function chai(type: string = "masala") {}

function createchai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}

const add = (a: number, b: number):number => {
  return a + b;
};

add(5, 6);
