import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import {Home} from "../Pages/Home"
import { Browse } from "../components/Browse/Browse"
import { ProductDetails } from "../components/ProductDetails/ProductDetails"
export const AppRouter = ()=>{
    return(
        <>
       <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Browse />} />
          <Route path="/product/:id" element={<ProductDetails />} />
       </Routes>
        </>
    )
}