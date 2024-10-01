import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timer from '@components/common/Timer';

const HikingWrap = () => {
  return (
    <View style={styles.container}>
      <Text>Hiking</Text>
      <Timer />
      <Text>Distance</Text>
      <Text>Face</Text>
      <Text>Altitude</Text>
    </View>
  );
};

export default HikingWrap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
