import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

import Detail from './screen/Detail'
import Home from './screen/Home'
import Login from './screen/Login'
import Profile from './screen/Profile'
import Register from './screen/Register'
import Splash from './screen/Splash'
import Welcome from './screen/Welcome'

// const Utama =

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Profile' >
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
