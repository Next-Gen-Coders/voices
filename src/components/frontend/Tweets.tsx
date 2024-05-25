import { useEffect, useState } from "react";
import { TweetData, TweetDataDefaultValue } from "../../utils/types";
import Tweet from "./Features/Tweet";

type TweetsProp = {
  tweetData: TweetData[];
  tweetIndices?: number[];
};
const Tweets = ({ tweetData, tweetIndices }: TweetsProp) => {
  const [tweetsArray, setTweetsArray] = useState<TweetData[]>([
    TweetDataDefaultValue,
  ]);

  return (
    <>
      {tweetIndices && tweetIndices.length > 0 ? (
        <>
          <div className="divide-y-2 divide-opacity-80 divide-neutral-700">
            {tweetsArray
              .map((tweet, index) => {
                return (
                  <div key={index}>
                    <Tweet
                    key={index}
                      authorAddress={tweet.authorAddress}
                      authorName={tweet.authorName}
                      timestamp={tweet.timestamp}
                      tweetMsg={tweet.tweetMsg}
                      tweetIndex={tweet.tweetIndex}
                      likedBy={tweet.likedBy}
                      replies={tweet.replies}
                      quotedTweetIndex={tweet.quotedTweetIndex}
                      quotes={tweet.quotes}
                      retweets={tweet.retweets}
                      tweetType={tweet.tweetType}
                      bookmarks={tweet.bookmarks}
                      repliedTweetIndex={tweet.repliedTweetIndex}
                    />
                  </div>
                );
              })
              .reverse()}
          </div>
        </>
      ) : (
        <>
          <div className="divide-y-2 divide-opacity-80 divide-neutral-700">
            {tweetData
              .map((tweet) => {
                return (
                  <>
                    <Tweet
                      authorAddress={tweet.authorAddress}
                      authorName={tweet.authorName}
                      timestamp={tweet.timestamp}
                      tweetMsg={tweet.tweetMsg}
                      tweetIndex={tweet.tweetIndex}
                      likedBy={tweet.likedBy}
                      replies={tweet.replies}
                      quotedTweetIndex={tweet.quotedTweetIndex}
                      quotes={tweet.quotes}
                      retweets={tweet.retweets}
                      tweetType={tweet.tweetType}
                      bookmarks={tweet.bookmarks}
                      repliedTweetIndex={tweet.repliedTweetIndex}
                    />
                  </>
                );
              })
              .reverse()}
          </div>
        </>
      )}
    </>
  );
};

export default Tweets;
