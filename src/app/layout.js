import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import UsernameRequiredWrapper from "@/components/UsernameRequiredWrapper";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Poker Planner",
  description: "Poker Planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <UsernameRequiredWrapper>
            <AntdRegistry>{children}</AntdRegistry>
          </UsernameRequiredWrapper>
        </div>
      </body>
    </html>
  );
}
