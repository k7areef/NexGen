import Button from "@components/UI/Button";
import { faBehance, faDribbble, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import socialProfiles from "@data/socialProfiles.json";
import { Link } from "react-router-dom";

const socialProfilesIcons = {
    instagram: faInstagram,
    twitter: faTwitter,
    dribbble: faDribbble,
    behance: faBehance
}

function Footer() {
    return (
        <footer className="pb-5 space-y-5">
            {/* CTA */}
            <div className="cta">
                <div className="container">
                    <div className="cta-content-wrapper bg-orange-60 flex md:items-end gap-5 max-lg:flex-col md:gap-10 p-5 md:p-10 rounded-xl uppercase">
                        <div className="text-wrapper w-full">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 text-dark-06">Ready to Transform Your Digital Presence?</h2>
                            <p className="text-dark-15">Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
                        </div>
                        <Button
                            variant="dark"
                            className="flex items-center justify-center gap-2 shrink-0"
                        >
                            <span>Get in Touch</span>
                            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-orange-80" />
                        </Button>
                    </div>
                </div>
            </div>
            {/* Marquee */}
            <div className="follow-us-on-social-media">
                <div className="container">
                    <div className="follow-us-on-social-media-content-wrapper text-grey-40 uppercase bg-dark-10 py-5 rounded-xl">
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
            {/* Footer Content */}
            <div className="footer-content">
                <div className="container flex gap-5 max-lg:flex-col">
                    {/* Social Profiles */}
                    <div className="social-profiles lg:w-[45%] grid sm:grid-cols-2 gap-5">
                        {
                            socialProfiles.map((profile, index) => (<a
                                key={index}
                                target="_blank"
                                href={profile.href}
                                title={profile.title}
                                aria-label={profile.title}
                                className="flex flex-col bg-dark-10 rounded-xl p-5 group gap-5"
                            >
                                <div className="header flex items-center justify-between">
                                    <div className="profile-icon bg-dark-12 rounded-md border border-dark-20 w-12 h-12 flex items-center justify-center text-orange-60">
                                        <FontAwesomeIcon icon={socialProfilesIcons[profile.icon]} className="text-2xl" />
                                    </div>
                                    <div className="profile-icon bg-dark-12 rounded-full border border-dark-20 w-12 h-12 flex items-center justify-center text-orange-80">
                                        <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-xl transition duration-200 ease-in sm:group-hover:rotate-0 sm:group-hover:text-orange-65" />
                                    </div>
                                </div>
                                <div className="text-wrapper mt-auto">
                                    <h3 className="uppercase text-lg sm:text-xl md:text-2xl font-medium mb-2">{profile.title}</h3>
                                    <p className="text-grey-70">{profile.description}</p>
                                </div>
                            </a>))
                        }
                    </div>
                    {/* Main Content */}
                    <div className="main-content lg:w-[55%] space-y-5 [&>div]:p-5 [&>div]:bg-dark-10 [&>div]:rounded-xl">
                        {/* Links */}
                        <div className="links-wrapper grid sm:grid-cols-2 gap-5">
                            <div className="links-container">
                                <h3 className="font-bold text-lg sm:text-xl mb-2">Home</h3>
                                <ul className="text-grey-50">
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Why Us</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Testimonials</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">FAQ’s</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <h3 className="font-bold text-lg sm:text-xl mb-2">Services</h3>
                                <ul className="text-grey-50">
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Web Development</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">App Development</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Web Design</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Digital Marketing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <h3 className="font-bold text-lg sm:text-xl mb-2">Projects</h3>
                                <ul className="text-grey-50">
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Klothink</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Zenith</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Novus</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Apex</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-container">
                                <h3 className="font-bold text-lg sm:text-xl mb-2">Blogs</h3>
                                <ul className="text-grey-50">
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Business</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Design <span className="inline-block py-2 px-4 bg-dark-15 border border-dark-20 rounded-md text-grey-80 ms-2">Soon</span></Link>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="block w-fit py-2 transition duration-200 ease-in sm:hover:text-white">Development <span className="inline-block py-2 px-4 bg-dark-15 border border-dark-20 rounded-md text-grey-80 ms-2">Soon</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Subscribe */}
                        <div className="subscribe grid sm:grid-cols-2 gap-5 sm:items-end">
                            <div className="text-wrapper">
                                <h3 className="upper text-grey-40 text-lg mb-2">Newsletter</h3>
                                <h4 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">Subscribe To Our Newsletter</h4>
                            </div>
                            <div className="subscribe-form">
                                <form onSubmit={e => e.preventDefault()} className="flex items-center gap-3">
                                    <input
                                        required
                                        type="email"
                                        title="Enter your email"
                                        name="subscribeEmail"
                                        placeholder="Enter your email"
                                        className="w-full p-3 bg-transparent border-b border-b-dark-20 transition duration-200 ease-in focus:border-b-orange-60"
                                    />
                                    <button
                                        role="button"
                                        type="submit"
                                        title="Subscribe"
                                        aria-label="Subscribe"
                                        className="profile-icon bg-dark-12 rounded-full border border-dark-20 w-12 h-12 flex items-center justify-center text-orange-80 shrink-0"
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-xl transition duration-200 ease-in sm:group-hover:rotate-0 sm:group-hover:text-orange-65" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className="copyright text-grey-70 flex items-center justify-between max-sm:flex-col gap-3">
                            <p className="font-roboto-mono">© {new Date().getFullYear()} NextGen. All rights reserved.</p>
                            <p className="font-roboto-mono">Powered by <span className="font-medium">NextGen</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;