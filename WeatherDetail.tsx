import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';

import {

  StyleSheet,
  Text,

  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import { Api_Key } from './WeatherApi';
import Icon from 'react-native-vector-icons/Ionicons';

function Detail({ route, navigation }) {
  const [data, setdata] = useState(null)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const name = route.params.paramKey1
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Api_Key}`)
      .then((response) => response.json())
      .then((response) => setdata(response))
      // .then((response) => console.log(response))
      .catch(error => console.log(error))
  }, [])
  if (!data) {
    return <Text>Loading...</Text>;
  }
  console.log({ data })
  return (
    <View style={{ backgroundColor: "black" }}>
      <ImageBackground
        // source={require('../Images/img1.jpg')}
        source={require('../weather/Images/img3.jpg')}
        style={{ opacity: 0.6, height: windowHeight, width: windowWidth, backgroundColor: "black" }}

      />
      <View style={{ position: "absolute", margin: 10, padding: 10 }}>


        <View style={{ justifyContent: "space-between", flexDirection: "row", width: windowWidth - 40, alignItems: "center" }}>

          <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
            <Icon name='arrow-back' color="white" size={30} />
          </TouchableOpacity>
          <Image
            source={require('../weather/Images/profile.png')}
            style={{ height: 27, width: 27 }}
          />
        </View>
        <View style={{justifyContent:"space-between",alignItems:"center",marginTop:50,flexDirection:"column"}}>
          <Text style={{ color: "white", fontSize: 35 }} >
            
            {name}
          </Text>
          <Text style={{ color: "white", fontSize: 20 }} >
            {data["weather"][0]["main"]}
           
          </Text>
          <Text style={{ color: "white", fontSize: 30,marginTop:20 }} >
            
            {(data["main"]["temp"]-273).toFixed(2)+ '°C'}
          </Text>
        </View>

      </View>
    </View>


  );
}

const styles = StyleSheet.create({


});

export default Detail;


