'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: "¿Qué es Morrison Vision?",
        answer: "Morrison Vision ofrece servicios de escaneo 3D con Matterport en la región del Caribe, permitiendo recorridos virtuales de alta calidad."
    },
    {
        question: "¿Qué beneficios tiene un recorrido virtual?",
        answer: "Los recorridos virtuales aumentan la visibilidad de los espacios, generan mayor interés en clientes potenciales y facilitan la toma de decisiones a distancia."
    },
    {
        question: "¿cual es el costo de un escaneo de un vehiculo?",
        answer: "El escaneo de un vehiculo el precio comienza desde los $150 dolares dependiendo del tamaño y la complejidad."
    },
    {
        question: "¿Que paises del caribe y de la region ustedes cubren para realizar escaneos inmersivos?",
        answer: "Estamos actualmente trabajando la Republica Dominicana, pero estamos abiertos a trabajar mas paises de la region."
    },
    {
        question: "Hay algunos costos asociados a los tours virtuales?",
        answer: "Los tour virtuales estan hospedados en-linea. esto quiere decir que hay algunos costos asociados similares a hospedar una pagina web."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-12xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                        <button
                            className="w-full text-left text-lg font-medium text-white flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className="text-purple-400">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </button>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-300 mt-2">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
