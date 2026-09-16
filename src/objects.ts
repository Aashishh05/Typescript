const chai = {
  name: "masala chai",
  price: 30,
  isHot: true,
};

// infer in typescript

// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger tea",
  price: 30,
  isHot: true,
};

// alias property

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const normalChai: Tea = {
  name: "adhrat chai",
  price: 45,
  ingredients: ["ginger", "tea leaves"],
};

// duck typing

type cup = { size: string };
let smallcup: cup = { size: "200ml" };
let bigcup = { size: "500ml", material: "steel" };
smallcup = bigcup;

type brew = { brewtime: number };
const coffee = { brewtime: 5, beans: "arabica" };

const chaibrew: brew = coffee;

type user = { username: string; password: String };
const u: user = {
  username: "ram",
  password: "12",
};

type item = { name: string; quantity: number };
type address = { street: string; pin: number };
type order = { id: string; items: item[]; address: address };

type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updatedchai = (updates: Partial<chai>) => {
  console.log("updating chai with", updates);
};

updatedchai({ price: 45 });
updatedchai({ isHot: false });
updatedchai({});

type chaiorder = { name?: string; quantity?: number };

const placeorder = (order: Required<chaiorder>) => {
  console.log(order);
};

placeorder({
  name: "masalachai",
  quantity: 4,
});
