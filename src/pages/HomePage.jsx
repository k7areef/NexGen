import About from "@components/sections/About";
import HeroSection from "@components/sections/HeroSection";
import Services from "@components/sections/Services";
import Works from "@components/sections/Works";

function HomePage() {
    return (
        <div className="home-page">
            <HeroSection />
            <About />
            <Services />
            <Works />
        </div>
    )
}

export default HomePage;