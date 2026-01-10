import Slider from "react-slick";
import productsData from "../Products/productsData";
import "./FeaturedProducts.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import images from"../public/products/Images"

const FeaturedProducts = () => {
    const filteredProduct = productsData.filter(
        (product) => product.tag === "featured-product"
    );
const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 900,

  slidesToShow: 3,
  slidesToScroll: 1, 

  centerMode:true,
  centerPadding:"320px",
  focusOnSelect:true,
  
  autoplay: true,
  autoplaySpeed: 3000,

};


    return (
        <>
            <section className="featuredproducts">
                <h2 className="section-title">Featured Products</h2>


                <Slider {...settings}>
                    {
                    filteredProduct.map((item) => (
                        <div className="products" key={item.id}>
                            <div className="card">
                                <p>{item.title}</p>

                                <img src={item.images[0]} alt={item.title} />
                                
                                <p className="price">
                                    ₹{item.finalPrice.toLocaleString()}
                                    <span>₹{item.originalPrice.toLocaleString()}</span>
                                </p>

                            </div>
                        </div>
                    ))
                    }
                </Slider>
            </section>



        </>
    )
}

export default FeaturedProducts;