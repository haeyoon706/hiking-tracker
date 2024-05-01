import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

function More() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>More</Text>
    </ScrollView>
  );
}

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
