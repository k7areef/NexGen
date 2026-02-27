import SectionLayout from "./common/SectionLayout";

function OurTeam() {
    return (
        <section className="our-team-section py-5 md:py-10" id="ourTeam">
            <div className="container">
                <SectionLayout
                    title="Meet the brilliant minds behind NexGen"
                    headerChildren={<></>}
                >
                    Meet the brilliant minds behind NexGen
                </SectionLayout>
            </div>
        </section>
    )
}

export default OurTeam;