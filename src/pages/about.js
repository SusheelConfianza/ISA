import Wrapper from "../layouts/wrapper"
import Vision from "./components/about_page/vision"


const submenu = [
    
    {
        "menu" : "Vision & Mission",
        "to" : "/about/vision"
    },
   
    {
        "menu" : "Our Team",
        "to" : "/about/ourTeam"
    },
]

const About = () => {
    return (
        <Wrapper menu="About" submenu={submenu}>
            <Vision/>
        </Wrapper>
    )
}

export default About