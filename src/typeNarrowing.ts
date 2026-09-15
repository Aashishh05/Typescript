function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `${kind} chai Making`;
  }

  return `chai order:${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `serving${msg}`;
  }
  return `serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai`;
  }

  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }

  return `chai Order ${size}`;
}

class Normalchai {
  serve() {
    return `serving chai`;
  }
}

class Cuttingchai {
  serve() {
    return `serving chai`;
  }
}

function serve(chai: Normalchai | Cuttingchai) {
  if (chai instanceof Normalchai) {
    return chai.serve;
  }
}

// custom type
type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== "null" &&
    typeof obj.type === "string" &&
    typeof obj.type === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar}`;
  }
  return `serving custom chai : ${item}`;
}


type masalaChai = {
    type:"masala",spiceLevel:number
}

type gingerChai = {
    type:"ginder",amount:number
}

type simpleChai = {
  type: "simple";
  aroma: number;
};


type chai = masalaChai | gingerChai | simpleChai


function MakeChai(order:chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
    
        default:
            break;
    }
}


function brew (order: masalaChai |gingerChai){
    if("spiceLevel" in order){
        
    }
}


function isStringArray(arr:unknown):arr is string[]{

}