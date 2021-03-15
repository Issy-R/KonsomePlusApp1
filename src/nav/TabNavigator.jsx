import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopTabNavigator from './TopTabNavigator';
// import SomeTalkScreen from '../screen/SomeTalkScreen';
import TwitterMoemi from '../screen/TwitterMoemi';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TopTabNavigator} />
      <Tab.Screen name="Settings" component={TwitterMoemi} />
    </Tab.Navigator>
  );
}
