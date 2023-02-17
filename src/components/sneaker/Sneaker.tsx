import "./sneaker.scss";
import img1 from "../../assets/img1.jpeg";
import { HiPlus } from "react-icons/hi";
import { ProductType } from "../../context/ProductsProvider";
import { ReducerAction, ReducerActionType } from "../../context/CartProvider";
import { ReactElement } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Sneaker = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(
    `../../assets/img${product.id}.jpeg`,
    import.meta.url
  ).href;

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  return (
    <div className="sneaker">
      <img src={img} />
      <p className="title">{product.name}</p>
      <div className="info">
        <div className="price">
          <span>PRICE:</span>
          <span>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </span>
        </div>
        <HiPlus onClick={onAddToCart} className="add" />
      </div>
    </div>
  );
};

export default Sneaker;
