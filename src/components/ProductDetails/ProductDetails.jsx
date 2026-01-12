import productsData from "../Products/productsData"

export const ProductDetails = ()=>{
    return(
        <>
      <div className="product">
        {productsData.map((products)=>(
            <> <div key={products.id}>
                <img src={products.images}/>
                 <h1>{products.title}</h1>
                 <p>{products.info}</p>
                 <p>{products.rateCount}</p>
                 <p>{products.ratings}</p>
                 <div className="divider"></div>
                 <p className="price">
                                    ₹{products.finalPrice.toLocaleString()}
                                    <span>₹{products.originalPrice.toLocaleString()}</span>
                                </p>
                                <p>You save :₹{products.originalPrice}-{products.finalPrice} </p>
                               {/* <p> {products.quantity}==(!true) ?"Instock":"out of stock"</p> */}
                                <div className="divider"></div>
                                <h2>Offers and Discounts</h2>
                                <button>no cost EMI on Credit cards</button>
                                <button>Pay Later & Avail Cashback</button>

                     


                </div></>
               
               
            ))
        }

      </div>
        </>
    )
}
