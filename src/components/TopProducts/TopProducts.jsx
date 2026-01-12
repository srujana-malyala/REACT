import "./TopProducts.css"
import { Link } from "react-router-dom"

export const TopProducts = ()=>{
    return(
        <>
        <div className="top">
     <h1 className="topH">Top Products</h1>

     <div className="links">
        <ul>
         <li><Link className="link" to="/" style={{backgroundColor:"orangered",padding:"17px",borderRadius:"10px"}} >All</Link></li>
          <li><Link className="link" to="/">HeadPhones</Link></li>
           <li><Link className="link" to="/">Earbuds</Link></li>
            <li><Link className="link" to="/">EarPhones</Link></li>
             <li><Link className="link" to="/">Neckbands</Link></li>
        </ul>
     </div>

     
    
        </div>
        </>
    )
}