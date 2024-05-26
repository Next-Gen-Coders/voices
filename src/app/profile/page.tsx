"use client"
import { GenerateAvatar, generateUsername } from "../../utils/helperFunctions";
import PostDashboard from "../../components/frontend/Dashboard/PostDashboard";
import RepliesDashboard from "../../components/frontend/Dashboard/RepliesDashboard";
import LikesDashboard from "../../components/frontend/Dashboard/LikesDashboard";
import { useEffect, useState } from "react";
import { UserDetailsDefaultValues, UserDetailsType } from "../../utils/types";
import { tempData } from "@/tempData";

const page = () => {
    const [selectedTab, setSelectedTab] = useState("Post");
    const userAddress = "0x123456789"
    const userName = ""

    const handleFollowUnfollow = () =>{
        console.log("for following and un following")
    }

  return (
    <div className="flex flex-col h-full">
    <p className="text-xl font-bold text-center p-2 border-b-2 border-neutral-700">
      Profile
    </p>
    <div className="flex justify-center mt-4">
      {userAddress && <GenerateAvatar userAddress={userAddress} size={150} />}
    </div>

    <div className="mx-4 mt-4">
      <div className="flex">
        <p className="text-xl font-bold flex-grow">
          {userName == "" ? "userName" : userName}
        </p>
        {/* {currentUserAddress === userAddress ? (
          <button
            className="bg-white text-black font-semibold p-1 px-3 rounded-md"
            onClick={() => setOpenEditModal(true)}
          >
            Edit
          </button>
        ) : ( */}
          <>
            <button
              onClick={() => handleFollowUnfollow()}
              className=" bg-white flex justify-center text-center text-black font-semibold p-1 px-3 rounded-md w-20 h-8"
            >
Follow
            </button>
          </>
        {/* )} */}
      </div>
      <p className="text-neutral-400 ">{userAddress}</p>
      <p className="mt-4">
Please Add a bio
      </p>
    </div>

    <div
      className="flex mx-4 mt-4 gap-4"
      
    >
      <p className="text-neutral-400 ">
        <span className="text-white font-semibold mr-1">
          5
        </span>
        Followers
      </p>
      <p className="text-neutral-400 ">
        <span className="text-white font-semibold mr-1">
          87
        </span>
        Following
      </p>
    </div>

    <div className="mt-4 flex flex-col flex-grow">
      <div className="flex  border-b border-neutral-700">
        <div className="w-full" onClick={() => setSelectedTab("Post")}>
          <button
            className={`mx-auto block px-4 py-2 ${
              selectedTab === "Post" && "border-b-4"
            }`}
          >
            Post
          </button>
        </div>
        <div className="w-full" onClick={() => setSelectedTab("Replies")}>
          <button
            className={`mx-auto block px-4 py-2 ${
              selectedTab === "Replies" && "border-b-4"
            }`}
          >
            Replies
          </button>
        </div>
        <div className="w-full" onClick={() => setSelectedTab("Likes")}>
          <button
            className={`mx-auto block px-4 py-2 ${
              selectedTab === "Likes" && "border-b-4"
            }`}
          >
            Likes
          </button>
        </div>
      </div>
      <div className="flex-grow ">
        {selectedTab === "Post" && (
          <PostDashboard tweetData={tempData} />
        )}
        {selectedTab === "Replies" && (
          <RepliesDashboard tweetData={tempData} />
        )}
        {selectedTab === "Likes" && (
          <LikesDashboard tweetData={tempData} />
        )}
      </div>
    </div>
  </div>
  )
}

export default page