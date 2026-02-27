import SectionLayout from "@components/sections/common/SectionLayout";
import testimonials from "@data/testimonials.json";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar1 from "@assets/images/testimonials-avatars/1.png";
import avatar2 from "@assets/images/testimonials-avatars/2.png";
import avatar3 from "@assets/images/testimonials-avatars/3.png";
import avatar4 from "@assets/images/testimonials-avatars/4.png";
import { Link } from "react-router-dom";

const avatarsMapper = {
    1: avatar1,
    2: avatar2,
    3: avatar3,
    4: avatar4
}

function Testimonials() {
    return (
        <section className="testimonials-section py-5 md:py-10" id="testimonials">
            <div className="container">
                <SectionLayout
                    title="Testimonials"
                    headerChildren={<Link
                        to={'/'}
                        className="flex items-center gap-2 group w-fit"
                    >
                        <div className="text-orange-80 -rotate-45 w-12 h-12 rounded-full border border-dark-20 flex items-center justify-center shrink-0 transiiton duration-200 ease-in sm:group-hover:border-dark-35">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <p className="text-grey-70! transition duration-200 ease-in sm:group-hover:text-grey-80!">ALL Testimonials</p>
                    </Link>}
                >
                    <div className="cards-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            testimonials.map((testimonial, index) => (<div className="testimonial-card rounded-lg overflow-hidden bg-dark-10 flex flex-col" key={index}>
                                <div className="text-wrapper p-3 md:p-5">
                                    <h3 className="uppercase font-medium text-lg sm:text-xl md:text-2xl mb-3">{testimonial.title}</h3>
                                    <p className="text-grey-70!">{testimonial.description}</p>
                                </div>
                                <div className="author-wrapper p-3 md:p-5 flex items-center gap-4 bg-dark-12 mt-auto">
                                    <div className="image-wrapper w-12 h-12 rounded-full shrink-0">
                                        <img
                                            src={avatarsMapper[index + 1]}
                                            alt={testimonial.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="author-text-info w-full">
                                        <h4 className="font-medium text-lg mb-1">{testimonial.name}</h4>
                                        <p className="text-grey-50!">{testimonial.position}</p>
                                    </div>
                                    <Link
                                        to={'/'}
                                        className="text-orange-80 w-12 h-12 rounded-full border border-dark-20 flex items-center justify-center shrink-0 transiiton duration-200 ease-in sm:hover:border-dark-35"
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} />
                                        <span className="sr-only">Arrow Right</span>
                                    </Link>
                                </div>
                            </div>))
                        }
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Testimonials;