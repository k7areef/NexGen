import SectionLayout from "./common/SectionLayout";

function Projects() {
    return (
        <section className="projects-section py-5 md:py-10" id="projects">
            <div className="container">
                <SectionLayout
                    title="Projects Showcase"
                    headerChildren={<></>}
                    className="p-0! border-0!"
                >
                    <div className="body-content p-3 md:p-5 border border-dark-12 rounded-xl mb-5">
                        Projects Showcase
                    </div>
                    <div className="body-content p-3 md:p-5 border border-dark-12 rounded-xl">
                        Projects Showcase
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Projects;