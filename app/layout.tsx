import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imagine Dragons",
  description: "A fan page for the band Imagine Dragons 🐉.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dzhiauyws/image/upload/v1720537082/Imagine%20Dragons/imaginedragons_jufa4y.webp"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
