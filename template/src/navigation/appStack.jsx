import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { screenOptions } from "@navigation/appNavigator";
import Counter from "@screens/app/Counter";
import Home from "@screens/app/Home";

const Stack = createNativeStackNavigator();

export const MainNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen component={Counter} name="Counter" />
    <Stack.Screen component={Home} name="Home" />
  </Stack.Navigator>
);
