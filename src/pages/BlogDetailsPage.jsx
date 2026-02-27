import BlogDetails from "@components/sections/BlogDetails";
import HeaderSection from "@components/sections/HeaderSection";
import RelatedBlogs from "@components/sections/RelatedBlogs";

function BlogDetailsPage() {
    return (
        <div className="blog-details-page">
            <HeaderSection />
            <BlogDetails />
            <RelatedBlogs />
        </div>
    )
}

export default BlogDetailsPage;