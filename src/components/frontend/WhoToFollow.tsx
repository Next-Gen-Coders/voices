import TopUsers from "./TopUsers";

const WhoToFollow = () => {
  return (
    <div className="border-2 rounded-md border-neutral-700 p-2">
      <p className="text-xl font-semibold mb-4">Who to follow</p>
      <div className="flex flex-col gap-4">
        <TopUsers />
        <TopUsers />
        <TopUsers />
      </div>
    </div>
  );
};

export default WhoToFollow;