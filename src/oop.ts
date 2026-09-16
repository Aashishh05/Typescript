// class chai {
//   flavour: string;
//   price: number;

// //   constructor(flavour: string, price: number) {
// //     this.flavour = flavour;
// //     this.price = price;
// //   }

//   constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this)  // masalachai
//   }
// }

// const masalachai = new chai("ginger");
// masalachai.flavour = "masala";
// masalachai.price = 50;


// public and private
class chai {
    public flavour:string = "masala"
    private secretingredients:string = "cardamom"

    reveal(){
        return this.secretingredients
    }

}

const c = new chai()
c.reveal()


// protected 
class shop{
        protected shopName:string = "chair corner"

}
class Branch extends shop{
    getName(){
        this.shopName
    }
}
new Branch().getName()



class walet{
    #balance = 100  // private

    getbalance(){
        return this.#balance;

    }
}
new walet().getbalance()



// readonly , can only assign once and cannot change
class cup{
    readonly capacity: number = 250

    constructor (capacity:number){
        this.capacity = capacity
    }
}


// controled gets
class modernchai{
    private _sugar = 2

    get sugar(){
        return this._sugar
    }


    set sugar(value:number){
if(value > 5 ) throw new Error ("too sweet chai")
    this._sugar = value
    }
}
const s = new modernchai()
s.sugar = 3



// static
class eakchai{

static shopName:string = "chai pasal"

constructor(public flavour:string){

}
}

console.log(eakchai.shopName)



// abstract classes

abstract class drink{

    abstract make():void
}

class mychai extends drink{
    make(){
        console.log("brewing chai")
    }
}



// composition  ....inheritance
class Heater{
    heat(){}
}

class chaimaker{
    constructor(private heater:Heater){
       
    }
    make(){
        this.heater.heat
    }
}