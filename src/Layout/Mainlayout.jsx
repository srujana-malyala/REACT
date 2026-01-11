import { AppRouter } from "../Router/AppRouter"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import {Service} from "../components/Services/Service"

export const Mainlayout =()=>{
    return(
        <>
        <Header/>
        <FeaturedProducts/>
        <Service/>
        <Footer/>
        </>
    )
}