const HowMorrisonVisionCanHelp = () => {
    return (
      <div className="relative bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-16 px-6">
        <div className="container mx-auto">
          {/* Título 3D */}
          <h2 className="text-5xl font-bold text-center mb-12 relative z-10 text-shadowtext-5xl font-bold text-center mb-12 text-shadow-3d">
            ¿Cómo Morrison Visión le puede ayudar a su negocio?
          </h2>
  
          {/* Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Aumenta el tiempo de los visitantes</h3>
              <p className="text-center text-black">
                Al ofrecerles a los clientes contenido con el que ellos pueden interactuar.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Incrementa la audiencia</h3>
              <p className="text-center text-black">
                Ya no solo tienes que limitarte a la audiencia segmentada de tu área, sino puedes apuntar más lejos.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Profesionaliza tu Imagen de Marca</h3>
              <p className="text-center text-black">
                Incorporar tours virtuales a tu negocio demuestra que estás a la vanguardia tecnológica. Esto no solo mejora la percepción de tu marca, sino que también te posiciona como un líder innovador en tu industria.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Ahorran Tiempo y Recursos</h3>
              <p className="text-center text-black">
                Los tours virtuales reducen la necesidad de visitas físicas innecesarias, optimizando tu tiempo y el de tus clientes. Esto es especialmente útil en sectores como bienes raíces, comercio y construcción, donde coordinar visitas puede ser complicado.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowMorrisonVisionCanHelp;
  