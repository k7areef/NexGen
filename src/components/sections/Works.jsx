import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionLayout from "./common/SectionLayout";
import works from "@data/works.json";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import WorkImage1 from "@assets/images/works/1.png";
import WorkImage2 from "@assets/images/works/2.png";
import Button from "@components/UI/Button";
import team1 from "@assets/images/team-members/1.png";
import team2 from "@assets/images/team-members/2.png";
import team3 from "@assets/images/team-members/3.png";
import team4 from "@assets/images/team-members/4.png";
import team5 from "@assets/images/team-members/5.png";

const teamMembersMaper = [
    team1,
    team2,
    team3,
    team4,
    team5
];

function Works() {
    return (
        <section className="works-section py-5 md:py-10" id="works">
            <div className="container">
                <SectionLayout
                    title="Our Works"
                    headerChildren={<></>}
                    className="p-0! border-0!"
                >
                    <div className="body-content space-y-3 md:space-y-5">
                        {
                            works.map((work, index) => (<div className="work-item grid grid-cols-1 lg:grid-cols-3 gap-5 p-3 md:p-5 border border-dark-12 rounded-xl" key={index}>
                                {/* Work Info */}
                                <div className="work-info bg-dark-10 space-y-3 md:space-y-5 p-3 md:p-5 rounded-xl">
                                    {/* Header */}
                                    <div className="card-header flex items-center gap-3">
                                        <a
                                            href={work.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-fit sm:hover:underline sm:hover:text-orange-60 transition duration-200 ease-in"
                                        >
                                            <h3 className="uppercase font-medium text-lg">{work.title}</h3>
                                        </a>
                                        <a
                                            href={work.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-grey-70 hover:text-grey-80 transition duration-200 ease-in uppercase"
                                        >
                                            Details
                                        </a>
                                    </div>
                                    {/* Details */}
                                    <div className="card-details">
                                        {/* Category */}
                                        <div className="work-category py-2 px-4 rounded-full bg-dark-12 flex items-center gap-2 w-fit mb-2">
                                            <span className="text-grey-70">Category</span>
                                            <FontAwesomeIcon icon={faCircle} className="text-[6px] text-orange-60" />
                                            <span className="font-medium">{work.category}</span>
                                        </div>
                                        {/* Time */}
                                        <div className="work-time py-2 px-4 rounded-full bg-dark-12 flex items-center gap-2 w-fit">
                                            <span className="text-grey-70">Time Taken</span>
                                            <FontAwesomeIcon icon={faCircle} className="text-[6px] text-orange-60" />
                                            <span className="font-medium">{work.time}</span>
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <p className="text-grey-70 line-clamp-5">{work.description}</p>
                                </div>
                                {/* Work Image */}
                                <a
                                    href={work.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-image block rounded-xl overflow-hidden group max-lg:sm:col-span-2 max-lg:sm:-order-1"
                                >
                                    <img
                                        src={index === 0 ? WorkImage1 : WorkImage2}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition duration-500 ease-out will-change-transform sm:group-hover:scale-105"
                                    />
                                </a>
                                {/* Wrok Details */}
                                <div className="work-details flex flex-col gap-3 md:gap-5 justify-between">
                                    {/* Techs */}
                                    <div className="techs bg-dark-10 p-3 md:p-5 rounded-xl">
                                        <h3 className="font-medium uppercase text-lg mb-3">Technologies Used</h3>
                                        <div className="techs-wrapper flex items-center gap-2 *:text-nowrap flex-wrap">
                                            {
                                                work.techs.map((tech, index) => (<div className="tech-item py-2 px-4 rounded-full bg-dark-12 font-medium" key={index}>
                                                    {tech}
                                                </div>))
                                            }
                                        </div>
                                    </div>
                                    {/* Team Members */}
                                    <div className="team-members bg-dark-10 p-3 md:p-5 rounded-xl">
                                        <h3 className="uppercase font-medium mb-3">Team Members</h3>
                                        <div className="memebr-imags flex gap-2">
                                            {
                                                teamMembersMaper.map((img, index) => (<img
                                                    src={img}
                                                    alt={`Team Member ${index + 1}`}
                                                    key={index}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />))
                                            }
                                        </div>
                                    </div>
                                    {/* CTA */}
                                    <Button
                                        className="cta"
                                    >
                                        Book a Call
                                    </Button>
                                </div>
                            </div>))
                        }
                    </div>
                </SectionLayout>
            </div>
        </section>
    )
}

export default Works;