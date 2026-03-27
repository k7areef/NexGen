import SectionLayout from "./common/SectionLayout";
import blogsData from "@data/blogs.json";
import image1 from "@assets/images/blogs/blog-1.png";
import image2 from "@assets/images/blogs/blog-2.png";
import image3 from "@assets/images/blogs/blog-3.png";
import image4 from "@assets/images/blogs/blog-4.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";

const imagesMaper = [
    image1,
    image2,
    image3,
    image4
]

function BlogsList() {
    return (
        <section className="blogs-list-section" id="blogsList">
            <div className="container">
                <SectionLayout
                    title="Our Blogs"
                    headerChildren={<></>}
                >
                    {/* Blogs */}
                    <div className="blogs-content grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            blogsData.map((blog, index) => (<div className="blog-card bg-dark-10 rounded-lg p-3 md:p-5 group first-of-type:md:col-span-2 first-of-type:lg:col-span-3 first-of-type:flex first-of-type:items-center first-of-type:gap-3 first-of-type:md:gap-5 first-of-type:max-md:flex-col" key={index}>
                                {/* Blog Image */}
                                <div className="blog-image aspect-4/3 group-first-of-type:aspect-square mb-3">
                                    <img src={imagesMaper[index]} alt={blog.title} className="w-full h-full object-cover rounded-md" />
                                </div>
                                {/* Blog Content */}
                                <div className="blog-content">
                                    <div className="text-wrapper mb-3 md:mb-5">
                                        <h3 className="blog-title uppercase text-lg sm:text-xl md:text-2xl font-medium mb-2 line-clamp-2">{blog.title}</h3>
                                        {/* Blog Info */}
                                        <div className="blog-info mt-3 mb-5 hidden group-first-of-type:flex items-center gap-2 flex-wrap">
                                            {/* Category */}
                                            <div className="blog-category bg-dark-12 rounded-full flex items-center gap-1 py-2 px-4">
                                                <span className="text-grey-70 text-sm">Category</span>
                                                <FontAwesomeIcon icon={faCircle} className="scale-40 text-orange-60" />
                                                <span className="text-sm">{blog.category}</span>
                                            </div>
                                            {/* Read Time */}
                                            <div className="blog-read-time bg-dark-12 rounded-full flex items-center gap-1 py-2 px-4">
                                                <span className="text-grey-70 text-sm">Read Time</span>
                                                <FontAwesomeIcon icon={faCircle} className="scale-40 text-orange-60" />
                                                <span className="text-sm">{blog.readTime}</span>
                                            </div>
                                            {/* Author */}
                                            <div className="blog-author bg-dark-12 rounded-full flex items-center gap-1 py-2 px-4">
                                                <span className="text-grey-70 text-sm">Author</span>
                                                <FontAwesomeIcon icon={faCircle} className="scale-40 text-orange-60" />
                                                <span className="text-sm">{blog.author}</span>
                                            </div>
                                        </div>
                                        <p className="blog-desc line-clamp-3 text-grey-70">{blog.description}</p>
                                    </div>
                                    <div className="blog-card-foot flex items-center justify-between">
                                        <Link
                                            to={"/blogs"}
                                            title="Read Full Blog"
                                            aria-label="Read Full Blog"
                                            className="flex items-center gap-2 group"
                                        >
                                            <div className="arrow-wrapper w-10 h-10 flex items-center justify-center bg-dark-12 border border-dark-20 rounded-full text-orange-80">
                                                <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 transition-transform will-change-transform sm:group-hover:-rotate-90 sm:group-hover:scale-110" />
                                            </div>
                                            <span className="uppercase text-grey-70 transition-colors will-change-auto sm:group-hover:text-orange-80">Read Full Blog</span>
                                        </Link>
                                        <div className="published-date items-center gap-2 hidden group-first-of-type:flex">
                                            <span className="text-grey-70">Published Date:</span>
                                            <span className="text-orange-95 uppercase">{blog.publishedAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default BlogsList;