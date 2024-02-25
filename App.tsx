import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  
  StyleSheet,
  Text,

  View,
  Button,
  ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather from './Weather';
import Detail from './WeatherDetail';


function app(){
  const Stack = createNativeStackNavigator();
  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  
 
});

export default app;


