import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '@components/navigation/Tabs';
import {GlobalStyles} from '@constants/styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar />
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
});

export default App;
