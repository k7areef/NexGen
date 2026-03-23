import HeaderSection from "@components/sections/HeaderSection";
import Services from "@components/sections/Services";
import SuccessStories from "@components/sections/SuccessStories";
import Hero from "@assets/images/services-header.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import MyMarquee from "@components/common/MyMarquee";

function ServicesPage() {
    return (
        <div className="services-page">
            <HeaderSection
                commonChildren={<div className="bg-dark-10 rounded-lg p-5 flex flex-col lg:h-full">
                    <div className="main-content">
                        <div className="head-title flex sm:items-center gap-3 mb-3 max-sm:flex-col">
                            <h1 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Our Comprehensive</h1>
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
                        <h1 className="uppercase font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Digital Solutions</h1>
                        <p className="text-grey-40 mt-5">At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation</p>
                    </div>
                    {/* Marquee */}
                    <div className="follow-us-on-social-media max-lg:mt-3 lg:mt-auto">
                        <div className="follow-us-on-social-media-content-wrapper text-grey-40 uppercase bg-dark-06 py-5 rounded-xl">
                            <MyMarquee />
                        </div>
                    </div>
                </div>}

                otherChildren={<div className="rounded-lg relative aspect-video">
                    {/* Hero */}
                    <div className="hero-container rounded-lg overflow-hidden">
                        <img
                            src={Hero}
                            alt="Hero"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content */}
                    <div className="flex flex-wrap gap-3 sm:items-center justify-between flex-col p-5 uppercase absolute bottom-0 z-10 w-full">
                        {/* Button */}
                        <Link to={'/services'} className="flex items-center gap-2">
                            <div className="arrow-icon bg-white flex items-center justify-center w-10 h-10 rounded-full">
                                <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-dark-06" />
                            </div>
                            <span className="font-roboto-mono">View Blog</span>
                        </Link>
                        {/*  */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-md py-2 px-4 text-center">
                            Web Development.
                        </div>
                    </div>
                </div>}
            />
            <Services />
            <SuccessStories />
        </div>
    )
}

export default ServicesPage;