import SectionLayout from "./common/SectionLayout";

function OurAchievements() {
    return (
        <section className="our-achievements-section py-5 md:py-10" id="ourAchievements">
            <div className="container">
                <SectionLayout
                    title="Our Achievements"
                    className="p-0! border-0!"
                    headerChildren={<></>}
                >
                    Our Achievements
                </SectionLayout>
            </div>
        </section>
    )
}

export default OurAchievements;