import SectionLayout from "./common/SectionLayout";

function SuccessStories() {
    return (
        <section className="success-stories-section py-5 md:py-10" id="successStories">
            <div className="container">
                <SectionLayout
                    title="Success Stories"
                    headerChildren={<></>}
                    className="p-0! border-0!"
                >
                    <div className="body-content p-3 md:p-5 border border-dark-12 rounded-xl mb-5">
                        Success Stories
                    </div>
                    <div className="body-content p-3 md:p-5 border border-dark-12 rounded-xl">
                        Success Stories
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default SuccessStories;