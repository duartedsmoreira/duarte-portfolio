import type { Metadata } from "next";
import "./globals.css"; // We will create this file next

export const metadata: Metadata = {
  title: "Duarte Moreira - Portfolio",
  description: "IT Business Analyst & Power BI Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
