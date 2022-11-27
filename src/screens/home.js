import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import PostCardList from "../components/postCardList";

const Posts = [
  {
    id: 1,
    pfPicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pfName: "Elí",
    pfLastname: "Valencia",
    timeAgo: 10,
    text: "I liked this forest so much that I decided to take a picture of it",
    image:
      "https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGlt",
    likes: 10,
    comments: 2,
  },
  {
    id: 2,
    pfPicture:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pfName: "Kathe",
    pfLastname: "Jaco",
    timeAgo: 19,
    text: "I liked this forest so much that I decided to take a picture of it",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5Azv8erp-FKyJyj0Bs-pfviq0UlMXiWKcg&usqp=CAU",
    likes: 200,
    comments: 36,
  },
  {
    id: 3,
    pfPicture:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pfName: "Diego",
    pfLastname: "Valencia",
    timeAgo: 22,
    text: "I liked this forest so much that I decided to take a picture of it",
    image:
      "https://images.pexels.com/photos/427900/pexels-photo-427900.jpeg?auto=compress&cs=tinysrgb&w=1600",
    likes: 1,
    comments: 0,
  },
  {
    id: 4,
    pfPicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pfName: "Elí",
    pfLastname: "Valencia",
    timeAgo: 10,
    text: "I liked this forest so much that I decided to take a picture of it",
    image: "",
    likes: 0,
    comments: 0,
  },
];

const Home = () => {
  return (
    <View className="h-full w-full items-center justify-start bg-pink-50">
      <PostCardList posts={Posts} />
    </View>
  );
};

export default Home;
