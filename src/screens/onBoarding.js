import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const OnBoarding = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              className="w-56 h-56"
              source={require("../../assets/friends.png")}
            />
          ),
          title: "Connect with friends",
          subtitle: "A new way to connect with the people you love.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              className="w-56 h-56"
              source={require("../../assets/sharePeople.png")}
            />
          ),
          title: "Share your favorites",
          subtitle: "Share your thoughts with similar kind of people.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              className="w-56 h-56"
              source={require("../../assets/shareLove.png")}
            />
          ),
          title: "Become the star",
          subtitle: "Get loved for what you are.",
        },
      ]}
      onDone={() => navigation.navigate("Login")}
      onSkip={() => navigation.navigate("Login")}
    />
  );
};

export default OnBoarding;
