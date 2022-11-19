import React, { useContext, useState } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { View, Text } from "react-native";
import FormButton from "../components/formButton";
import { Red500, Amber100 } from "../utils/Colors";
import PostCard from "../components/postCard";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View className="h-full w-full items-center justify-start bg-pink-50">
      <ScrollView className="w-full">
        <PostCard
          pfPicture={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          pfName={"Elí"}
          pfLastname={"Valencia"}
          timeAgo={10}
          text={
            "I liked this forest so much that I decided to take a picture of it"
          }
          image={
            "https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          }
          // image={
          //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5Azv8erp-FKyJyj0Bs-pfviq0UlMXiWKcg&usqp=CAU"
          // }
        />
        <PostCard
          pfPicture={
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          pfName={"Kathe"}
          pfLastname={"Jaco"}
          timeAgo={19}
          text={"I think I look good in this picture, what do you think?"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5Azv8erp-FKyJyj0Bs-pfviq0UlMXiWKcg&usqp=CAU"
          }
        />
        <PostCard
          pfPicture={
            "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          pfName={"Diego"}
          pfLastname={"Valencia"}
          timeAgo={22}
          text={
            "That was a great day, I went to the beach with my friends and we had a lot of fun"
          }
          image={
            "https://images.pexels.com/photos/427900/pexels-photo-427900.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          // image={
          //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5Azv8erp-FKyJyj0Bs-pfviq0UlMXiWKcg&usqp=CAU"
          // }
        />
      </ScrollView>
    </View>
  );
};

export default Home;
