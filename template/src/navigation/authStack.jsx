import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { screenOptions } from "@navigation/appNavigator";
import AuthScreen from "@screens/auth";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen component={AuthScreen} name="Counter" />
  </Stack.Navigator>
);
