import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {logoutAction} from '@redux/slices/authSlice';
import {useDispatch} from 'react-redux';

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

const styles = StyleSheet.create({});
