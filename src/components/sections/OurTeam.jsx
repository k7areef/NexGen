import SectionLayout from "./common/SectionLayout";
import ourTeam from "../../data/ourTeam.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// Import images
import team1 from "../../assets/images/our-team/team-1.png";
import team2 from "../../assets/images/our-team/team-2.png";
import team3 from "../../assets/images/our-team/team-3.png";
import team4 from "../../assets/images/our-team/team-4.png";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const teamImages = [team1, team2, team3, team4];

function OurTeam() {
    return (
        <section className="our-team-section py-5 md:py-10" id="ourTeam">
            <div className="container px-4 mx-auto">
                <SectionLayout
                    title="Meet the brilliant minds behind NexGen"
                    headerChildren={<Link
                        to={"/about"}
                        title="All Members"
                        aria-label="All Members"
                        className="flex items-center gap-2 group"
                    >
                        <div className="arrow-wrapper w-10 h-10 flex items-center justify-center bg-dark-12 border border-dark-20 rounded-full text-orange-80">
                            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 transition-transform will-change-transform sm:group-hover:-rotate-90 sm:group-hover:scale-110" />
                        </div>
                        <span className="uppercase text-grey-70 transition-colors will-change-auto sm:group-hover:text-orange-80">ALL Members</span>
                    </Link>}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {ourTeam.map((member, index) => (
                            <div key={index} className="bg-dark-10 border border-dark-15 rounded-2xl p-6 flex flex-col items-center text-center gap-6">
                                <div className="space-y-1">
                                    <h3 className="text-white text-xl font-semibold uppercase tracking-wide">
                                        {member.name}
                                    </h3>
                                    <p className="text-grey-60 text-sm md:text-base">
                                        {member.role}
                                    </p>
                                </div>

                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#E5B6A3]">
                                    <img
                                        src={teamImages[index]}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <a href={member.socialLinks.facebook} className="w-12 h-12 flex items-center justify-center rounded-full border border-dark-20 bg-dark-08 text-orange-80 sm:hover:text-orange-60 hover:text-white bg-dark-12 transition-colors">
                                        <FontAwesomeIcon icon={faFacebookF} size="sm" />
                                    </a>
                                    <a href={member.socialLinks.twitter} className="w-12 h-12 flex items-center justify-center rounded-full border border-dark-20 bg-dark-08 text-orange-80 sm:hover:text-orange-60 hover:text-white bg-dark-12 transition-colors">
                                        <FontAwesomeIcon icon={faTwitter} size="sm" />
                                    </a>
                                    <a href={member.socialLinks.linkedin} className="w-12 h-12 flex items-center justify-center rounded-full border border-dark-20 bg-dark-08 text-orange-80 sm:hover:text-orange-60 hover:text-white bg-dark-12 transition-colors">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="sm" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default OurTeam;