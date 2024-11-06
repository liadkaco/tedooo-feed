import "./App.css";
import Home from "./pages/Home/Home";
import httpAgent from "./Utils/httpAgent";
import { PostProps } from "./Utils/Interface";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || loading || !hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        fetchPosts();
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading, hasMore]);

  const fetchPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await httpAgent.get(`/hw/feed.json?skip=${skip}`);
      setPosts((prev) => [...prev, ...response.data.data]);
      setHasMore(response.data.hasMore);
      setSkip((prev) => prev + 6);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} />
      <div
        className="flex flex-col items-center px-40 w-[100dvw] pt-[90px] h-[100vh] overflow-y-scroll"
        ref={containerRef}
      >
        <Home posts={posts} />
        {loading && <div className="absolute bottom-0"><span className="loader"></span></div>}
        {!hasMore && <div>No more posts to load</div>}
      </div>
    </>
  );
}

export default App;
