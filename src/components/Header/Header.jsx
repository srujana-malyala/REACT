// import { FaShoppingCart } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import { AiOutlineUser } from "react-icons/ai";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {Login} from "./Login";
// import "./Header.css"
// import { Link } from "react-router-dom";
// import productsData from "../Products/productsData";

// export const Header = () => {
//     const [showInput, setShowInput] = useState(false);
     
//     const [showAuth, setShowAuth] = useState(false);
//     const [showSearch, setShowSearch] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const filteredProducts =
//     query.length > 0
//       ? productsData.filter((products) =>
//           products.title.toLowerCase().includes(query.toLowerCase())
//         )
//       : [];

//   const handleSelect = (id) => {
//     setQuery("");
//     setShowSearch(false);
//     navigate(`/product/${id}`);
//   };
    
//     return (
//         <>
//             <nav className="nav-container">
//                 <div className="navv"><h1>Tech-Shop</h1></div>

//                 <div className="nav-link" style={{ marginLeft: "auto" }} >

//                      {showInput && (
//                         <input
//                             type="text"
//                             placeholder="Search products"
//                             style={{
//                                 padding: "10px", width: "500px", backgroundColor: "#0f0f0f"
//                                 , color: "white", border: "1px solid", borderColor: "black", alignItems: "center",
//                                 textAlign: "center"}}
                               
                                
//                                 />)}
                       

//                     <FaSearch
//                         style={{ cursor: "pointer" }}
//                         onClick={() => setShowInput(!showInput)(!showSearch)}   />

//                          {showSearch && (
//         <div className="search-wrapper">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             autoFocus
//           />

//           {filteredProducts.length > 0 && (
//             <ul className="search-dropdown">
//               {filteredProducts.map((product) => (
//                 <li
//                   key={product.id}
//                   onClick={() => handleSelect(product.id)}
//                 >
//                   {product.title}
//                 </li>
//               ))}
//             </ul>
//           )}
//           </div>                   
// )}

//                     <Link className="nav-link"> <FaShoppingCart /></Link>
//                     {/* <Link className="nav-link"><AiOutlineUser /></Link> */}
                    
//                         <AiOutlineUser
//                             className="user-icon"
//                             onClick={() => setShowAuth(true)}
//                         />
                   
//                 </div>

//             </nav>
//              {/* Login / Signup Popup */}
//       {showAuth && <Login closeModal={() => setShowAuth(false)} />}
//         </>
//     )
// }


import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Login } from "./Login";
import productsData from "../Products/productsData";
import "./Header.css";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [showAuth, setShowAuth] = useState(false);

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

          <Link className="nav-link">
            <FaShoppingCart />
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
