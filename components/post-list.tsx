"use client";

import { useEffect } from "react";
import { PostItem } from "./post-item";
import useLazyLoad from "@/hooks/useLazyLoad";

interface Post {
  title: string;
  price: number;
  image: string;
  location: string;
}

type PostsProps = {
  posts: Post[];
};

export function PostList({ posts }: PostsProps) {
  useEffect(() => {
    console.log('Posts changed:', posts);
  }, [posts]);
  const { displayedItems, loadMore, showLess, hasMore, canShowLess } = useLazyLoad(posts);
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  my-10 lg:grid-cols-3 gap-8">
        {displayedItems.map((post: Post) => (
          <PostItem key={post.title} post={post} />
        ))}
      </div>
      <div className="flex justify-center">
        {hasMore && (
          <button onClick={loadMore} className="bg-blue-500 btn-secondary text-white px-4 py-2 rounded-md">
            Show Next
          </button>
        )}
        {canShowLess && (
          <button onClick={showLess} className="bg-blue-500 btn-secondary text-white px-4 py-2 rounded-md">
            Show Less
          </button>
        )}
      </div>
    </>
  );
}
