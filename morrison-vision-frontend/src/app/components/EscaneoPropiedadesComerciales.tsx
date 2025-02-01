const ImmersiveScanSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-12 text-white rounded-lg shadow-lg mb-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Escaneos Inmersivos de Propiedades Comerciales
        </h2>
        <p className="text-lg mb-8">
          Potencia la presentación de tus propiedades comerciales con nuestra tecnología de escaneo inmersivo en 3D. Creamos recorridos virtuales interactivos que permiten a los potenciales compradores o arrendatarios explorar cada espacio con precisión y detalle, maximizando el atractivo de tu propiedad.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="p-6 bg-white text-center rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Presentación profesional</h3>
            <p className="text-gray-600">Muestra tus locales comerciales, oficinas o almacenes con una calidad visual impresionante y una experiencia de navegación fluida.</p>
          </div>
          <div className="p-6 bg-white text-center rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Ahorro de tiempo</h3>
            <p className="text-gray-600">Facilita el proceso de evaluación para interesados, eliminando la necesidad de múltiples visitas físicas.</p>
          </div>
          <div className="p-6 bg-white text-center rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Mayor alcance</h3>
            <p className="text-gray-600">Captura la atención de empresarios e inversionistas locales e internacionales que buscan propiedades sin importar la ubicación.</p>
          </div>
          <div className="p-6 bg-white text-center rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Detalles al alcance</h3>
            <p className="text-gray-600">Proporciona una vista clara de áreas clave como distribución, dimensiones y características esenciales para negocios.</p>
          </div>
        </div>
        
        <p className="text-lg mb-6">
          Este servicio es ideal para agentes comerciales, propietarios de grandes espacios y desarrolladores que buscan destacar en el competitivo mercado inmobiliario.
        </p>

        <p className="text-2xl font-semibold mb-8">
          Conéctate con tus clientes y presenta tus propiedades comerciales de manera moderna, impactante y efectiva.
        </p>

        {/* Aquí hemos eliminado la etiqueta <a> */}
        {/* <Link href="/contacto">
          <button className="inline-block px-10 py-4 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all duration-300 transform hover:scale-105">
            ¡Solicita tu escaneo ahora!
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default ImmersiveScanSection;
