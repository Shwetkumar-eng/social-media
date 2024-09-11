import React, { useEffect, useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";
import Post from "./Post";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, [addInitialPosts]);

  return (
    <>
      {postList.length === 0 && <Message />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
