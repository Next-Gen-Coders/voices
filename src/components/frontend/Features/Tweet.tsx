import like from "../../../assets/tweet/heart.svg";
import likePink from "../../../assets/tweet/heartPink.svg";
import bookmark from "../../../assets/tweet/bookmark.svg";
import bookmarkFilled from "../../../assets/tweet/bookmark-filled.svg";
import comment from "../../../assets/tweet/comment.svg";
import share from "../../../assets/tweet/share.svg";
import repost from "../../../assets/tweet/repost.svg";
import { useEffect, useState } from "react";

import {
  GenerateAvatar,
  calculateTimeDifference,
  truncateAddress,
} from "../../../utils/helperFunctions";

import {
  TweetData,
  TweetType,
  UserDetailsDefaultValues,
  UserDetailsType,
  UserEngagementDefaultValue,
  UserEngagementType,
} from "../../../utils/types";
import ReTweet from "./ReTweet";
import Quote from "./Quote";
import Reply from "./Reply";
import Image from "next/image";

const Tweet = ({
  authorAddress,
  authorName,
  likedBy,
  quotedTweetIndex,
  quotes,
  replies,
  retweets,
  timestamp,
  tweetIndex,
  tweetMsg,
  tweetType,
  bookmarks,
  repliedTweetIndex,
}: TweetData) => {
  const [currentTweetType, setCurrentTweetType] = useState<TweetType>(
    TweetType.TWEET
  );

  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    UserDetailsDefaultValues
  );

  const [userEngagement, setUserEngagement] = useState<UserEngagementType>(
    UserEngagementDefaultValue
  );

  const handleLike = () => {
    console.log("liked");
  };

  const setIsCommentModalOpen = () => {
    console.log("comment");
  };
  const setIsRepostModalOpen = () => {
    console.log("repost");
  };
  const handleBookMark = () => {
    console.log("bookmark");
  };

  return (
    <div className="p-2">
      {currentTweetType === TweetType.TWEET ? (
        <>
          <div
            className="flex items-center gap-2 mb-2 "
          >
            <div className="h-10 w-10 object-contain">
              <GenerateAvatar userAddress={authorAddress} size={40} />
            </div>
            <div className="flex items-center gap-2">
              {authorName != "" && (
                <>
                  <p>{authorName}</p>
                  <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
                </>
              )}
              <p>{truncateAddress(authorAddress || "")}</p>
              <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
              <p className="text-neutral-500">
                {calculateTimeDifference(Number(timestamp))}
              </p>
            </div>
          </div>
          <p className="mb-2">
            {tweetMsg}
          </p>
        </>
      ) : currentTweetType === TweetType.REPOST ? (
        <>
          <ReTweet
            originalTweet={quotedTweetIndex}
            retweetedBy={authorAddress}
          />
        </>
      ) : currentTweetType === TweetType.QUOTE ? (
        <Quote originalTweet={quotedTweetIndex} quotedTweet={tweetIndex} />
      ) : (
        currentTweetType === TweetType.REPLY && (
          <Reply originalTweet={repliedTweetIndex} replyTweet={tweetIndex} />
        )
      )}

      {/* Post Engagement Buttons */}
      <div className="flex justify-evenly mt-4 pt-2 border-neutral-700 text-neutral-400 relative">
        <div
          onClick={() => handleLike()}
          className="flex items-center gap-1 text-sm"
        >
          <Image
            src={userEngagement.isLiked ? likePink : like}
            alt="like"
            className="h-6 w-6"
          />
          <p className={userEngagement.isLiked ? "text-[#f91880]" : " "}>
            {likedBy && likedBy.length}
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Image
            src={comment}
            alt="comment"
            className="h-6 w-6"
          />
          <p>{replies && replies.length}</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Image src={repost} alt="repost" className="h-6 w-6" />
          <p className={userEngagement.isRetweeted ? "text-[#00b679]" : ""}>
            {quotes?.length + retweets?.length}
          </p>
        </div>

        <Image src={share} alt="share" className="h-6 w-6" />
        <div className="flex items-center gap-1 text-sm">
          <Image
            src={userEngagement.isBookMarked ? bookmarkFilled : bookmark}
            alt="bookmark"
            className="h-5 w-5"
            onClick={() => handleBookMark()}
          />
          <p className={userEngagement.isBookMarked ? "text-[#00b679]" : ""}>
            {bookmarks && bookmarks.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
