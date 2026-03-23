/**
 * @typedef {Object} MarqueeProps
 * @prop {string} [className]
 */

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

/**
 * @param {MarqueeProps} props 
 */

function MyMarquee({ className }) {
    return (
        <div className={`my-marquee p-3 ${className}`}>
            <div className="follow-us-on-social-media-content-wrapper text-grey-40 uppercase bg-dark-06 py-5 rounded-xl">
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
    )
}

export default MyMarquee;