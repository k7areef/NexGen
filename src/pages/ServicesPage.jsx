import HeaderSection from "@components/sections/HeaderSection";
import Services from "@components/sections/Services";
import SuccessStories from "@components/sections/SuccessStories";

function ServicesPage() {
    return (
        <div className="services-page">
            <HeaderSection />
            <Services />
            <SuccessStories />
        </div>
    )
}

export default ServicesPage;