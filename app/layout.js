import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Pablo Zúñiga | Full Stack Developer & QA Engineer",
  description:
    "Portafolio profesional de Pablo Zúñiga. Desarrollador Full Stack con experiencia en Java, Spring Boot, React y calidad de software.",
  keywords: [
    "Pablo Zúñiga",
    "Full Stack Developer",
    "QA Engineer",
    "Java",
    "Spring Boot",
    "React",
    "Portafolio",
  ],
  authors: [{ name: "Pablo Zúñiga" }],
  openGraph: {
    title: "Pablo Zúñiga | Full Stack Developer & QA Engineer",
    description:
      "Portafolio profesional de Pablo Zúñiga. Desarrollador Full Stack con experiencia en Java, Spring Boot, React y calidad de software.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Font Awesome for tech stack icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
