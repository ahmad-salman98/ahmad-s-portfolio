const EXPERIENCE_DATA = [
    {
        company: "Atypon",
        from: "Dec 2023",
        to: "Present",
        location: "Amman",
        position: "Frontend Engineer",
        description: "Built scalable front-end features for enterprise products, collaborating with Product Managers and Solution Architects to refine requirements and implement complex UI/UX designs."
    },
    {
        company: "Ascot Enterprise Solutions",
        from: "Jan 2023",
        to: "Dec 2023",
        location: "Amman",
        position: "Frontend Engineer",
        description: "Developed high-performance front-end solutions, collaborating with leadership and teams to translate requirements, optimize performance, and build reusable UI systems."
    },
    {
        company: "Orange Coding Academy",
        from: "Jun 2022",
        to: "Jan 2023",
        location: "Amman",
        position: "Full Stack Trainee",
        description: "Intensive technical training in collaboration with PSUT and Simplon.co, focused on modern web architectures, Agile methodologies, and full-stack development using React and Laravel."
    }
]

export default function Experience() {
    return (
        <section className="mt-20 font-semibold" id="experience">
            <h2 className="text-secondary text-4xl text-center md:text-6xl">My <span className="text-primary">Work Experience</span></h2>

            <div className="container mt-20">
                {
                    EXPERIENCE_DATA.map((item, index) => {
                        const isLast = index === EXPERIENCE_DATA.length - 1;
                        return (
                            <div key={index} className="flex align-start">
                                <div className="flex flex-col justify-between w-full md:flex-row">
                                    <div className="flex flex-2 flex-col md:gap-2">
                                        <h3 className="text-secondary text-lg md:text-3xl md:font-bold">{`${item.company}, ${item.location}`}</h3>
                                        <p className="text-santas-gray md:text-lg">{`${item.from} - ${item.to}`}</p>
                                    </div>
                                    <div className={`flex flex-1 items-center order-3 mt-10 mb-16 md:m-0 md:flex-col md:order-2 ${isLast ? "hidden md:flex" : ""}`}>
                                        <span className=" block border-2 border-dashed border-secondary p-1 rounded-full h-fit">
                                            <div className={`w-9 h-9 rounded-full ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`} />
                                        </span>
                                        {!isLast && <span className="block w-full h-0 m-2 border-t-2 border-dashed border-secondary md:border-t-0 md:border-l-2 md:w-1 md:h-30 " />}
                                    </div>
                                    <div className="flex flex-2 flex-col gap-2 order-2 md:order-3">
                                        <h3 className="text-secondary text-2xl -mt-21 md:-mt-0 md:text-3xl md:font-bold">{item.position}</h3>
                                        <p className="text-santas-gray text-lg mt-16 md:mt-0">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
