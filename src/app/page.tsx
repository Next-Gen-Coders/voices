"use client";

import { WelcomeToLens } from "@/components/WelcomeToLens";
import { useState } from "react";
import LeftSidebar from "../components/frontend/LeftSidebar";
import MainSection from "@/components/frontend/MainSection";
import RightSidebar from "@/components/frontend/RightSidebar";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("foryou");
  return (
    <div className="flex justify-center h-screen w-screen bg-neutral-900 text-white">
      <LeftSidebar />
      <div className="flex-grow max-w-[550px] border border-neutral-700 min-h-screen overflow-auto scrollbar">
        <MainSection />
      </div>
      <RightSidebar/>  
    </div>
  );
}
