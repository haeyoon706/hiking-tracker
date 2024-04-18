import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Hiking() {
  return (
    <View style={styles.container}>
      <Text>Hiking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hiking;
