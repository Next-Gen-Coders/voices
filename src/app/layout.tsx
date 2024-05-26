import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Web3Provider } from "@/components/Web3Provider";
import "./globals.css";
import LeftSidebar from "@/components/frontend/LeftSidebar";
import RightSidebar from "@/components/frontend/RightSidebar";
import PersonalMessage from "@/components/frontend/Messages/PersonalMessage";
import RightDiv from "@/components/frontend/RightDiv";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voices",
  description: "A Better social media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>
          <div className="flex justify-center h-screen w-screen bg-neutral-900 text-white">
            <LeftSidebar />
            <div className="flex-grow max-w-[550px] border border-neutral-700 min-h-screen overflow-auto scrollbar">
              {children}
            </div>
            <RightDiv />
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
