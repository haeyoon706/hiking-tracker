import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '@constants/styles';

const Map = (props: MapProps) => {
  const {myLocation} = props;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: myLocation.lat,
          longitude: myLocation.lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: myLocation.lat, longitude: myLocation.lng}}>
          <View style={styles.markerWrap}>
            <View style={styles.marker}>
              <Icon
                name="location-outline"
                size={16}
                color={GlobalStyles.colors.background}
              />
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;

interface MapProps {
  myLocation: {
    lat: number;
    lng: number;
  };
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerWrap: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: GlobalStyles.colors.mainOpacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: GlobalStyles.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: GlobalStyles.colors.background,
    borderWidth: 1,
  },
});
