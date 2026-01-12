import productsData from "../Products/productsData"
import "./TopProducts.css"
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom"
import { useState } from "react";

export const TopProducts = () => {

    // const [showAll, setShowAll] = useState(false);

    // If showAll = false → show only first 11 products
    const visibleProducts = productsData.slice(0, 11);

    return (
        <>
            <div className="top">
                <h1 className="topH">Top Products</h1>

                <div className="links">
                    <ul>
                        <li><Link className="link" to="/" style={{ backgroundColor: "orangered", padding: "17px", borderRadius: "10px" }} >All</Link></li>
                        <li><Link className="link" to="/">HeadPhones</Link></li>
                        <li><Link className="link" to="/">Earbuds</Link></li>
                        <li><Link className="link" to="/">EarPhones</Link></li>
                        <li><Link className="link" to="/">Neckbands</Link></li>
                    </ul>
                </div>

                <div className="container">
                    <div className="cards">
                        {visibleProducts.map((products) => (
                            <div className="card-link" key={products.id}>
                                <img src={products.images[0]} />
                                <div className="card-rate">{products.rateCount}<  MdOutlineStar /></div>

                                <h1 className="card-title">{products.title}</h1>
                                <p>{products.info}</p>
                                <div className="divider"></div>
                                <div className="prices">
                                    <p>₹{products.finalPrice}
                                        <span>₹{products.originalPrice}</span></p>
                                </div>
                                <button>Add To Cart</button>
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
        </>
    )
}