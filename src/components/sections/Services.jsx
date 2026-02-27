import SectionLayout from "./common/SectionLayout";
import services from "@data/services.json";
import icon1 from "@assets/icons/services/1.svg";
import icon2 from "@assets/icons/services/2.svg";
import icon3 from "@assets/icons/services/3.svg";
import icon4 from "@assets/icons/services/4.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@components/UI/Button";

const iconsMaper = {
    1: icon1,
    2: icon2,
    3: icon3,
    4: icon4
}

function Services() {
    return (
        <section className="services-section py-5 md:py-10" id="services">
            <div className="container">
                <SectionLayout
                    title="Our Services"
                    headerChildren={<></>}
                >
                    <div className="cards-grid grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            services.map((service, index) => (<div className="service-card rounded-lg overflow-hidden bg-dark-10 p-5 flex flex-col gap-3" key={index}>
                                <div className="header flex items-center gap-3">
                                    <div className="profile-icon bg-dark-12 rounded-md border border-dark-20 w-12 h-12 flex items-center justify-center text-orange-60">
                                        <img src={iconsMaper[service.id]} alt={service.title} width={25} />
                                    </div>
                                    <h3 className="uppercase font-medium text-lg sm:text-xl">{service.title}</h3>
                                    <Link
                                        to={'/'}
                                        className="flex items-center gap-2 group w-fit ms-auto max-sm:hidden"
                                    >
                                        <div className="text-orange-80 -rotate-45 w-12 h-12 rounded-full border border-dark-20 flex items-center justify-center shrink-0 transiiton duration-200 ease-in sm:group-hover:border-dark-35">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div>
                                        <p className="text-grey-70! transition duration-200 ease-in sm:group-hover:text-grey-80!">Book a Call</p>
                                    </Link>
                                </div>
                                <p className="text-grey-70 max-sm:order-1 max-sm:-mt-2">{service.description}</p>
                                <div className="start-from sm:ms-auto font-medium uppercase text-lg w-fit">Starts From {service.startFrom}</div>
                                <Button
                                    to={'/'}
                                    className="block text-center uppercase order-1 sm:hidden"
                                >Book a Call</Button>
                            </div>))
                        }
                    </div>
                </SectionLayout>
            </div >
        </section >
    )
}

export default Services;