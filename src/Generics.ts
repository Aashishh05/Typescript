function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(45);

wrapInArray({ flavour: "ginger" });

// function hello<C,D> () {}

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
  // return [b,a]  not like this
}

pair("masala", 45);
pair("masala", { flavour: "ginger" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = {
  content: 34,
};

const stringBox: Box<string> = {
  content: "34",
};

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};
