import React from "react";
import { Button, Text, View } from "react-native";

import { useDispatch } from "react-redux";

import { logoutAction } from "@redux/slices/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => dispatch(logoutAction())} />
    </View>
  );
};

export default Home;
