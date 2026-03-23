/**
 * @typedef {Object} HeaderSectionProps
 * @property {React.ReactNode} commonChildren
 * @property {React.ReactNode} otherChildren
 */

/**
 * @param {HeaderSectionProps} props
 * @returns 
 */
function HeaderSection({ commonChildren, otherChildren }) {
    return (
        <section className="header-section-section" id="headerSection">
            <div className="container flex max-lg:flex-wrap max-lg:flex-col-reverse gap-5">
                {/* Common Content */}
                <div className="common-content w-full lg:w-[60%]">
                    {commonChildren}
                </div>
                {/* Other Content */}
                <div className="other-content w-full lg:w-[40%]">
                    {otherChildren}
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;