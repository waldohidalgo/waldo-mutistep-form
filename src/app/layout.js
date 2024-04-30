import { Ubuntu } from "next/font/google";
import "./globals.css";

import Provider from "./StoreProvide.js";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Multistep form",
  description: "Four step form",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body className={ubuntu.className}>{children}</body>
      </html>
    </Provider>
  );
}
