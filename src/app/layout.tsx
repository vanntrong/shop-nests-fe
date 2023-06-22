import clsx from "clsx";
import { Lora } from "next/font/google";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { AppProvider } from "@/providers/appProvider";
import { PaymentProvider } from "@/providers/paymentProvider";
import QueryProvider from "@/providers/queryClientProvider";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <html lang="en">
        <AppProvider>
          <PaymentProvider>
            <body className={clsx(lora.className, "bg-white")}>
              <Header />
              <main>{children}</main>
              <Footer />
            </body>
          </PaymentProvider>
        </AppProvider>
      </html>
    </QueryProvider>
  );
}
