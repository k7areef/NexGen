import SectionLayout from "./SectionLayout";

function HowToApply() {
    return (
        <section className="how-to-apply-section py-5 md:py-10" id="howToApply">
            <div className="container">
                <SectionLayout
                    title="How to Apply"
                    headerChildren={<></>}
                >
                    How to Apply
                </SectionLayout>
            </div>
        </section>
    )
}

export default HowToApply;