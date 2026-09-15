// union

let subs: number | string = "1M";

// can create own data types
let apiReqStatus: "pending" | "success" | "error" = "pending";

apiReqStatus = "success";

let airlineSeat: "window" | "middle" = "window";

airlineSeat = "middle";

// any

const orders = ["12", "23", "45", "43"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order == "45") {
    currentOrder = order;
    break;
  }

  currentOrder = "12";
}

console.log(currentOrder);
