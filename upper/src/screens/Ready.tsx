import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Map from '@components/common/Map';
import {useMountEffect} from '@hooks/lifecycle';
import Geolocation from '@react-native-community/geolocation';
import {GlobalStyles} from '@constants/styles';

function Ready(props: ReadyProps) {
  const {navigation} = props;

  const [myLocation, setMyLocation] = useState({
    lat: 41.9930135,
    lng: 128.0671759,
  });

  useMountEffect(() => {
    getGeolocation();
  });

  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        setMyLocation({lat: Number(latitude), lng: Number(longitude)});

        console.log(latitude);
        console.log(longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const startHikingHandler = () => {
    navigation.navigate('Hiking');
  };

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Map myLocation={myLocation} />
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
