import Link from 'next/link';

const VehicleScanSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-12">
      {/* Texto sobre el escaneo inmersivo */}
      <div className="w-full sm:w-1/3 p-6 flex flex-col justify-center items-center text-center min-h-[700px]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Escaneo Inmersivo de Vehículo</h2>
        <p className="text-lg text-gray-700 mb-6">
          El escaneo 3D inmersivo de vehículos permite a los usuarios explorar y visualizar
          el vehículo desde cualquier ángulo, ofreciendo una experiencia detallada y precisa.
          Gracias a esta tecnología, los compradores pueden interactuar con el vehículo como si
          estuvieran allí, sin importar la distancia. Ideal para concesionarios que desean
          mostrar sus vehículos en línea de manera realista y detallada.
        </p>

        {/* Botón para redirigir a la página de escaneos de vehículos inmersivos */}
        <Link href="/visualizacion-inmersiva-vehiculos" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Ver mas
          </button>
        </Link>
      </div>

      {/* Iframe del escaneo */}
      <div className="w-full sm:w-2/3">
        <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect ratio */}
          {/* Iframe */}
          <iframe
            width="100%"
            height="100%"
            src="https://my.matterport.com/show/?m=fb6SWZbepuc"
            style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
            allowFullScreen
            allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VehicleScanSection;
