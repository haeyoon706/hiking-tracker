import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

function Main(props: MainProps) {
  const {navigation} = props;

  const startHikingHandler = () => {
    navigation.navigate('Hiking');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={startHikingHandler}>
        <Text>시작 !</Text>
      </Pressable>
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

export default Main;

interface MainProps {
  navigation: NavigationProp<ParamListBase>;
}
