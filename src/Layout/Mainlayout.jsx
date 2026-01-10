import { AppRouter } from "../Router/AppRouter"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"


export const Mainlayout =()=>{
    return(
        <>
        <Header/>
        <FeaturedProducts/>
        <Footer/>
        </>
    )
}