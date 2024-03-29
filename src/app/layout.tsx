import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paypay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-white">
          <Header />
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#5427D4",
              },
            }}
          >
            <AntdRegistry>{children}</AntdRegistry>
          </ConfigProvider>
        </main>
      </body>
    </html>
  );
}
