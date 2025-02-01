import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        // Añadimos la sombra para el efecto 3D
        '3d': '2px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 15px rgba(0, 0, 0, 0.1)',
      },
      textShadow: {
        // Definimos el texto en 3D con un efecto de sombra
        '3d': '2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    // Asegúrate de instalar el plugin para el textShadow
    require('tailwindcss-textshadow')
  ],
} satisfies Config;
