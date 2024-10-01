import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Result() {
  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
