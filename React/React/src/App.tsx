import "./App.css";
import { Card } from "./components/Card.tsx";
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
        <OrderForm
          onSubmit={(order) => console.log("placed", order.name, order.cups)}
        />
      </div>

      <div>
        <Card title="Chai Code" footer={<button>Order Now</button>} />
        {/* button means react node 
        means html elements means react node */}
      </div>
    </>
  );
}

export default App;
