import React, {useState} from 'react';
import { Rating, AirbnbRating,StarRating } from 'react-native-ratings';
import {SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import img from'./assets/img';
import Items from './CapItems';


export default function App(props) {
  const [product, setProduct] = useState([
     {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      star: 4,
      numberStar: 15,
      gia: 69.9,
      giamgia: 38,
      img: img.img_giacchuyen,
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      star: 4,
      numberStar: 15,
      gia: 69.9,
      giamgia: 38,
      img: img.img_daynguon,
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      star: 4,
      numberStar: 15,
      gia: 69.9,
      giamgia: 38,
      img: img.img_dauchuyendoi3,
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      star: 4,
      numberStar: 15,
      gia: 69.9,
      giamgia: 38,
      img: img.img_dauchuyendoi2,
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      star: 4,
      numberStar: 15,
      gia: 69.9,
      giamgia: 38,
      img: img.img_car,
    },
    {
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      star: 4,
      numberStar: 15,
      gia: 69.9,
      giamgia: 38,
      img: img.img_daucam2,
    },

  ]);
  return (
    
    <SafeAreaView style={styles.sa}>
    <View style={styles.container}>
         <View style={styles.view}>
           <Image style={{marginRight:10,}}  source={require('./assets/ant-design_arrow-left-outlined.png')} />
           <View>
           <TextInput onChangeText={text => {
            
          }}
          style={{paddingLeft: 15, backgroundColor:'white', width:170}}></TextInput>
           </View>
           
           <Image style={{}} source={require('./assets/bi_cart-check.png')} />
           <Image style={{marginRight:5,}} source={require('./assets/Group2.png')}/>
         </View>
        
         <View style={styles.view1}>
           <FlatList
        numColumns={2}
        data={product}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => <Items item={item} index={index} />}
      />
           
         </View>
          <View style={styles.view2}>
           <Image style={{marginLeft:10,}}  source={require('./assets/Group10.png')} />
           <Image style={{marginRight:10,}}  source={require('./assets/Vector.png')} />
           <Image style={{marginRight:10,}} source={require('./assets/Vector1(Stroke).png')} />
         </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sa:{
    flex:1,
  },
  container: {
    flex: 5,
    flexDirection:'column',
    justifyContent: 'center',
    padding: 8,
   
  },
  view:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    //marginLeft:9,
    justifyContent: 'space-between',
//marginRight:10,
    backgroundColor:'#1BA9FF',
    marginTop:12,
  },
  view1:{
    flex:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00000030',
  },
  view2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    //marginLeft:9,
    justifyContent: 'space-between',
//marginRight:10,
    backgroundColor:'#1BA9FF',
  },
 
 
});
