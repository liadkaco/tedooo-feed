import { useEffect, useState } from "react";
import { PostProps } from "../../Utils/Interface";
import { Profile, Description, Images, Data, Actions } from "./Sections";

const Post: React.FC<PostProps> = ({
  username,
  avatar,
  date,
  shopName,
  images,
  text,
  likes,
  comments,
  didLike,
}) => {
  const [likesCounter, setLikesCounter] = useState<number>(0);
  const [userDidLike, setuserDidLike] = useState<boolean>(didLike);
  
  useEffect(() => {
    setLikesCounter(likes);
  }, [likes]);

  const likesHandler = () => {
    if (userDidLike) {
      setLikesCounter(likesCounter - 1);
      setuserDidLike(false);
    } else {
      setLikesCounter(likesCounter + 1);
      setuserDidLike(true);
    }
  };
  return (
    <div className="flex flex-col w-[1120px]  min-h-[753px] max-h-[753px] h-[753px] bg-white rounded-[4px] pt-8 text-black">
      <div className="flex flex-col justify-center gap-4">
        <Profile
          avatar={avatar}
          username={username}
          shopName={shopName}
          date={date}
        />
        <Description text={text} />
        <Images images={images} />
        <Data likes={likesCounter} comments={comments} />
        <Actions userDidLike={userDidLike} likesHandler={likesHandler} />
      </div>
    </div>
  );
};

export default Post;
