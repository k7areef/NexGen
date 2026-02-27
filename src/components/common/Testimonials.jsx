import SectionLayout from "@components/sections/common/SectionLayout";

function Testimonials() {
    return (
        <section className="testimonials-section py-5 md:py-10" id="testimonials">
            <div className="container">
                <SectionLayout
                    title="Testimonials"
                    headerChildren={<></>}
                >
                    Testimonials
                </SectionLayout>
            </div>
        </section>
    )
}

export default Testimonials;