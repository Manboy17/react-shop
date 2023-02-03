import { motion } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/ProductDetails.css";
import CommonSection from "../UI/CommonSection";
import ProductsList from "../UI/ProductsList";

const ProductDetails = () => {
  // dealing with each product's id (implementation with useParams)
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const [rating, setRating] = useState(null);
  const product = products.find((item) => item.id === id);
  const {
    productName,
    imgUrl,
    price,
    description,
    reviews,
    avgRating,
    shortDesc,
    category,
  } = product;

  const [tab, setTab] = useState("desc");

  const relatedProducts = products.filter((item) => item.category === category);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl: imgUrl,
        price,
        productName,
      })
    );
    toast.success("Product added successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    toast.success("Review submitted!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={imgUrl} alt="imgUrl" />
            </Col>
            <Col lg="6" md="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>

                  <p>({avgRating} ratings)</p>
                </div>

                <span>${price}</span>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="btn mt-5"
                  onClick={addToCart}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  onClick={() => setTab("desc")}
                  className={tab === "desc" ? "active__h6" : ""}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={tab === "rev" ? "active__h6" : ""}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="product__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Json Snow</h6>
                          <span>{item.rating} (average rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form onSubmit={handleSubmit}>
                        <div className="form__group">
                          <input
                            ref={reviewUser}
                            type="text"
                            placeholder="Enter name"
                            required
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4 <i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>
                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review message..."
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          className="btn mt-5"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" md="12" className="mt-5 text-center">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
