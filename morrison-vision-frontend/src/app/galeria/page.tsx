const ImmersiveGallery = () => {
    // Lista de trabajos inmersivos, cada uno con título, descripción, y enlace al iframe
    const projects = [
        {
            title: "Visión Inmersiva de un Vehículo",
            description: "Explora el Tesla Model S en 360° con detalles interactivos.",
            link: "https://my.matterport.com/show/?m=FuWxaWUqnDD", // Ejemplo de enlace de Matterport
        },
        {
            title: "Tour Virtual de un Edificio Histórico",
            description: "Recorre una antigua catedral en 3D, con información sobre su arquitectura.",
            link: "https://my.matterport.com/show/?m=xyzExampleLink", // Otro enlace de Matterport
        },
        {
            title: "Galería de Arte Interactivo",
            description: "Sumérgete en una experiencia artística con tecnología inmersiva.",
            link: "https://my.matterport.com/show/?m=abcAnotherExample", // Otro ejemplo
        },
        // Agrega más trabajos inmersivos aquí
    ];

    return (
        <div className="w-full px-6 py-12 bg-gray-50">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Galería de Trabajos Inmersivos</h1>
            <p className="text-2xl text-center text-gray-600 mb-12">
                Aquí tenemos una selección de trabajos inmersivos, desde vehículos hasta arte interactivo y más.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transform transition-all duration-300"
                    >
                        {/* Visualización del iframe de Matterport */}
                        <div className="w-full h-56">
                            <iframe
                                width="853"
                                height="480"
                                src={project.link}
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
                                className="object-cover w-full h-full"
                                title={project.title}
                            ></iframe>
                        </div>

                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white px-4 py-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-lg mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
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

export default ImmersiveGallery;
