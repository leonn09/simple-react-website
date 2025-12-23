import HeroSection from "../sections/HeroSection";
import SampleComponents from "../sections/SampleComponents";
import AboutUs from "../sections/AboutUs"
import Features from "../sections/Features"


const HomePage = ({ projectsButton }) => {
    return (
        <>
        <HeroSection />
        <AboutUs />
        <SampleComponents projectsButton={projectsButton} />
        <Features />
        </>
    )
}

export default HomePage;