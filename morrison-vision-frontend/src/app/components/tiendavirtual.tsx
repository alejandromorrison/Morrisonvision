import React from "react";

const VirtualStoreSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 md:px-12 lg:px-24 rounded-xl shadow-xl overflow-hidden">
      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center gap-12 text-center">
        {/* Texto informativo */}
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-shadow-lg transform-gpu translate-y-1 hover:translate-y-0 transition duration-300">
            Virtualización Inmersiva de Tiendas
          </h2>
          <p className="text-lg text-gray-200">
            Transforma la experiencia de compra de tus clientes y lleva tu negocio al mundo virtual con nuestra solución de virtualización inmersiva de tiendas.
          </p>
          <ul className="space-y-3 text-lg text-gray-300">
            <li><strong className="text-white">✔ Experiencia de cliente única:</strong> Recorridos virtuales envolventes.</li>
            <li><strong className="text-white">✔ Compras inmersiva:</strong> Añadir productos al carrito dentro del tour.</li>
            <li><strong className="text-white">✔ Aumento de ventas:</strong> Facilita decisiones de compra.</li>
            <li><strong className="text-white">✔ Mayor alcance:</strong> Accede a clientes globalmente.</li>
            <li><strong className="text-white">✔ Catálogo interactivo:</strong> Información en tiempo real de productos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VirtualStoreSection;