import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import Providers from "./navigation";

export default function App() {
  const [auth, setAuth] = useState(false);
  return <Providers />;
}
