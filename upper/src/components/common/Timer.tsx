import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text>00:00:00</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {},
});
