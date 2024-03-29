import React, { useContext, useState } from "react";
import { AuthContext } from "../../navigation/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity, Platform } from "react-native";
import FormButton from "../components/formButton";
import FormInput from "../components/formInput";
import SocialButton from "../components/socialButton";
import { Pink600, Amber300 } from "../utils/Colors";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, googleLogin } = useContext(AuthContext);

  return (
    <View className="items-center pt-28 bg-pink-50 h-full">
      <Image
        source={require("../../assets/cheese01.png")}
        className="w-32 h-32"
      />
      <Text className="text-pink-400 font-bold text-3xl mt-4">
        Social Queso
      </Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock1"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
        txtColor={Amber300}
        bgColor={Pink600}
      />
      <TouchableOpacity
        className="mt-4 mb-2"
        onPress={() => alert("Mi Kathe es la mejor novia")}
      >
        <Text className="text-sm text-amber-700 font-semibold">
          Forgot your password?
        </Text>
      </TouchableOpacity>
      {Platform.OS === "android" ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#DE4D41"
            bgColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            bgColor="#e6eaf4"
          />
        </View>
      ) : null}
      <View className="flex-row mt-4">
        <Text className="text-sm text-amber-700">Don't have an account?</Text>
        <TouchableOpacity
          className="ml-2"
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-sm text-amber-700 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
