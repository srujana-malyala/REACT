import "./Browse.css";
import productsData from "../Products/productsData";
import { MdOutlineStar } from "react-icons/md";
import Service from "../Services/Service";
import { useNavigate } from "react-router-dom";
import { Ratecount } from "../ProductDetails/Ratecount";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { brandsMenu, categoryMenu, sortMenu } from "../Browse/filterBarData";
import { useState } from "react";

export const Browse = () => {

  // 🔹 STATES
  const [brands, setBrands] = useState(brandsMenu);
  const [categories, setCategories] = useState(categoryMenu);
  const [sortBy, setSortBy] = useState("");
  const [price, setPrice] = useState(9990);

  const navigate = useNavigate();

  // 🔹 BRAND CHECKBOX
  const handleBrandChange = (id) => {
    setBrands((prev) =>
      prev.map((brand) =>
        brand.id === id
          ? { ...brand, checked: !brand.checked }
          : brand
      )
    );
  };

  // 🔹 CATEGORY CHECKBOX
  const handleCategoryChange = (id) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id
          ? { ...cat, checked: !cat.checked }
          : cat
      )
    );
  };

  // 🔹 FILTERED BRANDS & CATEGORIES
  const selectedBrands = brands
    .filter((b) => b.checked)
    .map((b) => b.label);

  const selectedCategories = categories
    .filter((c) => c.checked)
    .map((c) => c.label);

  // 🔹 FILTER + SORT LOGIC
  let filteredProducts = productsData.filter((product) => {
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const priceMatch = product.finalPrice <= price;

    return brandMatch && categoryMatch && priceMatch;
  });

  if (sortBy === "Latest") {
    filteredProducts = [...filteredProducts].reverse();
  }

  if (sortBy === "Top Rated") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rateCount - a.rateCount
    );
  }

  if (sortBy === "Price(Lowest First)") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.finalPrice - b.finalPrice
    );
  }

  if (sortBy === "Price(Highest First)") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.finalPrice - a.finalPrice
    );
  }

  // 🔹 NAVIGATE
  const handleSelect = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Header />

      <div className="cont">

        {/* ===== LEFT FILTER BAR ===== */}
        <div className="sort">

          {/* SORT */}
          <h3>Sort By</h3>
          <div className="divider"></div>
          {sortMenu.map((data) => (
            <ul key={data.id}>
              <li onClick={() => setSortBy(data.title)}>
                {data.title}
              </li>
            </ul>
          ))}

          {/* BRANDS */}
          <h4>Brands</h4>
          <div className="divider"></div>
          {brands.map((brand) => (
            <label key={brand.id} className="filter-item">
              <input
                type="checkbox"
                checked={brand.checked}
                onChange={() => handleBrandChange(brand.id)}
              />
              {brand.label}
            </label>
          ))}

          {/* CATEGORY */}
          <h3>Category</h3>
          <div className="divider"></div>
          {categories.map((cate) => (
            <label key={cate.id} className="filter-item">
              <input
                type="checkbox"
                checked={cate.checked}
                onChange={() => handleCategoryChange(cate.id)}
              />
              {cate.label}
            </label>
          ))}

          {/* PRICE */}
          <h4>Price</h4>
          <input
            type="range"
            min={319}
            max={9990}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="price-slider"
          />
          <p className="price-value">₹319 – ₹{price}</p>

        </div>

        {/* ===== PRODUCTS ===== */}
        <div className="container">
          <div className="cards">
            {filteredProducts.map((product) => (
              <div className="card-link" key={product.id}>
                <img
                  src={product.images[0]}
                  onClick={() => handleSelect(product.id)}
                />

                <div className="card-rate">
                  <Ratecount rateCount={product.rateCount}/>
                </div>

                <h1 className="card-title">{product.title}</h1>
                <p>{product.info}</p>

                <div className="divider"></div>

                <div className="prices">
                  ₹{product.finalPrice}
                  <span>₹{product.originalPrice}</span>
                </div>

                <button>Add To Cart</button>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Service />
      <Footer />
    </>
  );
};
