import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Map from '@components/common/Map';
import {GlobalStyles} from '@constants/styles';
import useGeolocation from '@hooks/useGeolocation';

function Ready(props: ReadyProps) {
  const {navigation} = props;

  const location = useGeolocation();

  const startHikingHandler = () => {
    navigation.navigate('Hiking');
  };

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Map myLocation={location.coordinates} />
      </View>
      <View style={styles.info}>
        <Pressable onPress={startHikingHandler} style={styles.ready}>
          <Icon name="play" size={40} color={GlobalStyles.colors.background} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1.5,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ready: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: GlobalStyles.colors.mainOpacityDeep,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
});

export default Ready;

interface ReadyProps {
  navigation: NavigationProp<ParamListBase>;
}
