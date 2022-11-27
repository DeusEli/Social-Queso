import React from "react";
import { FlatList } from "react-native-gesture-handler";
import PostCard from "./postCard";

const PostCardList = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard Props={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default PostCardList;
