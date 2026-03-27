import { Link } from "react-router-dom";
import SectionLayout from "./common/SectionLayout";
import jobs from "@data/jobs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";
import icon1 from "@assets/icons/services/1.svg";
import icon2 from "@assets/icons/services/2.svg";
import icon3 from "@assets/icons/services/3.svg";
import icon4 from "@assets/icons/services/4.svg";

const iconsMaper = [icon1, icon2, icon3, icon4];

function JobOpenings() {
    return (
        <section className="job-openings-section py-5 md:py-10" id="jobOpenings">
            <div className="container">
                <SectionLayout
                    title="Join Our Team at NexGen"
                    headerChildren={<></>}
                >
                    <div className="jobs grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            jobs.map((job, index) => (
                                <div key={index} className="job-card bg-dark-10 rounded-lg p-5 md:p-8 flex flex-col gap-6 border border-dark-15">
                                    {/* Card Header */}
                                    <div className="card-header flex items-center justify-between gap-4">
                                        <div className="title-wrapper flex items-center gap-3">
                                            <div className="icon-box w-12 h-12 md:w-16 md:h-16 bg-dark-12 border border-dark-15 rounded-xl flex items-center justify-center">
                                                <img src={iconsMaper[index % iconsMaper.length]} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                                            </div>
                                            <h3 className="text-white text-lg md:text-xl font-semibold uppercase">{job.title}</h3>
                                        </div>
                                        <Link
                                            to="/careers"
                                            className="flex items-center gap-2 group whitespace-nowrap"
                                        >
                                            <div className="arrow-wrapper w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-dark-12 border border-dark-20 rounded-full text-white transition-colors group-hover:bg-dark-15">
                                                <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 transition-transform group-hover:-rotate-90" />
                                            </div>
                                            <span className="text-grey-60 text-sm font-medium uppercase hidden sm:block">View Details</span>
                                        </Link>
                                    </div>

                                    {/* Badges */}
                                    <div className="job-badges flex flex-wrap gap-2">
                                        <div className="badge bg-dark-12 border border-dark-15 rounded-full py-2 px-4 flex items-center gap-2">
                                            <span className="text-grey-60 text-xs md:text-sm">Salary</span>
                                            <FontAwesomeIcon icon={faCircle} className="text-[6px] text-orange-60" />
                                            <span className="text-white text-xs md:text-sm">{job.salary}</span>
                                        </div>
                                        <div className="badge bg-dark-12 border border-dark-15 rounded-full py-2 px-4 flex items-center gap-2">
                                            <span className="text-grey-60 text-xs md:text-sm">Experience</span>
                                            <FontAwesomeIcon icon={faCircle} className="text-[6px] text-orange-60" />
                                            <span className="text-white text-xs md:text-sm">{job.experience}</span>
                                        </div>
                                        <div className="badge bg-dark-12 border border-dark-15 rounded-full py-2 px-4 flex items-center gap-2">
                                            <span className="text-grey-60 text-xs md:text-sm">Deadline</span>
                                            <FontAwesomeIcon icon={faCircle} className="text-[6px] text-orange-60" />
                                            <span className="text-white text-xs md:text-sm">{job.deadline}</span>
                                        </div>
                                    </div>

                                    {/* Skills Section */}
                                    <div className="skills-section flex flex-col gap-3">
                                        <h4 className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Skills</h4>
                                        <p className="text-grey-60 text-sm md:text-base leading-relaxed">
                                            {job.skills}
                                        </p>
                                    </div>

                                    {/* Apply Button */}
                                    <Button className="w-full py-4 font-bold uppercase rounded-xl mt-auto bg-orange-60 hover:bg-orange-70 text-dark-08 transition-colors">
                                        Apply Now
                                    </Button>
                                </div>
                            ))
                        }
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default JobOpenings;