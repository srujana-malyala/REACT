import { AppRouter } from "../Router/AppRouter"
import Banner from "../components/Carousel/Banner"
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import {Service} from "../components/Services/Service"
import { TopProducts } from "../components/TopProducts/TopProducts"

export const Mainlayout =()=>{
    return(
        <>
        <AppRouter/>
        {/* <Header/>
        <Banner/>
        <FeaturedProducts/>
        <TopProducts/>
        <Service/>
        <Footer/> */}
        </>
    )
}