import React, {useState, useEffect} from 'react';
import img from './assets/img';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  onPress,
} from 'react-native';
import Ratings from './Ratingbar';
export default function CapItem(props) {
  const {item} = props;
  return (
    <View
      style={{
        flexDirection: 'column',
        width: 170,
        padding: 10,
      }}>
      <Image source={item.img}></Image>
      <Text>{item.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Ratings numberOfStar={item.star} />
        <Text style={{fontSize: 12, paddingStart: 15}}>
          ({item.numberStar})
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {item.gia} đ
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            opacity: 0.5,
            paddingStart: 15,
          }}>
          -{item.giamgia}%
        </Text>
      </View>
    </View>
  );
}
