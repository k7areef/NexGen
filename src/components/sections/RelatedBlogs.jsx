import SectionLayout from "./common/SectionLayout";

function RelatedBlogs() {
    return (
        <section className="related-blogs-section" id="relatedBlogs">
            <div className="container">
                <SectionLayout
                    title="Related Blogs"
                    headerChildren={<></>}
                >
                    Related Blogs
                </SectionLayout>
            </div>
        </section>
    )
}

export default RelatedBlogs;