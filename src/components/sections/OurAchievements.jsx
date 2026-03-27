import SectionLayout from "./common/SectionLayout";
import milestones from "../../data/milestones.json";

function OurAchievements() {
    return (
        <section className="our-achievements-section py-5 md:py-10" id="ourAchievements">
            <div className="container px-4 mx-auto">
                <SectionLayout
                    title="Our Achievements"
                    className="p-0! border-0!"
                    headerChildren={<></>}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="bg-dark-10 border border-dark-15 rounded-xl overflow-hidden flex flex-col h-full">
                                <div className="heading p-3">
                                    <span className="text-grey-50 font-medium text-sm md:text-base font-roboto-mono">
                                        {milestone.date}
                                    </span>
                                </div>
                                <div className="p-3 py-5 bg-dark-12 border-y border-dark-20">
                                    <h3 className="text-white text-lg md:text-xl font-semibold line-clamp-2">{milestone.title}</h3>
                                </div>
                                <div className="p-3">
                                    <p className="text-grey-50 text-sm md:text-base leading-relaxed">
                                        {milestone.description}
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

export default OurAchievements;