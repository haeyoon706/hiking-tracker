import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Map from '@components/common/Map';
import {GlobalStyles} from '@constants/styles';
import useGeolocation from '@hooks/useGeolocation';
import HikingWrap from '@components/hiking/Wrap';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

function Main(props: MainProps) {
  const {navigation} = props;

  const {location} = useGeolocation();

  const [status, setStatus] = useState('ready');

  const onButtonHandler = () => {
    switch (status) {
      case 'ready':
        return setStatus('hiking');
      case 'hiking':
        return setStatus('pause');
      default:
        return null;
    }
  };

  const onLongButtonHandler = () => {
    if (status === 'pause') {
      navigation.navigate('Result');
    }
  };

  const getScreen = () => {
    switch (status) {
      case 'ready':
        return <Map myLocation={location} />;
      case 'hiking':
      case 'pause':
        return <HikingWrap />;
    }
  };

  const getIcon = () => {
    switch (status) {
      case 'ready':
        return 'play';
      case 'hiking':
        return 'pause';
      case 'pause':
        return 'square';
      default:
        return 'play';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>{getScreen()}</View>
      <View style={styles.btnWrap}>
        <Pressable
          onPress={onButtonHandler}
          style={styles.btn}
          onLongPress={onLongButtonHandler}
          delayLongPress={2000}>
          <Icon
            name={getIcon()}
            size={40}
            color={GlobalStyles.colors.background}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1.5,
  },
  btnWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: GlobalStyles.colors.mainOpacityDeep,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
});

export default Main;

interface MainProps {
  navigation: NavigationProp<ParamListBase>;
}
