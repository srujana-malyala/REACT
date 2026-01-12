import "./Browse.css"
import productsData from "../Products/productsData"
import { MdOutlineStar } from "react-icons/md";
import Service from "../Services/Service";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Browse = ()=>{
    return(
        <>
        <Header/>
         <div className="container">
                            <div className="cards">
                                {productsData.map((products) => (
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
                                </div>
                                </div>

                                {/*import services and footer */}
                                <Service/>
                                <Footer/>
        
        </>
    )
}