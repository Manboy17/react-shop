import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../UI/CommonSection";
import "../styles/Shop.css";
import { useState } from "react";
import products from "../assets/data/products";
import ProductsList from "../UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleSort = (e) => {
    const value = e.target.value;

    if (value === "none") {
      setProductsData([...products]);
    }
    if (value === "ascending") {
      const sortedProducts = products.sort((a, b) => a.price - b.price);
      setProductsData(sortedProducts);
    }

    if (value === "descending") {
      const sortedProducts = products.sort((a, b) => b.price - a.price);
      setProductsData(sortedProducts);
    }
  };

  const handleFilter = (e) => {
    const productValue = e.target.value;

    if (productValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (productValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (productValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }

    if (productValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }

    if (productValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <>
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option value="none">Sort By</option>
                  <option value="ascending">ascending</option>
                  <option value="descending">descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <section>
              <Container>
                <Row>
                  {productsData.length === 0 ? (
                    <h1 className="text-center fs-4">No prodcts are found!</h1>
                  ) : (
                    <ProductsList data={productsData} />
                  )}
                </Row>
              </Container>
            </section>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
