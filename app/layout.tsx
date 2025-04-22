import "./globals.css";
import { UIProvider } from "@yamada-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UIProvider>
      <html lang="en">
        <body className={`antialiased`}>{children}</body>
      </html>
    </UIProvider>
  );
}
