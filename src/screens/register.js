import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import FormButton from "../components/formButton";
import FormInput from "../components/formInput";
import SocialButton from "../components/socialButton";
import { AuthContext } from "../../navigation/AuthProvider";
import { Pink600, Amber300 } from "../utils/Colors";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const validatePassword = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    } else {
      signup(email, password);
    }
  };

  const { signup } = useContext(AuthContext);

  return (
    <View className="items-center pt-18 bg-pink-50 h-full">
      <Text className="text-pink-400 font-bold text-3xl mt-4">
        Create an account
      </Text>
      <FormInput
        labelValue={firstName}
        onChangeText={(userFirstName) => setFirstName(userFirstName)}
        placeholderText="First Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={lastName}
        onChangeText={(userLastName) => setLastName(userLastName)}
        placeholderText="Last Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      />
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
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userConfirmPassword) =>
          setConfirmPassword(userConfirmPassword)
        }
        placeholderText="Confirm password"
        iconType="lock1"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        // onPress={() => signup(email, password)}
        onPress={() => validatePassword()}
        className="mb-2"
        txtColor={Amber300}
        bgColor={Pink600}
      />
      {Platform.OS === "android" ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#DE4D41"
            bgColor="#f5e7ea"
          />
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            bgColor="#e6eaf4"
          />
        </View>
      ) : null}
      <View className="flex-row mt-4">
        <Text className="text-sm text-amber-700">Already have an account?</Text>
        <TouchableOpacity
          className="ml-2"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-sm text-amber-700 font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
