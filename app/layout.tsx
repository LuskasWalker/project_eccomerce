import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Lading Page",
  description: "Product Lading Page using next and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
