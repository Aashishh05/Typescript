import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";

function App() {
  return (
    <>
      <h1>Get started</h1>
      <ChaiCard name="Headphone" price={5000} />
       <ChaiCard name="Iphone" price={89000} />

       <div>
        <Counter />
       </div>
    </>
  );
}

export default App;
