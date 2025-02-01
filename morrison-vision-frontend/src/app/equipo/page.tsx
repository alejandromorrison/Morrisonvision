"use client";

import Image from "next/image";

const equipo = () => {
    return (
<div className="w-full">
    {/* Contenedor de la imagen con overlay */}
    <div className="relative w-full h-[900px]">
        {/* Imagen */}
        <Image src="/shotequipo.png" alt="Equipo" fill className="object-cover" />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Texto centrado sobre la imagen */}
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold text-center px-6">
            Detrás de cada proyecto exitoso, hay un equipo apasionado y comprometido.
        </h1>
    </div>

    {/* Contenedor del texto separado */}
    <div className="mt-8 px-6 text-center">
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Morrison Visión es una firma especializada en crear experiencias inmersivas de alta calidad, 
            utilizando tecnología de punta para los sectores automotriz, inmobiliario y de obras civiles. 
            Nos enfocamos en ofrecer soluciones innovadoras a través del escaneo 3D y la visualización digital, 
            permitiendo a nuestros clientes interactuar de una manera más profunda y precisa con los espacios y productos que ofrecemos.
        </p>

        <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">Nuestros Valores</h2>
            <div className="max-w-3xl mx-auto mt-4 text-left text-lg text-gray-700">
                <ul className="list-disc pl-6">
                    <li><strong>Precisión y Detalle:</strong> Nos aseguramos de capturar cada espacio con la máxima fidelidad y calidad, brindando resultados exactos y realistas.</li>
                    <li><strong>Innovación Tecnológica:</strong> Apostamos por las últimas tecnologías en escaneo 3D para transformar la manera en que los negocios presentan sus espacios.</li>
                    <li><strong>Compromiso con la Excelencia:</strong> No solo entregamos imágenes; ofrecemos experiencias inmersivas que agregan valor real a nuestros clientes.</li>
                    <li><strong>Trabajo en Equipo:</strong> Creemos en la colaboración y el conocimiento compartido para ofrecer soluciones efectivas y creativas.</li>
                    <li><strong>Orientación al Cliente:</strong> Nos enfocamos en entender las necesidades de cada cliente y superar sus expectativas con un servicio de calidad.</li>
                    <li><strong>Adaptabilidad:</strong> Nos ajustamos a diferentes industrias y necesidades, desde bienes raíces hasta construcción y turismo.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

    );
}

export default equipo;