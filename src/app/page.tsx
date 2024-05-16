"use client";

import { WelcomeToLens } from "@/components/WelcomeToLens";
import Image from "next/image";
import { useState } from "react";
import LeftSidebar from "../components/frontend/LeftSidebar";
import CreateTweet from "../components/frontend/CreateTweet";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("foryou");
  return (
    <div className="flex justify-center h-screen w-screen bg-neutral-900 text-white">
      <LeftSidebar />
      <div>
        <div className="w-full divide-x-2">
          <button
            onClick={() => {
              setSelectedTab("foryou");
            }}
            className={`w-1/2 text-xl font-semibold text-center p-2 border-b-2 border-neutral-700 ${
              selectedTab == "foryou" && "border-b-4"
            }`}
          >
            For you
          </button>
          <button
            onClick={() => {
              setSelectedTab("following");
            }}
            className={`w-1/2 text-xl font-semibold text-center p-2 border-b-2 border-neutral-700 ${
              selectedTab == "following" && "border-b-4"
            }`}
          >
            Following
          </button>
        </div>
        <CreateTweet /> 
      </div>
    </div>
  );
}
