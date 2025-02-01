import Image from 'next/image';

const Portfolio = () => {
    // Lista de proyectos, cada uno con título, descripción e imagen
    const projects = [
        {
            title: "",
            description: "",
            imageSrc: "/",
            link: "/",
        },
        // Agrega más proyectos aquí
    ];

    return (
        <div className="w-full px-6 py-12 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Nuestro Portafolio</h1>
            <p className="text-2xl text-center text-gray-600 mb-12">
                Aquí tenemos una selección de trabajos, cada uno mostrando cómo transformamos espacios e ideas con tecnología de punta.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transform transition-all duration-300"
                    >
                        <Image
                            src={project.imageSrc}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white px-4 py-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-lg mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors duration-200"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
