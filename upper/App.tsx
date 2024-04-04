import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Hiking from './screens/Hiking';
import Main from './screens/Main';
import List from './screens/List';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalStyles} from './constants/styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Hiking" component={Hiking} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  const getTabIcon = (name: string, color: string, size: number) => {
    return <Icon name={name} size={size} color={color} />;
  };

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            headerStyle: {backgroundColor: GlobalStyles.colors.background},
            headerTintColor: GlobalStyles.colors.main,
            tabBarStyle: {backgroundColor: GlobalStyles.colors.background},
            tabBarActiveTintColor: GlobalStyles.colors.main,
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: '홈',
              tabBarIcon: ({color, size}) => getTabIcon('prism', color, size),
            }}
          />
          <Tab.Screen
            name="List"
            component={List}
            options={{
              tabBarLabel: '목록',
              tabBarIcon: ({color, size}) =>
                getTabIcon('cellular', color, size),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
