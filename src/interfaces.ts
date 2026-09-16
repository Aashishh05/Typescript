type chaiOrder = { type: string; sugar: number; strong: boolean };

function makechai(order: chaiOrder) {
  console.log(order);
}

function serveChai(order: chaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type res = {ok:true} | {ok:false}

// class myres implements res{
//     ok:boolean = true
// }
 

// literal types

type Teatype = "masala" | "ginder" | "lemon";

function orderChai(tea: Teatype) {
  console.log(tea);
}




type basechai = {tealeaves:number}
type extra = {masala:number}


type masalachai= basechai & extra

const cup:masalachai = {
    tealeaves:2,
    masala:1,
}

type user = {
    username:string;
    bio?:string
}


const user1:user = {username:"ram rai"}
const user2:user = {username:"ram rai",bio:"i am ram"}


type config = {
    readonly appName: string;
    version:number
}

const cfg:config={
    appName:"App",
    version:1
}

// cfg.appName = "masalachai"