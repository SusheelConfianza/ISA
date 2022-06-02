import Wrapper from "../layouts/wrapper"
import Insight from "./components/home_page/insights"
import InTheNews from "./components/home_page/in_the_news"
import TopBanner from "./components/home_page/top_banner"
import WeDo from "./components/home_page/what_we_do"
import Slider2 from "./components/home_page/section2_slider"
import Banner from "./components/home_page/Banner"
import Gallery from "./components/home_page/Gallery"




const Home = () => {
    return (
        <Wrapper>
            <TopBanner />
            <Slider2/>
            <InTheNews />
            <Insight />
            <WeDo />
        </Wrapper>
    )
}


const Home2 = (props) => {
    return (
        <Wrapper>
            <Banner/>
            <Gallery />
            <InTheNews />
            <Insight />
            <WeDo />
        </Wrapper>
    )
}

export default Home