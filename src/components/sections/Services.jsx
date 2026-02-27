import SectionLayout from "./common/SectionLayout";

function Services() {
    return (
        <section className="services-section py-5 md:py-10" id="services">
            <div className="container">
                <SectionLayout
                    title="Our Services"
                    headerChildren={<></>}
                >
                    Our Services
                </SectionLayout>
            </div>
        </section>
    )
}

export default Services;