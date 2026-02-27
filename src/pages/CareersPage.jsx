import HowToApply from "@components/sections/common/HowToApply";
import HeaderSection from "@components/sections/HeaderSection";
import JobOpenings from "@components/sections/JobOpenings";

function CareersPage() {
    return (
        <div className="careers-page">
            <HeaderSection />
            <JobOpenings />
            <HowToApply />
        </div>
    )
}

export default CareersPage;