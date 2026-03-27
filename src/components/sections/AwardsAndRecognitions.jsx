import SectionLayout from "./common/SectionLayout";
import awards from "../../data/awardsAndRecognitions.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

function AwardsAndRecognitions() {
    return (
        <section className="awards-and-recognitions-section py-5 md:py-10" id="awardsAndRecognitions">
            <div className="container px-4 mx-auto">
                <SectionLayout
                    title="Awards & Recognitions"
                    headerChildren={<></>}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {awards.map((award, index) => (
                            <div key={index} className="bg-dark-10 border border-dark-15 rounded-2xl p-6 md:p-10 flex flex-col gap-8">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="date-badge py-2 px-4 bg-dark-08 border border-dark-15 rounded-full flex items-center gap-2">
                                        <span className="text-grey-40 text-sm md:text-base font-medium">Date</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-80"></span>
                                        <span className="text-white text-sm md:text-base font-medium">{award.date}</span>
                                    </div>
                                    <div className="award-icon w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-dark-08 border border-dark-15 rounded-xl text-orange-60">
                                        <FontAwesomeIcon icon={faAward} className="text-2xl md:text-3xl" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight uppercase tracking-wide">
                                        {award.title}
                                    </h3>
                                    <p className="text-grey-60 text-sm md:text-base leading-relaxed">
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default AwardsAndRecognitions;