import SectionLayout from "./common/SectionLayout";

function BlogsList() {
    return (
        <section className="blogs-list-section" id="blogsList">
            <div className="container">
                <SectionLayout
                    title="Our Blogs"
                    headerChildren={<></>}
                >
                    Our Blogs
                </SectionLayout>
            </div>
        </section>
    )
}

export default BlogsList;