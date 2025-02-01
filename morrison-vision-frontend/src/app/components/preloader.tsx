"use client"; // Necesario para usar estados en Next.js App Router

import { useState, useEffect } from "react";

interface PreloaderProps {
  logo: string;
}

const Preloader: React.FC<PreloaderProps> = ({ logo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ocultar el preloader después de 2 segundos
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Oculta el Preloader cuando loading es false

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src={logo} alt="Logo" className="w-150 h-60 animate-pulse" />
    </div>
  );
};

export default Preloader;
