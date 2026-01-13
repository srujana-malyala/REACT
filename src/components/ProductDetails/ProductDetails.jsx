import { useParams } from "react-router-dom";
import productsData from "../Products/productsData";
import { useState } from "react";
import { Link } from "react-router-dom"
import "./ProductDetails.css";
import { Ratecount } from "../ProductDetails/Ratecount";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header"
import Service from "../Services/Service";
import { reviewsData } from "../ProductDetails/reviewsData"

import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/CartSlice";

export const ProductDetails = () => {

  const [activeTab, setActiveTab] = useState("overview");
   const dispatch = useDispatch();
  //PRODUCTS DISPLAY
  const { id } = useParams();
  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  const relatedProducts = productsData.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  const [activeImg, setActiveImg] = useState(
    product?.images[0]
  );

  if (!product) {
    return <h2 style={{ color: "white" }}>Product Not Found</h2>;
  }

  return (
    <>
      <Header />
      <div className="product-details-container">

        {/* LEFT – IMAGE GALLERY */}
        <div className="product-images">
          <div className="thumbnail-list">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={activeImg === img ? "active" : ""}
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>

          <div className="main-image">
            <img src={activeImg} alt={product.title} />
          </div>
        </div>

        {/* RIGHT – PRODUCT INFO */}
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="category">{product.info}</p>

          <div className="rating">
            <Ratecount rateCount={product.rateCount} />
            <span>| ({product.ratings} Ratings)</span>
          </div>
          <div className="divider"></div>
          <div className="price-section">
            <h2>₹{product.finalPrice}</h2>
            <span className="old-price">
              ₹{product.originalPrice}
            </span>
            <button style={{ backgroundColor: "green", marginLeft: "auto", color: "white", padding: "10px" }}>In Stock</button>
          </div>


          <p className="save">
            You save ₹{product.originalPrice - product.finalPrice}
          </p>

          <p>Inclusive of all taxes</p>
          <div className="divider"></div>
          <h3>Offers and Discounts</h3>
          <div className="add">
            <button >No Cost EMI on Credit card</button>
            <button>Pay Later & Avail Cashback</button>
          </div>
          <div className="divider"></div>
          <button className="add-cart-btn"  onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      </div>


      {/* /*specifications, OVERVIEW , REVIEW*/}
      < div className="details-container">
        <ul className="category-list">
          <li className={activeTab === "specifications" ? "active" : ""}
            onClick={() => setActiveTab("specifications")}>
            Specifications
          </li>

          <li className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}>
            Overview
          </li>

          <li className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}>
            Reviews
          </li>
        </ul>

        {/* //specifications */}
        {activeTab === "specifications" && (
          <div className="spec">
            <ul>
              <li>Brand  <b style={{ marginLeft: "350px" }}>{product.brand}</b></li>
              <li>Model <b style={{ marginLeft: "260px" }}> {product.title}</b> </li>
              <li>GeniricName <b style={{ marginLeft: "340px" }}> {product.category}</b> </li>
              <li>Headphone Type  <b style={{ marginLeft: "370px" }}>{product.type}</b></li>
              <li>Connectivity <b style={{ marginLeft: "360px" }}>{product.connectivity}</b></li>
              <li>Microphone <b style={{ marginLeft: "390px" }}> Yes</b> </li>
            </ul>
          </div>
        )}

        {activeTab === "overview" && (
          <div className="over">
            <p>The  <b style={{ color: "orangered", fontSize: "20px", fontWeight: "600px", }}>{product.title}</b> <b style={{ fontSize: "18px", fontWeight: "600px" }}>{product.info}</b> provides   with  fabulous  sound  quality</p>
            <div>
              <ul>
                <li>Sound Tuned to perfection</li>
                <li>Comfortable to Wear</li>
                <li>Long Hours Playback Time</li>
              </ul>
            </div>
            <p>Buy the <b>{product.title}</b> <b>{product.info}</b> which offers you with fabulous music experience by providing you with awesome sound quality that you can never
              move on from.Enjoy perfect flexibility and mobility with amazing musical quality with these Headphones giving you a very awesome audio experience. It blends with exceptional
              sound quality and a range of smart features for an unrivalled listening experience.  </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="ratings">
            {reviewsData.map((review) => (
              <>
                <div className="rate" key={review.id}>{review.name}</div>
                <div className="rate-ct">
                  <Ratecount rateCount={review.rateCount} />
                  <span>|{review.date}</span>
                </div>
                <div className="review">{review.review}</div>

              </>

            ))}
          </div>
        )}
      </div>

      <div className="related">
        <h1>Related Products</h1>
        <div className="related-products">
            <>
              <div className="container">
                <div className="cards">
                  {relatedProducts.map((products) => (
                    <div className="card-link" key={products.id}>
                      <img src={products.images[0]} onClick={() => handleSelect(products.id)} />
                      {/* <div className="card-rate"><  MdOutlineStar/>{products.rateCount}</div> */}
                      <Ratecount rateCount={products.rateCount} />

                      <h1 className="card-title">{products.title}</h1>
                      <p>{products.info}</p>
                      <div className="divider"></div>
                      <div className="prices">
                        <p>₹{products.finalPrice}
                          <span>₹{products.originalPrice}</span></p>
                      </div>
                      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                    </div>
                  ))}

                  <Link to="/products" className="card-link browse-card">
                    <span>
                      Browse All<br />Products →
                    </span>
                  </Link>

                </div>
              </div>
            </>
          
        </div>

      </div>


      <Service />
      <Footer />
    </>
  );
};



