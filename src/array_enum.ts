// Arrays

const chaiflavour: string[] = ["ginger", "masala"];
const chaiprice: number[] = [12, 23, 44];

const rating: Array<number> = [4.5, 3.4, 5.0];

type chai = { name: string; price: number };

const chaimenu: chai[] = [
  { name: "masala", price: 30 },
  { name: "ginger", price: 40 },
];
chaimenu.push({ name: "normal chai", price: 50 });

const cities: readonly string[] = ["ktm", "bhaktapur"];
// cities.push("pune")  cannot push any items inside the readonly array

// two dimentional array
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// tuples

let chaituple: [string, number];
chaituple = ["masala", 40];

// chaituple = [30,"masala"] tuples dont allow this , inclue the values in the order defined above like string then number

let userinfo: [string, number, boolean?];

userinfo = ["ram", 40];
userinfo = ["shyam", 40, false];

const location: readonly [number, number] = [23.44, 44.55];

// named tuple
const chaiItems: [name: string, price: number] = ["masala", 40];

// Enums

enum cupsize {
  SMALL,
  MEDIUM,
  LARGE,
}
const size = cupsize.MEDIUM;

enum status {
  PENDING = 100,
  CANCELLED, // 101
  SERVED, // 102
}

enum chaitype {
  MASALA = "masala",
  GINGER = "ginger",
}

function makechai(type: chaitype) {
  console.log(`making : ${type}`);
}

makechai(chaitype.GINGER);



// not a standard practice 
enum randomenum {
  ID = 1,
  NAME = "chai",
}
// enums should be better of , only in string or only in number or only in one datatype


const enum sugar {
    LOW = 1, 
    MEDIUM = 2,
    HIGH = 3
}

const s = sugar.LOW


let t:[string , number ] = ["chai",40]

t.push("extra")