// components/Footer.tsx
import React from 'react';
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sobre nosotros</h3>
          <p className="text-sm">
          Ofrecemos soluciones avanzadas de escaneo 3D con tecnología Matterport, proporcionando vistas detalladas y precisas para el sector inmobiliario, construcción y más, en toda la región del Caribe.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links rapidos</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:text-gray-400">Pagina de Inicio</Link></li>
            <li><Link href="#" className="hover:text-gray-400">Servicios</Link></li>
            <li><Link href="/galeria" className="hover:text-gray-400">galeria</Link></li>
            <li><Link href="/formulario-contacto" className="hover:text-gray-400">Formulario de contacto</Link></li>
            <li><Link href="/politicas-privacidad" className="hover:text-gray-400">Politicas de privacidad</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
        <h3 className="text-lg font-semibold mb-4">Siguenos!</h3>
        <div className="flex flex-col space-y-4">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
                <i>Facebook</i>
            </a> */}
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
                <i>Twitter</i>
            </a> */}
            {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
                <i>LinkedIn</i>
            </a> */}
            <a href="https://www.instagram.com/morrisonvisiondo?igsh=OWIwYXQzbXdiYjFn" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
                <i>Instagram</i>
            </a>
        </div>
        </div>


        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contactanos!</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Gazcue, Santo Domingo, Dominican Republic</li>
            <li>📞 +1 (809) 534-1799</li>
            <li>📞 Whatsapp +1 (849) 451-6540</li>
            <li>✉️ nihiloit@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Morrison vision. todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
