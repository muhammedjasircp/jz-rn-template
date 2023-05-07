import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useSelector} from 'react-redux';

import {MainNavigator} from '@navigation/appStack';
import {AuthNavigator} from '@navigation/authStack';

export const screenOptions = {
  headerShown: false,
  animation: 'none',
};

export const AppNavigator = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  return (
    <SafeAreaProvider>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </SafeAreaProvider>
  );
};
