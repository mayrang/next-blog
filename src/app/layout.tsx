import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mayrang`s Blog",
    template: "Mayrang`s Blog | %s",
  },
  description: "Mayrang의 블로그 입니다.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col  mx-auto max-w-screen-2xl">
        <Header />

        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
