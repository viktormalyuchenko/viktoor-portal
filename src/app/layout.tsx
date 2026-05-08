import type { Metadata } from "next";
import { Montserrat, Space_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "900"],
  variable: "--font-montserrat",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Viktor Fun Portal | Мои проекты",
  description: "Каталог интерактивных веб-экспериментов и ботов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.variable} ${spaceMono.variable} font-sans text-black overflow-x-hidden selection:bg-neo-primary selection:text-white`}
      >
        {/* Global Header */}
        <header className="w-full bg-white border-b-4 border-black p-4 flex justify-between items-center sticky top-0 z-50 shadow-neo">
          <a
            href="/"
            className="text-2xl font-black uppercase tracking-tighter hover:text-neo-primary transition-colors"
          >
            viktoor.ru
          </a>
          <div className="hidden md:block font-mono text-sm font-bold">
            [ EST. 2025 ]
          </div>
        </header>

        {children}

        {/* Global Footer */}
        <footer className="bg-black text-white py-8 border-t-4 border-white mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="font-mono font-bold text-lg">
              © {new Date().getFullYear()} - Сделано с ❤️ Виктором
            </p>
            <div className="mt-4 space-x-4">
              <span className="inline-block px-2 py-1 bg-neo-primary text-black font-bold text-xs transform -rotate-3">
                Next.js
              </span>
              <span className="inline-block px-2 py-1 bg-neo-secondary text-black font-bold text-xs transform rotate-2">
                Tailwind
              </span>
              <span className="inline-block px-2 py-1 bg-neo-accent text-black font-bold text-xs transform -rotate-1">
                Vercel
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
