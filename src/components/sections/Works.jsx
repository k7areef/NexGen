import SectionLayout from "./common/SectionLayout";

function Works() {
    return (
        <section className="works-section py-5 md:py-10" id="works">
            <div className="container">
                <SectionLayout
                    title="Our Works"
                    headerChildren={<></>}
                    className="p-0! border-0!"
                >
                    <div className="body-content p-3 md:p-5 border border-dark-12 rounded-xl">
                        Our Works
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Works;