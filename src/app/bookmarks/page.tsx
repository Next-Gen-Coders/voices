
import Tweets from "../../components/frontend/Tweets";
import { tempData } from "@/tempData";

const page = () => {
  return (
    <div>
      <p className="text-xl font-bold text-center p-2 border-b-2 border-neutral-700">
        Bookmarks
      </p>

      <div className="p-2 flex flex-col gap-2 divide-y divide-neutral-700">
          <Tweets tweetData={tempData} />
      </div>
    </div>
  )
}

export default page