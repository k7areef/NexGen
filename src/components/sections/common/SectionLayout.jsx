function SectionLayout({ className, title, headerChildren, children }) {
    return (
        <div className={`section-layout border border-dark-12 rounded-xl p-3 md:p-5${className ? ` ${className}` : ''}`}>
            <div className="header bg-dark-10 rounded-lg p-5 md:p-10 flex md:items-center justify-between max-md:flex-col gap-5 mb-3 md:mb-5">
                <h2 className="font-semibold uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl">{title}</h2>
                {headerChildren && <div className="header-children">{headerChildren}</div>}
            </div>
            <div className="bod">
                {children}
            </div>
        </div>
    )
}

export default SectionLayout;