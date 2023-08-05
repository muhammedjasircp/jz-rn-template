import React from "react";
import { Button, Text, View } from "react-native";

import { useDispatch } from "react-redux";

import { loginAction } from "@redux/slices/authSlice";

const AuthScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>AuthScreen</Text>
      <Button title="Login" onPress={() => dispatch(loginAction())} />
    </View>
  );
};

export default AuthScreen;
