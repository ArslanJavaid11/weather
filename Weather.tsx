import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import {

  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Weather({ navigation }) {
  const [city, setcity] = useState("")
  return (

    <View style={{ backgroundColor: "black" }}>
      <ImageBackground
        // source={require('../Images/img1.jpg')}
        source={require('../weather/Images/img2.jpg')}
        style={{ opacity: 0.6, height: windowHeight, width: windowWidth, backgroundColor: "black" }}

      />


      <View style={{ margin: 10, padding: 10, position: "absolute" }}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", width: windowWidth - 40, alignItems: "center" }}>
          <Icon name='menu' color="white" size={30}
          />
          <Image
            source={require('../weather/Images/profile.png')}
            style={{ height: 27, width: 27 }}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "white", fontSize: 40 }}>
            Hello
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>
            Search the city by name
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, borderColor: "white", borderWidth: 1, borderRadius: 20, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 }}>
          <TextInput
            value={city}
            onChangeText={(city) => setcity(city)}
            placeholder="Search City"
            placeholderTextColor="white"
            style={{ color: "white" }}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Detail', {
            paramKey1: city,
          })}>
            <Icon name='search' size={20} color="white" />
          </TouchableOpacity>





        </View>

      </View>



    </View>

  );
}

const styles = StyleSheet.create({


});

export default Weather;


