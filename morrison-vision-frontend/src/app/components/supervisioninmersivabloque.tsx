import React from 'react';
import Link from 'next/link';

const ImmersiveSupervisionBlock = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-center">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">
          Conoce Sobre la Supervisión Inmersiva
        </h2>
        <p className="text-xl text-white mb-16">
          Lleva el control de tus proyectos de construcción al siguiente nivel con nuestra solución de supervisión inmersiva. A través de tecnología avanzada de escaneo 3D y recorridos virtuales, te ofrecemos una forma innovadora de monitorear el progreso de tus obras desde cualquier lugar.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Visualiza cada detalle en alta resolución</h3>
            <p className="text-gray-600">
              Observa tu proyecto como si estuvieras allí, con un nivel de detalle excepcional.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Compara el estado actual con los planos y cronogramas</h3>
            <p className="text-gray-600">
              Analiza cómo evoluciona tu obra y asegura que todo esté según lo planeado.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Identifica y resuelve problemas rápidamente</h3>
            <p className="text-gray-600">
              Actúa de manera eficiente y detecta áreas de mejora sin necesidad de visitas físicas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Comparte avances visuales con tu equipo</h3>
            <p className="text-gray-600">
              Comparte recorridos virtuales con clientes, socios o inversionistas de forma visual y profesional.
            </p>
          </div>
        </div>

        <p className="text-xl text-white mb-6">
          Esta tecnología es ideal para ingenieros, arquitectos, contratistas y propietarios que buscan supervisar sus proyectos con precisión y sin necesidad de visitas físicas constantes. Ahorra tiempo, mejora la comunicación y mantén un control total sobre cada etapa de tu obra.
        </p>
        <p className="text-2xl font-semibold text-white mb-8">
          Supervisa tu construcción como nunca antes, con la precisión y claridad que solo la inmersión virtual puede ofrecer.
        </p>

        <Link href="/contacto" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-all duration-300 transform hover:scale-105">
          Contáctanos para más información
        </Link>
      </div>
    </section>
  );
};

export default ImmersiveSupervisionBlock;
