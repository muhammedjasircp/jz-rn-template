// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from '@screens/app/Counter';
import Home from '@screens/app/Home';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Counter" component={Counter} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
