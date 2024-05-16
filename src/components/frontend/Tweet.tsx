import like from "../../assets/tweet/heart.svg";
import bookmark from "../../assets/tweet/bookmark.svg";
import comment from "../../assets/tweet/comment.svg";
import share from "../../assets/tweet/share.svg";
import repost from "../../assets/tweet/repost.svg";

import { GenerateAvatar, truncateAddress } from "../../utils/helperFunctions";

import Image from "next/image";

const Tweet = () => {
  const authorAddress = "0x123456789";
  const authorName: string = "shakti";

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
      <>
        <div className="flex items-center gap-2 mb-2 ">
          <div className="h-10 w-10 object-contain">
            <GenerateAvatar userAddress={authorAddress} size={40} />
          </div>
          <div className="flex items-center gap-2">
            {authorName !== "" && (
              <>
                <p>{authorName}</p>
                <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
              </>
            )}
            <p>{truncateAddress(authorAddress || "")}</p>
            <span className="h-1 w-1 bg-neutral-300 rounded-full"></span>
            <p className="text-neutral-500">1.00</p>
          </div>
        </div>
        <p className="mb-2">
          ff asdf ad f asdf ad f sdf asd fa df asdf asd f asdf as fas df df sd f
          asdf as fa s f
        </p>

        <div className="flex justify-evenly mt-4 pt-2 border-neutral-700 text-neutral-400 relative">
          <div
            onClick={() => handleLike()}
            className="flex items-center gap-1 text-sm"
          >
            <Image src={like} alt="like" className="h-6 w-6" />
            <p className="text-[#f91880]">1</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Image
              src={comment}
              onClick={() => {
                setIsCommentModalOpen();
              }}
              alt="comment"
              className="h-6 w-6"
            />
            <p>0</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Image
              onClick={() => {
                setIsRepostModalOpen();
              }}
              src={repost}
              alt="repost"
              className="h-6 w-6"
            />
            <p className={"text-[#00b679]"}>
              2
            </p>
          </div>

          <Image src={share} alt="share" className="h-6 w-6" />
          <div className="flex items-center gap-1 text-sm">
            <Image
              src={bookmark}
              alt="bookmark"
              className="h-5 w-5"
              onClick={() => handleBookMark()}
            />
            <p className="text-[#00b679]">
              5
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Tweet;