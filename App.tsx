import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import Login from "./src/screens/login";
import Home from "./src/screens/home";
import supabase from "./supabase-service";

export default function App() {
  const [auth, setAuth] = useState(false);

  return <Login />;
}
