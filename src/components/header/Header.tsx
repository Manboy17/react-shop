import "./header.scss";
import logo from "../../assets/logo.png";
import trolley from "../../assets/trolley.svg";
import user from "../../assets/user.svg";
import useCart from "../../hooks/useCart";

type PropsType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ toggle, setToggle }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  console.log(totalPrice);
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="" />
        <div className="name">
          <h3>REACT SNEAKERS</h3>
          <span>Shop of the best sneakers</span>
        </div>
      </div>
      <div className="right">
        <div className="trolley">
          <p className="cartItems">{totalItems}</p>
          <img src={trolley} alt="" onClick={() => setToggle(true)} />
          <span>{totalPrice}</span>
        </div>
        <img src={user} alt="" />
      </div>
    </header>
  );
};

export default Header;
