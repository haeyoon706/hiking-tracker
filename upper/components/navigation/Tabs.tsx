import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalStyles} from '../../constants/styles';
import Main from '../../screens/Main';
import List from '../../screens/List';
import Hiking from '../../screens/Hiking';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Hiking" component={Hiking} />
    </Stack.Navigator>
  );
};

const tabList = [
  {name: 'Home', comppnent: Home, icon: 'home-outline'},
  {name: 'Badge', comppnent: Home, icon: 'ribbon-outline'},
  {name: 'Ready', comppnent: Home, icon: 'prism-outline'},
  {name: 'List', comppnent: List, icon: 'podium-outline'},
  {name: 'More', comppnent: List, icon: 'ellipsis-horizontal-outline'},
];

const Tabs = () => {
  const getTabIcon = (name: string, color: string, size: number) => {
    return <Icon name={name} size={size} color={color} />;
  };

  const getTab = () => {
    return tabList.map(tab => {
      return (
        <Tab.Screen
          name={tab.name}
          key={tab.name}
          component={tab.comppnent}
          options={{
            tabBarIcon: ({color, size}) => getTabIcon(tab.icon, color, size),
          }}
        />
      );
    });
  };

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.background,
          height: 60,
        },
        tabBarActiveTintColor: GlobalStyles.colors.main,
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      {getTab()}
    </Tab.Navigator>
  );
};

export default Tabs;
