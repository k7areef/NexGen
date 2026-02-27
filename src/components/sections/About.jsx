import SectionLayout from "./common/SectionLayout";

function About() {
    return (
        <section className="about-section py-5 md:py-10" id="about">
            <div className="container">
                <SectionLayout
                    title="Reasons to Choose NexGen for Your Digital Journey"
                    headerChildren={<></>}
                >
                    Reasons to Choose NexGen for Your Digital Journey
                </SectionLayout>
            </div>
        </section>
    )
}

export default About;