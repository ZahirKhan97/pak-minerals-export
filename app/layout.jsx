import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: {
    default: "Export Minerals",
    template: "%s | Export Minerals",
  },
  description:
    "Premium minerals, salts, and gems exported from Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
