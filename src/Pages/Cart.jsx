import "../components/Cart/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {increaseQty,decreaseQty,removeFromCart,} from "../components/Cart/CartSlice";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Service from "../components/Services/Service";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  console.log("CART ITEMS:", cartItems);
  const navigate = useNavigate();

  /* EMPTY CART */
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-box">
          <div className="cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <button
            className="start-shopping-btn"
            onClick={() => navigate("/products")}
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  const originalPrice = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );

  const discountedPrice = cartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const discount = originalPrice - discountedPrice;

  return (
    <>
    <Header/>
    <div className="cart-page">
      {/* LEFT CART */}
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-card" key={item.id}>
            <img src={item.images?.[0]} alt={item.title} />

            <div className="cart-info">
              <h4>{item.title} {item.info}</h4>

              <p className="price">
                ₹{item.finalPrice}
                <span> ₹{item.originalPrice}</span>
              </p>

              <div className="qty-box">
                <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              </div>
            </div>

            <button
              className="delete-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
      </div>

      {/* RIGHT SUMMARY */}
      <div className="order-summary">
        <h3>Order Summary ({cartItems.length} items)</h3>

        <div className="summary-row">
          <span>Original Price</span>
          <span>₹{originalPrice}</span>
        </div>

        <div className="summary-row discount">
          <span>Discount</span>
          <span>-₹{discount}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span className="free">Free</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total Price</span>
          <span>₹{discountedPrice}</span>
        </div>

        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
    <Service/>
    <Footer/>
    </>
  );
};

export default Cart;
