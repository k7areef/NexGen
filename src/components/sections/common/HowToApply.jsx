import { Link } from "react-router-dom";
import SectionLayout from "./SectionLayout";
import applySteps from "@data/applySteps.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HowToApply() {
    return (
        <section className="how-to-apply-section py-5 md:py-10" id="howToApply">
            <div className="container">
                <SectionLayout
                    title="How to Apply"
                    headerChildren={<></>}
                >
                    <div className="steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            applySteps.map((step, index) => (
                                <div key={step.id} className="step-card bg-dark-10 rounded-lg flex flex-col first-of-type:md:col-span-2">
                                    {/* Header */}
                                    <div className="card-header p-3">
                                        <div className="text-grey-50">
                                            <span>Step</span>
                                            {" "}
                                            <span className="font-roboto-mono">{(index + 1).toString().padStart(2, '0')}</span>
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <div className="step-title p-3 py-5 bg-dark-12 border-y border-y-dark-15">
                                        <h3 className="text-white text-lg font-semibold">{step.title}</h3>
                                    </div>
                                    {/* Description */}
                                    <div className="step-description p-3 py-5 flex flex-col flex-1">
                                        <p className="text-grey-50 text-sm mb-3">{step.description}</p>
                                        <Link
                                            to={"/blogs"}
                                            title="Read Full Blog"
                                            aria-label="Read Full Blog"
                                            className="flex items-center gap-2 group mt-auto"
                                        >
                                            <div className="arrow-wrapper w-10 h-10 flex items-center justify-center bg-dark-12 border border-dark-20 rounded-full text-orange-80">
                                                <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 transition-transform will-change-transform sm:group-hover:-rotate-90 sm:group-hover:scale-110" />
                                            </div>
                                            <span className="uppercase text-grey-70 transition-colors will-change-auto sm:group-hover:text-orange-80">Know More</span>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default HowToApply;