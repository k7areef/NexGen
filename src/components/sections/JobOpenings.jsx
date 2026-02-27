import SectionLayout from "./common/SectionLayout";

function JobOpenings() {
    return (
        <section className="job-openings-section py-5 md:py-10" id="jobOpenings">
            <div className="container">
                <SectionLayout
                    title="Join Our Team at NexGen"
                    headerChildren={<></>}
                >
                    Join Our Team at NexGen
                </SectionLayout>
            </div>
        </section>
    )
}

export default JobOpenings;