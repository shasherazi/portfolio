import type { Metadata } from "next";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "shasherazi's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background text-primary`}>{children}</body>
    </html>
  );
}
