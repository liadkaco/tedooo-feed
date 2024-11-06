import { BiLike, BiComment } from "react-icons/bi";

interface ActionsProps {
  userDidLike: boolean;
  likesHandler: () => void;
}

export const Actions: React.FC<ActionsProps> = ({
  userDidLike,
  likesHandler,
}) => {
  return (
    <div className="flex flex-row h-[40px] w-[94.2%] items-center justify-center gap-4 mx-8  px-[17rem] border-t-2">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-3 cursor-pointer" onClick={() => likesHandler()}>
          <BiLike size={24} color={userDidLike ? "blue" : "#737877"} />{" "}
          <p className={`${userDidLike ? "text-blue-600" : "text-black"}`}>
            Like
          </p>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer">
          <BiComment size={24} color="#737877" /> <p>Comment</p>
        </div>
      </div>
    </div>
  );
};
