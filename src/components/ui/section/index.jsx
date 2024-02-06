function Section({ title, children }) {
    return (
        <section className="mb-[40px]">
            <div className="mb-2 dark:text-white">
                {typeof title === 'string' && <h3 className="text-[20px] font-[700]">{title}</h3>}
                {typeof title === 'object' && title}
            </div>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Section;