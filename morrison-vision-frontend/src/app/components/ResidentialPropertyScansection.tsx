import Link from 'next/link';

const ResidentialPropertyScanSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-6">Escaneos Inmersivos de Propiedades Residenciales</h2>

        {/* Descripción */}
        <p className="text-lg text-center mb-8">
          Haz que tus propiedades residenciales brillen con nuestra tecnología de escaneo inmersivo en 3D. Con este servicio, creamos recorridos virtuales realistas y detallados que permiten a los posibles compradores o inquilinos explorar cada rincón de la propiedad desde la comodidad de su hogar.
        </p>

{/* Beneficios */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold mb-4 text-black">Experiencia Inmersiva</h3>
    <p className="text-center text-black">Los clientes pueden recorrer la propiedad como si estuvieran allí, apreciando cada detalle del espacio.</p>
  </div>
  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold mb-4 text-black">Ahorro de Tiempo</h3>
    <p className="text-center text-black">Reduce las visitas presenciales innecesarias, mostrando la propiedad de forma completa y transparente.</p>
  </div>
  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold mb-4 text-black">Mayor Alcance</h3>
    <p className="text-center text-black">Atrae a clientes locales e internacionales que buscan explorar propiedades de forma remota.</p>
  </div>
  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-semibold mb-4 text-black">Calidad Profesional</h3>
    <p className="text-center text-black">Ofrecemos imágenes nítidas y una navegación fluida para que la experiencia sea impactante y memorable.</p>
  </div>
</div>


        {/* Espacio para el Iframe */}
        <div className="relative mb-8" style={{ paddingTop: '56.25%' }}>
  <iframe
    src="https://my.matterport.com/show/?m=evMDRjd4W3e"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
    className="absolute top-0 left-0 w-full h-full"
  ></iframe>
</div>


        {/* Llamado a la acción */}
        <div className="text-center">
          <Link href="/escaneo-residencial" passHref>
            {/* <button className="px-8 py-4 bg-yellow-500 text-black text-xl font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
              Descubre más sobre nuestros escaneos
            </button> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResidentialPropertyScanSection;
