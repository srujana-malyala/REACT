
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Login } from "./Login";
import productsData from "../Products/productsData";
import "./Header.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [showAuth, setShowAuth] = useState(false);

  const count = useSelector((state) =>
      state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

  const navigate = useNavigate();

  // 🔹 FILTER PRODUCTS
  const filteredProducts =
    query.trim().length > 0
      ? productsData.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  // 🔹 ON SELECT PRODUCT
  const handleSelect = (id) => {
    setQuery("");
    setShowSearch(false);
    navigate(`/product/${id}`);
  };

  return (
    <>
      <nav className="nav-container">
        <div className="navv">
          <h1>Tech-Shop</h1>
        </div>

        <div className="nav-link" style={{ marginLeft: "auto" }}>
          
          {/* 🔍 Search Icon */}
          <FaSearch
            style={{ cursor: "pointer", marginRight: "15px" }}
            onClick={() => setShowSearch(!showSearch)}
          />

          {/* 🔍 Search Box */}
          {showSearch && (
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />

              {filteredProducts.length > 0 && (
                <ul className="search-dropdown">
                  {filteredProducts.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleSelect(product.id)}
                    >
                      {product.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <Link className="nav-link" to="/cart">
            <FaShoppingCart />  
            {count > 0 && (
    <sup className="cart-count" style={{color:"white",backgroundColor:"orangered" ,paading:"10px" }}>{count}</sup>
  )} 
          </Link>

          <AiOutlineUser
            className="user-icon"
            onClick={() => setShowAuth(true)}
          />
        </div>
      </nav>

      {/* Login Popup */}
      {showAuth && <Login closeModal={() => setShowAuth(false)} />}
    </>
  );
};
