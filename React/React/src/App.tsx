import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { ChaiList } from "./components/ChaiList.tsx";
import { Counter } from "./components/Counter.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 45 },
  { id: 2, name: "ginger", price: 35 },
  { id: 3, name: "lemon", price: 25 },
];
function App() {
  return (
    <>
      <h1>Get started</h1>
      <ChaiCard name="Headphone" price={5000} />
      <ChaiCard name="Iphone" price={89000} />

      <div>
        <Counter />
      </div>

      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm onSubmit={(order) => console.log("placed",order.name,order.cups)} />
      </div>
    </>
  );
}

export default App;
