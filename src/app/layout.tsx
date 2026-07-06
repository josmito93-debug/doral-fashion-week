import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doral Fashion Week | Premium Fashion Event",
  description: "Doral Fashion Week - El evento de moda más exclusivo. Diseño, estilo y vanguardia.",
  icons: {
    icon: '/logo/logo doral FW.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative min-h-screen bg-[#020202] text-white overflow-x-hidden">
        {/* Global Ambient Glows (Shared across all pages, highly visible and elegant) */}
        <div className="absolute top-[-5%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[var(--accent)]/15 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-[25%] left-[-15%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--accent)]/10 rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0" />
        <div className="absolute top-[50%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.025] rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[10%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[var(--accent)]/12 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-0" />
        
        {/* Page Content */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
