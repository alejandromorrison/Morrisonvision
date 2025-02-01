'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';
import { motion } from 'framer-motion';

export type FormData = {
    nombres: string;
    apellidos: string;
    correo_electronico: string;
    numero_telefono: string;
    mensaje: string;
};

const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: `${Math.random() * 5 + 5}px`,
                        height: `${Math.random() * 5 + 5}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.2,
                    }}
                    animate={{
                        y: ["0%", "100%"],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

const Contact: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-700 via-black to-blue-800 opacity-50"></div>
            <FloatingParticles />
            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 w-full h-full max-w-7xl mx-auto p-6 md:p-10 bg-black bg-opacity-80 rounded-lg shadow-lg flex flex-col justify-center">
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-medium text-white">Nombres</label>
                        <input type="text" placeholder="Nombres" {...register('nombres', { required: true })} 
                            className="w-full rounded-md border border-gray-300 py-3 px-5 outline-none focus:border-purple-500 bg-gray-800 text-white" />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">Apellidos</label>
                        <input type="text" placeholder="Apellidos" {...register('apellidos', { required: true })} 
                            className="w-full rounded-md border border-gray-300 py-3 px-5 outline-none focus:border-purple-500 bg-gray-800 text-white" />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">Correo Electrónico</label>
                        <input type="email" placeholder="Correo Electrónico" {...register('correo_electronico', { required: true })} 
                            className="w-full rounded-md border border-gray-300 py-3 px-5 outline-none focus:border-purple-500 bg-gray-800 text-white" />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">Número de Teléfono</label>
                        <input type="text" placeholder="Número de Teléfono" {...register('numero_telefono', { required: true })} 
                            className="w-full rounded-md border border-gray-300 py-3 px-5 outline-none focus:border-purple-500 bg-gray-800 text-white" />
                    </div>
                </div>

                {/* Message Field */}
                <div className="mt-6">
                    <label className="block text-lg font-medium text-white">Mensaje</label>
                    <textarea rows={6} placeholder="Escribe tu mensaje" {...register('mensaje', { required: true })} 
                        className="w-full rounded-md border border-gray-300 py-3 px-5 outline-none focus:border-purple-500 resize-none bg-gray-800 text-white" />
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-600 transition text-lg w-full md:w-auto">
                        Enviar Formulario
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
