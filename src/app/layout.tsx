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
      <body>
        {children}
      </body>
    </html>
  );
}
