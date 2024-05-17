
import {
  GenerateAvatar,
  calculateTimeDifference,
  truncateAddress,
} from "../../../utils/helperFunctions";
import {
  RetweetType,
  TweetDataDefaultValue,
  TweetData,
  UserDetailsDefaultValues,
  UserDetailsType,
} from "../../../utils/types";
import { useEffect, useState } from "react";
import repostIcon from "../../../assets/tweet/repost.svg";

const ReTweet = ({ originalTweet, retweetedBy }: RetweetType) => {

  const [originalTweetData, setOriginalTweetData] = useState<TweetData>(
    TweetDataDefaultValue
  );

  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    UserDetailsDefaultValues
  );

  return (
    <>
      <div className="flex gap-1 m-1">
        <img src={repostIcon} className="h-4" />
        <p className="text-sm flex justify-center items-center gap-2 text-neutral-400 font-semibold">
          {userDetails.userName !== "" && (
            <>
              <p>{userDetails.userName}</p>
              <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
            </>
          )}
          {truncateAddress(userDetails.userAddress)} reposted
        </p>
      </div>

      <div
        className="flex items-center gap-2 mb-2 "
      >
        <div className="h-10 w-10 object-contain">
          <GenerateAvatar
            userAddress={originalTweetData.authorAddress}
            size={40}
          />
        </div>
        <div className="flex items-center gap-2">
          {originalTweetData.authorName !== "" && (
            <>
              <p>{originalTweetData.authorName}</p>
              <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
            </>
          )}
          <p>{truncateAddress(originalTweetData.authorAddress || "")}</p>
          <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
          <p className="text-neutral-500">
            {calculateTimeDifference(Number(originalTweetData.timestamp))}
          </p>
        </div>
      </div>
      <p
        className="mb-2"
      >
        {originalTweetData.tweetMsg}
      </p>
    </>
  );
};

export default ReTweet;
