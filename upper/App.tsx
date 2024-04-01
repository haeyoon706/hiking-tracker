import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Hiking from './screens/Hiking';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar />
      <Hiking />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
