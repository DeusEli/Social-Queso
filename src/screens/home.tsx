import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { HomeScreen, ProfileScreen } from ".";

const Home = () => {
  const DrawerNavigator = createDrawerNavigator();

  return (
    // <DrawerNavigator.Navigator>
    //   <DrawerNavigator.Screen name="Home" component={HomeScreen} />
    //   <DrawerNavigator.Screen name="Profile" component={ProfileScreen} />
    // </DrawerNavigator.Navigator>
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
