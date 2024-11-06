import { BiSolidLike } from "react-icons/bi";

interface DataProps {
  likes: number;
  comments: number;
}

export const Data: React.FC<DataProps> = ({ likes, comments }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 px-8 text-[#737877]">
      <div className="flex flex-row items-center gap-4">
        <div className="flex items-center justify-center h-[18px] w-[18px] rounded-full bg-gradient-to-br from-teal-400 via-green-500 to-green-700">
          <BiSolidLike size={13} color="white" />
        </div>
        <p className="text-[14px] font-normal">{likes} likes</p>
      </div>
      <p className="text-[14px] font-normal">{comments} comments</p>
    </div>
  );
};
