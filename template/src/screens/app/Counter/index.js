import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {decrement, increment} from '@slices/sampleSlice';

const Counter = () => {
  const navigation = useNavigation();
  const count = useSelector(state => state.sample.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Button title={'increment'} onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title={'decrement'} onPress={() => dispatch(decrement())} />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
