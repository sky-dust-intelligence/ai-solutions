"use client";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SingleBlog from "./SingleBlog";

const BlogGridContainer = ({ blogs }) => {
  const itemToLoad = 5;
  const [hasMore, setHasMore] = useState(true);
  const [showBlogs, setShowBlogs] = useState(blogs?.slice(0, itemToLoad));

  const fetchMoreData = () => {
    setTimeout(() => {
      setShowBlogs(blogs.slice(0, showBlogs.length + itemToLoad));
    }, 1500);
  };
  useEffect(() => {
    if (
      showBlogs?.length > blogs?.length ||
      showBlogs?.length === blogs?.length
    ) {
      setHasMore(false);
    }
    if (showBlogs?.length < blogs?.length) {
      setHasMore(true);
    }
  }, [showBlogs?.length, blogs?.length]);
  return (
    <>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <InfiniteScroll
          dataLength={showBlogs.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="w-full px-4 text-white col-span-full flex items-center justify-center">
              Loading...
            </div>
          }
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12.5 gap-x-7.5"
        >
          {showBlogs?.length > 0 &&
            showBlogs?.map((blog) => <SingleBlog key={blog._id} blog={blog} />)}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default BlogGridContainer;
