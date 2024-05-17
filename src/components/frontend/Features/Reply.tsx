import {
  GenerateAvatar,
  calculateTimeDifference,
  truncateAddress,
} from "../../../utils/helperFunctions";
import { TweetDataDefaultValue, TweetData, ReplyType } from "../../../utils/types";
import { useEffect, useState } from "react";
import { useReadContracts } from "wagmi";

const Reply = ({ originalTweet, replyTweet }: ReplyType) => {
  const currentLocation = location.pathname;
  const [isOriginalTweetVisible, setIsOriginalTweetVisible] = useState(true);
  const [originalTweetData, setOriginalTweetData] = useState<TweetData>(
    TweetDataDefaultValue
  );
  const [currentTweetData, setCurrentTweetData] = useState<TweetData>(
    TweetDataDefaultValue
  );


  return (
    <div className="relative">
      {isOriginalTweetVisible === false && (
        <div className="flex z-50 relative">
          <div className="m-1">
            <GenerateAvatar
              userAddress={originalTweetData.authorAddress}
              size={40}
            />
          </div>
          <div className="gap-2">
            <div className="flex items-center gap-2">
              {originalTweetData.authorName !== "" && (
                <>
                  <p>{originalTweetData.authorName}</p>
                  <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
                </>
              )}
              <p>{truncateAddress(originalTweetData.authorAddress)}</p>
              <span className="h-1 w-1 bg-neutral-400 rounded-full"></span>
              <p className="text-neutral-500">
                {calculateTimeDifference(Number(originalTweetData.timestamp))}
              </p>
            </div>
            <p
              className="mt-2"
            >
              {originalTweetData.tweetMsg}
            </p>
          </div>
        </div>
      )}
      <span className="absolute h-[70%]  border border-neutral-700 top-1/2 -translate-y-1/2 left-[22px] "></span>
      <div
        className="flex z-50 mt-2  relative"
      >
        <div className="m-1">
          <GenerateAvatar
            userAddress={currentTweetData.authorAddress}
            size={40}
          />
        </div>
        <div className=" gap-2">
          <div className="flex items-center gap-2">
            {currentTweetData.authorName !== "" && (
              <>
                <p>{currentTweetData.authorName}</p>
                <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
              </>
            )}
            <p>{truncateAddress(currentTweetData.authorAddress || "")}</p>
            <span className="h-1 w-1 bg-neutral-400 rounded-full"></span>
            <p className="text-neutral-500 ">
              {calculateTimeDifference(Number(currentTweetData.timestamp))}
            </p>
          </div>
          <p
            className="mt-2"
          >
            {currentTweetData.tweetMsg}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reply;
