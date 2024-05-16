import { useState } from "react";
import emoji from "../../assets/createTweet/emoji.svg";
import image from "../../assets/createTweet/image.svg";
import gif from "../../assets/createTweet/gif.svg";
import Image from "next/image";

const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState("");

  const tweet = () => {
    console.log(tweetContent);
    setTweetContent("");
  };

  return (
    <div className="m-2 rounded-md border-2 border-neutral-700 p-2">
      <input
        type="text"
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
        className="w-full p-2 bg-neutral-500 rounded-md placeholder:text-white focus:outline-none focus:border-dashed focus:border-b-2 border-black"
        placeholder="Please Create a Tweet"
      />
      <div className="flex justify-between mt-2">
        <div className="flex gap-2 mt-2">
          <Image src={image} className="h-6 w-fit" alt="image" />
          <Image src={gif} className="h-6 w-fit" alt="gif" />
          <Image src={emoji} className="h-6 w-fit" alt="emoji" />
        </div>

        <button
          className="bg-white rounded text-black px-4 py-1 font-semibold"
          onClick={() => tweet()}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreateTweet;