import { useParams } from "react-router-dom";
import productsData from "../Products/productsData";
import { useState } from "react";
import "./ProductDetails.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header"

export const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  const [activeImg, setActiveImg] = useState(
    product?.images[0]
  );

  if (!product) {
    return <h2 style={{ color: "white" }}>Product Not Found</h2>;
  }

  return (
   <> 
   <Header/>
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
          ⭐⭐⭐⭐☆ <span>| ({product.ratings} Ratings)</span>
        </div>
          <div className="divider"></div>
        <div className="price-section">
          <h2>₹{product.finalPrice}</h2>
          <span className="old-price">
            ₹{product.originalPrice}
          </span>
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
        <button className="add-cart-btn">Add to Cart</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};



