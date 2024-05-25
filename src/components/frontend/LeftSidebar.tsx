"use client"
import React, { useState } from "react";
import logo from "../../assets/navbar/logo.svg";
import home from "../../assets/navbar/home.svg";
import bookmarkWhite from "../../assets/navbar/bookmark.svg";
import profile from "../../assets/navbar/profile.svg";
import magnify from "../../assets/navbar/magnify.svg";
import logouticon from "../../assets/navbar/logout.svg";
import message from "../../assets/navbar/message.svg"
import Image from "next/image";

const LeftSidebar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const handleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  const userAddress = "0x123456789"; 

  const links = [
    { to: "/", label: "Home", icon: home },
    { to: "/messages", label: "Messages", icon: message },
    { to: "/bookmarks", label: "Bookmarks", icon: bookmarkWhite },
    { to: `/profile/${userAddress}`, label: "Profile", icon: profile },
  ];

  const logout = () => {
    console.log("logout");
  };

  return (
    <div className="h-screen min-w-[80px] lg:min-w-[200px] pr-2">
      <div className="h-screen flex flex-col justify-between">
        <div>
          <a href="/" className="p-2 block my-4 text-xl text-center font-semibold">
            <Image src={logo} className="mx-auto" alt="Logo" width={40} height={40} />
          </a>

          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                href={link.to}
                key={link.to}
                className={`flex gap-2 p-2 text-xl items-center justify-center lg:justify-start`}
              >
                <Image src={link.icon} alt={link.label} width={24} height={24} />
                <p className="hidden lg:block">{link.label}</p>
              </a>
            ))}
          </div>
          <a
            href="/explore"
            className={` lg:hidden flex gap-2 p-2 text-xl items-center justify-center lg:justify-start`}
          >
            <Image src={magnify} alt="search" width={28} height={28} />
          </a>

          <button
            onClick={() => setIsPostModalOpen(true)}
            className="bg-white w-full p-2 lg:p-1 lg:text-xl text-lg rounded-md font-semibold text-black mt-2"
          >
            Post
          </button>
        </div>

        <div>
          {showLogout && (
            <div className="flex items-center p-2 gap-2 " onClick={logout}>
              <Image
                src={logouticon}
                alt="logout"
                width={24}
                height={24}
                className="h-6 w-6 mx-auto lg:mx-0"
              />
              <p className="hidden lg:block text-xl ">Logout</p>
            </div>
          )}

          <div
            onClick={handleShowLogout}
            className="flex flex-col lg:flex-row gap-2 items-center justify-center border-2 border-neutral-700 rounded-md p-2 mb-6"
          >
            <div className="flex-grow lg:block hidden">
              <p className="font-semibold">username</p>
              <div className="flex">
                <p className="text-sm flex-grow">
                  {userAddress}
                </p>
                <div className="flex gap-[3px] px-1 items-center">
                  <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
                  <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
                  <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-[3px] px-1 items-center lg:hidden">
              <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
              <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
              <div className="h-[3px] w-[3px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LeftSidebar;