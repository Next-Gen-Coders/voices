
import {
  GenerateAvatar,
  calculateTimeDifference,
  truncateAddress,
} from "../../../utils/helperFunctions";
import { TweetDataDefaultValue, TweetData, QuoteType } from "../../../utils/types";
import { useEffect, useState } from "react";


const Quote = ({ originalTweet, quotedTweet }: QuoteType) => {
  const [originalTweetData, setOriginalTweetData] = useState<TweetData>(
    TweetDataDefaultValue
  );

  const [currentTweetData, setCurrentTweetData] = useState<TweetData>(
    TweetDataDefaultValue
  );

 
  return (
    <>
      <div
        className="flex items-center gap-2 mb-2 "
      >
        <div className="h-10 w-10 object-contain">
          <GenerateAvatar
            userAddress={currentTweetData.authorAddress}
            size={40}
          />
        </div>
        <div className="flex items-center gap-2">
          {currentTweetData.authorName !== "" && (
            <>
              <p>{currentTweetData.authorName}</p>
              <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
            </>
          )}
          <p>{truncateAddress(currentTweetData.authorAddress || "")}</p>
          <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
          <p className="text-neutral-500">
            {calculateTimeDifference(Number(currentTweetData.timestamp))}
          </p>
        </div>
      </div>
      <p
        className="mb-2"
      >
        {currentTweetData.tweetMsg}
      </p>

      <div className="border-2 border-neutral-700 mx-auto w-[90%] rounded-md">
        <div className=" p-2">
          <div className="flex items-center gap-2">
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
              <p>{truncateAddress(originalTweetData.authorAddress)}</p>
              <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
              <p className="text-neutral-500">
                {calculateTimeDifference(Number(originalTweetData.timestamp))}
              </p>
            </div>
          </div>
          <p className="mt-2">{originalTweetData.tweetMsg}</p>
        </div>
      </div>
    </>
  );
};

export default Quote;
