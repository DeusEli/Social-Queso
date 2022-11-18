import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  OnboardingScreen,
} from "../src/screens";

const AppStack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = "OnBoarding";
  } else {
    routeName = "Login";
  }

  return (
    <AppStack.Navigator initialRouteName={routeName}>
      <AppStack.Screen name="OnBoarding" component={OnboardingScreen} />
      <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AuthStack;
