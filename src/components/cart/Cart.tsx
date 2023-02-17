import "./cart.scss";
import { GrFormClose } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import useCart from "../../hooks/useCart";
import CartItem from "../cartItem/CartItem";

type PropsType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ toggle, setToggle }: PropsType) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const [checkout, setCheckout] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const handleCheckout = () => {
    dispatch({ type: REDUCER_ACTIONS.CHECKOUT });
    setCheckout(true);
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (!cartRef.current?.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  console.log(toggle);

  return (
    <div className={toggle ? "overlay" : "overlay displayNone"}>
      <div ref={cartRef} className="cart">
        {checkout ? (
          <div className="order">
            <h2>Thanks for your order!</h2>
            <button onClick={() => setToggle(false)}>Come Back</button>
          </div>
        ) : (
          <>
            <GrFormClose
              className="closeCart"
              onClick={() => setToggle(false)}
            />
            <h1 style={{ marginBottom: "30px" }}>Cart</h1>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
              );
            })}
            <div className="cartBottom">
              <div className="total">
                <span>Total: </span>
                <div className="dotted" />
                <p>{totalPrice}</p>
              </div>
              <button
                disabled={!totalItems}
                onClick={handleCheckout}
                className="checkout"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
