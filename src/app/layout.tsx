import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

import { AppProvider } from "@/providers/appProvider";
import { AuthProvider } from "@/providers/authProvider";
import LayoutProvider from "@/providers/layoutProvider";
import { PaymentProvider } from "@/providers/paymentProvider";
import QueryProvider from "@/providers/queryClientProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <html lang="en">
        <AppProvider>
          <PaymentProvider>
            <AuthProvider>
              <LayoutProvider>{children}</LayoutProvider>
            </AuthProvider>
          </PaymentProvider>
        </AppProvider>
      </html>
    </QueryProvider>
  );
}
