import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css'; // Asegúrate de que esta ruta sea correcta para tu CSS global


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portafolio - Pablo Zúniga",
  description: "Creado con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Enlace a CSS externo (Google Fonts) - ESTO ESTÁ BIEN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {children}
      </body>
    </html>
  );
}

