// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screenOptions} from '@navigation/appNavigator';
import AuthScreen from '@screens/auth';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Counter" component={AuthScreen} />
    </Stack.Navigator>
  );
};
