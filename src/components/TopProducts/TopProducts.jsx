import productsData from "../Products/productsData"
import "./TopProducts.css"
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ratecount } from "../ProductDetails/Ratecount";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/CartSlice";


export const TopProducts = () => {

    const dispatch = useDispatch();


    const [activeCategory, setActiveCategory] = useState("all");

    // 🔹 FILTER 
    const filteredProducts = () => {
        if (activeCategory === "all") {
            return productsData.slice(0, 11);
        }
        return productsData.filter(
            (item) => item.category === activeCategory
        );
    };

    //NAVIGATE
    const navigate = useNavigate();

    const handleSelect = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <div className="top">
                <h1 className="topH">Top Products</h1>

                <div className="links">

                    {/* ===== Category Tabs ===== */}
                    <ul className="category-list">
                        <li
                            className={activeCategory === "all" ? "active" : ""}
                            onClick={() => setActiveCategory("all")}
                        >
                            All
                        </li>

                        <li
                            className={activeCategory === "Headphones" ? "active" : ""}
                            onClick={() => setActiveCategory("Headphones")}
                        >
                            Headphones
                        </li>

                        <li
                            className={activeCategory === "Earbuds" ? "active" : ""}
                            onClick={() => setActiveCategory("Earbuds")}
                        >
                            Earbuds
                        </li>

                        <li
                            className={activeCategory === "Earphones" ? "active" : ""}
                            onClick={() => setActiveCategory("Earphones")}
                        >
                            Earphones
                        </li>

                        <li
                            className={activeCategory === "Neckbands" ? "active" : ""}
                            onClick={() => setActiveCategory("Neckbands")}
                        >
                            Neckbands
                        </li>
                    </ul>




                    <div className="container">
                        <div className="cards">
                            {filteredProducts().map((products) => (
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
                                    <button className="add-btn" onClick={(e) => {
                                          console.log("ADDING:", products.id);//IMPORTANT
                                        dispatch(addToCart(products));
                                    }}>Add To Cart</button>
                                </div>
                            ))}

                            <Link to="/products" className="card-link browse-card">
                                <span>
                                    Browse All<br />Products →
                                </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

