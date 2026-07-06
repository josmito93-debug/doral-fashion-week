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
      <body className="relative min-h-screen bg-[#020202] text-white">
        {/* Global Ambient Glows (Shared across all pages) */}
        <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed top-1/2 left-[10%] -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none z-0" />
        
        {/* Page Content */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
