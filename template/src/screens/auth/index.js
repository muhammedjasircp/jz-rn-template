import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {loginAction} from '@redux/slices/authSlice';

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

const styles = StyleSheet.create({});
