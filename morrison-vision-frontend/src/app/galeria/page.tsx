const ImmersiveGallery = () => {
    // Lista de trabajos inmersivos, cada uno con título, descripción, y enlace al iframe
    const projects = [
        {
            title: "2025 Mercedes-Benz GLE 53 AMG | Auto Gallery",
            link: "https://my.matterport.com/show/?m=oWz9j5DNiwM", // Ejemplo de enlace de Matterport
        },
        {
            title: "2025 Mercedes=benz SL 55 AMG | Auto Gallery",
            link: "https://my.matterport.com/show/?m=kGiAqWusPrd", // Otro enlace de Matterport
        },
        {
            title: "2025 Mercedes=benz GLC 200 | Auto Gallery",
            link: "https://my.matterport.com/show/?m=bTUc76sewrW", // Otro enlace de Matterport
        },
        {
            title: "2025 Mercedes=benz GLS 450 | Auto Gallery",
            link: "https://my.matterport.com/show/?m=d9CYNffGCrM", // Otro enlace de Matterport
        },
        {
            title: "2025 Mercedes=benz GLE 450 | Auto Gallery",
            link: "https://my.matterport.com/show/?m=2bn3JWXRA9X", // Otro enlace de Matterport
        },
        {
            title: "2025 Mercedes=benz GLB 200 | Auto Gallery",
            link: "https://my.matterport.com/show/?m=GesXHpGEwaA", // Otro enlace de Matterport
        },
        {
            title: "2025 Mercedes=benz GLC 200 | Auto Gallery",
            link: "https://my.matterport.com/show/?m=muWuvkGSC12", // Otro enlace de Matterport
        },
        {
            title: "2025 Mercedes=benz GLA 200 | Auto Gallery",
            link: "https://my.matterport.com/show/?m=PUHsxFpj1iy", // Otro enlace de Matterport
        },
        {
            title: "2025 Jetour Dashing | Auto Gallery",
            link: "https://my.matterport.com/show/?m=FuWxaWUqnDD", // Otro enlace de Matterport
        },
        {
            title: "2025 Jetour X70 Plus | Auto Gallery",
            link: "https://my.matterport.com/show/?m=U1XnrDacR2A", // Otro enlace de Matterport
        },
        {
            title: "2025 Jetour X70 240T (Negra) | Auto Gallery",
            link: "https://my.matterport.com/show/?m=SngqiT9QXGj", // Otro enlace de Matterport
        },
        {
            title: "2025 Jetour X70 240T (Azul)  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=eEU1miX1fsj", // Otro enlace de Matterport
        },
        {
            title: "2025 Jetour T2  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=Y6ctk2qAW2g", // Otro enlace de Matterport
        },
        {
            title: "2025 Mazda Cx-5  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=LHmCkLJvwUK", // Otro enlace de Matterport
        },
        {
            title: "2025 Mazda Cx-5 GS  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=fpv6iqeDUFm", // Otro enlace de Matterport
        },
        {
            title: "2025 Mazda Cx-90  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=iXhjSHTQ81H", // Otro enlace de Matterport
        },
        {
            title: "2025 Ford Bronco Badlands  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=NJP5SjYYzmM", // Otro enlace de Matterport
        },
        {
            title: "2025 Ford Bronco Raptor  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=fb6SWZbepuc", // Otro enlace de Matterport
        },
        {
            title: "2025 Ford Ranger WildTrack  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=6bJxiqaDFDo", // Otro enlace de Matterport
        },
        {
            title: "2025 Ford Territory Titanium  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=TgEHVEwcRn1", // Otro enlace de Matterport
        },
        {
            title: "2025 Ford Expedition  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=qAoppRa5t4z", // Otro enlace de Matterport
        },
        {
            title: "2025 Ford Territory Trend  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=PyCTP5obGrA", // Otro enlace de Matterport
        },
        {
            title: "2025 kia k3  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=pydgKfsvJbA", // Otro enlace de Matterport
        },
        {
            title: "2025 kia Seltos  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=M8zJevoEUBH", // Otro enlace de Matterport
        },
        {
            title: "2025 kia Sorento  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=jgXMuGnC3vt", // Otro enlace de Matterport
        },
        {
            title: "2025 kia k2700  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=dBVxRTAd392", // Otro enlace de Matterport
        },
        {
            title: "2025 kia K2700 2025 Doble Cabina  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=h9ZMUqz9SNS", // Otro enlace de Matterport
        },
        {
            title: "2025 kia sportage  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=Yd1bHhatsS8", // Otro enlace de Matterport
        },
        {
            title: "2025 kia sonet (rojo)  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=fU4jaxF99DE", // Otro enlace de Matterport
        },
        {
            title: "2025 kia sonet (azul)  | Auto Gallery",
            link: "https://my.matterport.com/show/?m=sjARteBkamH", // Otro enlace de Matterport
        },
        {
            title: "Estructuras Morrison | Instalaciones",
            link: "https://my.matterport.com/show/?m=evMDRjd4W3e", // Otro enlace de Matterport
        },
        {
            title: "2013 Kia rio EX | privado",
            link: "https://my.matterport.com/show/?m=5vow4Q2n3uR", // Otro enlace de Matterport
        },
        {
            title: "Torre Milan Lobby & Parqueos | Country Kapital",
            link: "https://my.matterport.com/show/?m=ddX5u86AGut", // Otro enlace de Matterport
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
