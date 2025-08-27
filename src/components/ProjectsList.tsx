export default function ProjectsList({ projects }) {
    return (
        <section className="p-6  rounded-xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col"
                    >
                        {p.image && (
                            <img
                                src={p.image}
                                alt={p.title}
                                className="h-40 w-full object-cover"
                            />
                        )}
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                            <p className="text-gray-600 flex-1">{p.synopsis}</p>

                            {p.tags && (
                                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                    {p.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-sm bg-stone-500 text-white px-2 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {p.link &&
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-blue-600 hover:underline"
                                >
                                    View Project →
                                </a>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
