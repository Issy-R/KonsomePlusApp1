import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SomeTalkScreen from '../screen/SomeTalkScreen';
import TwitterMoemi from '../screen/TwitterMoemi';
import AppBar from '../components/AppBar';
import YoutubeList from '../components/YoutubeList';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      style={styles.listContainer}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        style: { backgroundColor: 'rgba(215, 232, 255, 0.5)', borderBottomWidth: 1, borderColor: 'green' },
        tabStyle: { padding: 4, height: 48, width: 120, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: 'green' },
        scrollEnabled: true,
        indicatorStyle: { backgroundColor: 'red', },
        labelStyle: { margin: 0, fontSize: 16, lineHeight: 18 },
        showIcon: true,
      }}
    >
      <Tab.Screen name="ソメトーーク" component={SomeTalkScreen} />
      <Tab.Screen name="もえみのつぶやき" component={TwitterMoemi} />
      <Tab.Screen name="とりあえず" component={AppBar} />
      <Tab.Screen name="youtube" component={YoutubeList} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    backgroundColor: 'gray',
  },
});
