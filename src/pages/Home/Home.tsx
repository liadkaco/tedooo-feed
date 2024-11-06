import React from "react";
import Post from "../../components/Post/Post";
import { PostProps } from "../../Utils/Interface";

interface HomeProps {
  posts: PostProps[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-4">
      {posts &&
        posts.map((post) => (
          <div>
            <Post
              key={post.id}
              id={post.id}
              userId={post.userId}
              username={post.username}
              avatar={post.avatar}
              date={post.date}
              shopName={post.shopName}
              images={post.images}
              text={post.text}
              likes={post.likes}
              comments={post.comments}
              didLike={post.didLike}
            />
          </div>
        ))}
    </div>
  );
};

export default Home;
