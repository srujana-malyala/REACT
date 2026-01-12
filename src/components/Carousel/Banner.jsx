// Components/Carousel/Banner.jsx

import Slider from "react-slick";
import productsData from "../Products/productsData";
import "./Banner.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 export const Banner = () => {
  const heroProducts = productsData.filter(
    (product) => product.tag === "hero-product"
  );

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
   <>
    <section className="banner">
      <Slider {...settings}>
        {heroProducts.map((item) => (
          <div className="slide" key={item.id}>

            <h1 className="bg-text">{item.type}</h1>

            {/* LEFT */}
            <div className="banner-text">

              
              <h4>{item.title}</h4>

              <h1>{item.tagline}</h1>

              <p className="price">
                ₹{item.finalPrice.toLocaleString()}
                <span>₹{item.originalPrice.toLocaleString()}</span>
              </p>

              <button>Shop Now</button>
            </div>

            {/* RIGHT */}
            <div className="banner-img">
              <img src={item.heroImage} alt={item.title} />
            </div>
          </div>
        ))}
      </Slider>
      
    </section>
   </>
  );
};

export default Banner;