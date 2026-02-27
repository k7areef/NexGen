import { Link } from "react-router-dom";
import SectionLayout from "./common/SectionLayout";
import reasons from "@data/reasons.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <section className="about-section py-5 md:py-10" id="about">
            <div className="container">
                <SectionLayout
                    title="Reasons to Choose NexGen for Your Digital Journey"
                    headerChildren={<></>}
                >
                    <div className="cards-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            reasons.map((reason, index) => (<div className="reason-card rounded-lg overflow-hidden bg-dark-10 flex flex-col p-5" key={index}>
                                <h3 className="uppercase font-medium text-lg sm:text-xl md:text-2xl mb-3">{reason.title}</h3>
                                <p className="text-grey-70">{reason.description}</p>
                                <Link
                                    to={'/'}
                                    className="flex items-center gap-2 group w-fit mt-5"
                                >
                                    <div className="text-orange-80 -rotate-45 w-12 h-12 rounded-full border border-dark-20 flex items-center justify-center shrink-0 transiiton duration-200 ease-in sm:group-hover:border-dark-35">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </div>
                                    <p className="text-grey-70 transition duration-200 ease-in sm:group-hover:text-grey-80">Learn More</p>
                                </Link>
                            </div>))
                        }
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default About;