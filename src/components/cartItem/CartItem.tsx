import { GrFormClose } from "react-icons/gr";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../context/CartProvider";
import "./cartItem.scss";
import { ChangeEvent, ReactElement } from "react";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = new URL(
    `../../assets/img${item.id}.jpeg`,
    import.meta.url
  ).href;

  const totalLine: number = item.qty * item.price;

  const highestQty: number = 5 > item.qty ? 5 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );

  const options: ReactElement[] = optionValues.map((option) => {
    return (
      <option key={`option${option}`} value={option}>
        {option}
      </option>
    );
  });

  const handleRemove = () =>
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QTY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  return (
    <div className="product">
      <img width={70} height={70} src={img} alt="" />
      <div className="name">
        <span>{item.name}</span>
        <div className="itemQty">
          <select className="selectQty" value={item.qty} onChange={onChangeQty}>
            {options}
          </select>
        </div>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(item.price)}
        </p>
      </div>
      <GrFormClose onClick={handleRemove} className="close" />
    </div>
  );
};

export default CartItem;
