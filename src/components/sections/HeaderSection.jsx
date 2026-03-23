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
            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Common Content */}
                <div className="common-content col-span-1 lg:col-span-2">
                    {commonChildren}
                </div>
                {/* Other Content */}
                <div className="other-content col-span-1">
                    {otherChildren}
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;