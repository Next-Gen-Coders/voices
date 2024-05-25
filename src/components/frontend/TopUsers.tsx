"use client"
import { GenerateAvatar, truncateAddress } from "../../utils/helperFunctions";


const TopUsers = () => {
  const userAddress = "0x123456789"
  const userName = "sandeep"

  const handleFollowUnfollow = () => {
    console.log("followed")
  };

  return (
    <div className="flex items-center justify-between border-2 border-neutral-700 rounded-md gap-2 p-2 ">
      <div
        className="flex gap-2"
      >
        <div>
          <GenerateAvatar userAddress={(userAddress)} size={40} />
        </div>
        <div className="flex-1">
          <p className="whitespace-nowrap text-ellipsis overflow-hidden md:max-w-[150px]">
            {userName}
          </p>
          <p className="text-sm text-neutral-400 whitespace-nowrap text-ellipsis overflow-hidden md:max-w-[150px]">
            {truncateAddress(String(userAddress))}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleFollowUnfollow()}
        className=" bg-white font-semibold text-black px-3 p-1 rounded-lg z-10"
      >

            <p>Follow
            </p>
      </button>
    </div>
  );
};

export default TopUsers;