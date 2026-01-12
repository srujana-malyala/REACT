import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import { TopProducts } from "../components/TopProducts/TopProducts"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import {Service} from "../components/Services/Service"
import Banner from "../components/Carousel/Banner"

export const Home = () =>{
    return(
        <>
        <Header/>
        <Banner/>
        <FeaturedProducts/>
        <TopProducts/>
        <Service/>
        <Footer/>

        </>
    )
}