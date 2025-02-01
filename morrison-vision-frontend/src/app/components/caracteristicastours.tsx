import React from "react";
import { FaVrCardboard, FaMousePointer, FaMobileAlt, FaShareAlt } from "react-icons/fa";

const TourFeatures = () => {
  const features = [
    {
      icon: <FaVrCardboard className="text-blue-500 text-5xl" />,
      title: "Compatibles con la tecnología VR",
      description: "Compatible con realidad virtual, ofreciendo una experiencia inmersiva y realista con cascos VR.",
    },
    {
      icon: <FaMousePointer className="text-blue-500 text-5xl" />,
      title: "Interactivo",
      description: "Ofrece múltiples puntos de acceso, integraciones multimedia y una experiencia totalmente interactiva.",
    },
    {
      icon: <FaMobileAlt className="text-blue-500 text-5xl" />,
      title: "Accesible",
      description: "Disponible en computadoras, tabletas y teléfonos inteligentes para una exploración sin interrupciones.",
    },
    {
      icon: <FaShareAlt className="text-blue-500 text-5xl" />,
      title: "Compatible en todas las plataformas",
      description: "Fácil de compartir en sitios web, redes sociales y blogs para maximizar el alcance.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Características de los Tours</h2>
        <p className="text-lg text-gray-600 mt-3">
          Descubre por qué nuestros tours inmersivos marcan la diferencia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourFeatures;
