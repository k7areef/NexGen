import SectionLayout from "@components/sections/common/SectionLayout";

function Faqs() {
    return (
        <section className="faqs-section py-5 md:py-10" id="faqs">
            <div className="container">
                <SectionLayout
                    title="Frequently Asked Questions"
                    className="p-0! border-0!"
                    headerChildren={<></>}
                >
                    Faqs
                </SectionLayout>
            </div>
        </section>
    )
}

export default Faqs;