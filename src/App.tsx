import "./App.scss";
import Header from "./components/header/Header";
import search from "./assets/search.svg";
import Sneaker from "./components/sneaker/Sneaker";
import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import useProducts from "./hooks/useProducts";
import useCart from "./hooks/useCart";
import Footer from "./components/footer/Footer";

function App() {
  const [toggle, setToggle] = useState<boolean>(false);

  const { products } = useProducts();
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const [value, setValue] = useState<string>("");

  return (
    <div className="app">
      {toggle && <Cart toggle={toggle} setToggle={setToggle} />}
      <Header toggle={toggle} setToggle={setToggle} />
      <div className="subHeader">
        <h1>All sneakers</h1>
        <div className="input">
          <img src={search} alt="" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="sneakers">
        {products
          .filter((item) =>
            item.name.toUpperCase().includes(value.toUpperCase())
          )
          .map((product) => {
            const inCart: boolean = cart.some((item) => item.id === product.id);

            return (
              <Sneaker
                key={product.id}
                product={product}
                REDUCER_ACTIONS={REDUCER_ACTIONS}
                dispatch={dispatch}
                inCart={inCart}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
