import AwardsAndRecognitions from "@components/sections/AwardsAndRecognitions";
import HeaderSection from "@components/sections/HeaderSection";
import OurAchievements from "@components/sections/OurAchievements";
import OurTeam from "@components/sections/OurTeam";

function AboutPage() {
    return (
        <div className="about-page">
            <HeaderSection />
            <OurTeam />
            <OurAchievements />
            <AwardsAndRecognitions />
        </div>
    )
}

export default AboutPage;