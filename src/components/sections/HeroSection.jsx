import statistics from "@data/statistics.json";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="hero-section-section" id="heroSection">
            <div className="container space-y-5">
                <div className="main-content flex items-center gap-5 max-lg:flex-col">
                    <div className="content-wrapper lg:w-[60%] bg-dark-10 rounded-xl">
                        <div className="content-container p-5 md:p-10">
                            <div className="head-title flex items-center gap-3 mb-5">
                                <h1 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Digital Solutions</h1>
                                <Link
                                    to={'/'}
                                    className="flex items-center text-orange-60"
                                >
                                    <div className="w-15 h-15 rounded-full border-2 border-orange-60 flex items-center justify-center">
                                        <div className="circile w-3/4 h-3/4 rounded-full bg-orange-60 text-dark-06 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                    </div>
                                    <p className="-ms-1.5 bg-dark-10 py-2 uppercase font-semibold">Start a Project</p>
                                </Link>
                            </div>
                            <h1 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">That Drive Success</h1>
                            <p className="text-grey-40 mt-5">At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>
                        </div>
                        {/* Marquee */}
                        <div className="follow-us-on-social-media p-3">
                            <div className="follow-us-on-social-media-content-wrapper text-grey-40 uppercase bg-dark-06 py-5 rounded-xl">
                                <Marquee>
                                    <p>Follow us on social media</p>
                                    <FontAwesomeIcon icon={faCircle} className="text-[10px] text-orange-60 mx-2" />
                                    <p className="me-2">Follow us on social media</p>
                                    <p>Follow us on social media</p>
                                    <FontAwesomeIcon icon={faCircle} className="text-[10px] text-orange-60 mx-2" />
                                    <p className="me-2">Follow us on social media</p>
                                    <p>Follow us on social media</p>
                                    <FontAwesomeIcon icon={faCircle} className="text-[10px] text-orange-60 mx-2" />
                                    <p className="me-2">Follow us on social media</p>
                                    <p>Follow us on social media</p>
                                    <FontAwesomeIcon icon={faCircle} className="text-[10px] text-orange-60 mx-2" />
                                    <p>Follow us on social media</p>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                    <div className="hero-wrapper lg:w-[40%]">
                        Hero Wrapper
                    </div>
                </div>
                <div className="statistics p-3 md:p-5 border border-dark-12 rounded-xl flex gap-3 md:gap-5 flex-wrap">
                    {
                        statistics.map((statistic, index) => (<div className="flex flex-col justify-center gap-3 text-center uppercase p-5 rounded-xl bg-dark-10 flex-1 h-full text-nowrap w-1/2 sm:w-auto last-of-type:w-full last-of-type:sm:w-auto" key={index}>
                            <p className="font-medium text-lg text-grey-70">{statistic.name}</p>
                            <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl text-orange-70">{statistic.value}</h3>
                        </div>))
                    }
                    <div className="text-center uppercase p-5 rounded-xl bg-dark-10 flex flex-col justify-center w-full sm:w-auto flex-1 text-nowrap">
                        <Link
                            to={'/'}
                            className="flex items-center gap-2 group w-fit mx-auto sm:mx-0"
                        >
                            <div className="text-orange-80 -rotate-45 w-12 h-12 rounded-full border border-dark-20 flex items-center justify-center shrink-0 transiiton duration-200 ease-in sm:group-hover:border-dark-35">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <p className="text-grey-70 transition duration-200 ease-in sm:group-hover:text-grey-80">Know More</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;