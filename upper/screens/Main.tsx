import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function Main(props: MainProps) {
  const {navigation} = props;

  const startHikingHandler = () => {
    navigation.navigate('Hiking');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={startHikingHandler}>
        <Icon name="play" size={32} />
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
