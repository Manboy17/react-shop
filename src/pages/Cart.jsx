import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../UI/CommonSection";
import "../styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      dispatch(cartActions.clearCart());
      navigate("/home");
      toast.success("Thanks for your order!");
    } else {
      toast.error("Add at least 1 product");
    }
  };

  return (
    <>
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No products are added!</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div className="d-flex align-items-center justify-content-between">
                <h6>Subtotal</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p className="fs-6 mt-2">
                taxes and shiping will calculate in ckeckout
              </p>
              <div>
                <button className="btn w-100" onClick={handleCheckout}>
                  Checkout
                </button>

                <button className="btn w-100 mt-3">
                  <Link to="/shop">Cointinue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(cartActions.removeItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="tdImg" />
      </td>
      <td className="td">{item.title}</td>
      <td className="td">${item.price}</td>
      <td className="td">{item.quantity}px</td>
      <td className="td">
        <motion.i
          onClick={handleDelete}
          whileTap={{ scale: 1.2 }}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
