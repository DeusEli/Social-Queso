import {
  Button,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-stone-900">
      <Text className="text-2xl font-bold text-stone-300">Iniciar sesión</Text>
      <View className="w-3/4">
        <TextInput
          className="border border-gray-400 rounded-md p-2 my-2 bg-slate-400 text-stone-700"
          placeholder="Email"
        />
        <TextInput
          className="border border-gray-400 rounded-md p-2 my-2 bg-slate-400 text-stone-700"
          placeholder="Password"
        />
        <Pressable
          className="flex bg-slate-300 rounded-md my-2 py-2 items-center"
          onPress={() => console.log("Iniciar sesión")}
        >
          <Text className="text-stone-700">Iniciar sesión</Text>
        </Pressable>
        <View className="flex flex-row justify-center">
          <Text className="text-stone-300 mr-1">¿No tienes una cuenta?</Text>
          <Pressable
            className="flex items-center"
            onPress={() => console.log("Crear una cuenta")}
          >
            <Text className="text-blue-500">Crea una ahora</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
