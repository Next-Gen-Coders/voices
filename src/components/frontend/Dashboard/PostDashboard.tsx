import Tweets from "../Tweets";
import { TweetData } from "@/utils/types";

type PostDashboardType = {
  tweetData: TweetData[];
};

const PostDashboard = ({ tweetData }: PostDashboardType) => {
  return (
    <div className="p-2 flex flex-col gap-2 divide-y divide-neutral-700">
        <Tweets tweetData={tweetData} />
    </div>
  );
};

export default PostDashboard;
