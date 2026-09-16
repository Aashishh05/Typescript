let res: any = "42";

// forceful type assertion
let numericlength: number = (res as string).length;

type Book = {
  name: string;
};

let bookString = `{"name" : "it is book"}`;

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElements = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.4;
value.toUpperCase();

let val: unknown;

val = "chai";
val = [1, 2, 3];
val = 2.4;

if (typeof val === "string") {
  val.toUpperCase();
}

try {
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "ram rai";

const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("redirecting to userdashboard");

    return;
  }
  role;
}

function neverReturn():never{
    while(true){
        
    }
}
