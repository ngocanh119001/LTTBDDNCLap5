import React, {useState} from 'react';

import {SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import img from'./assets/img';
import Items from './Item';


export default function App(props) {
  const [product, setProduct] = useState([
    {
    name:'Ca nấu lẩu mini',
    img: img.img_ca,
    shopname:'Shop Devang'
  },
  {
    name:'1KG KHÔ GÀ BƠ TỎI ...',
    img:img.img_ga,
    shopname:'Shop LTD Food'
  },
  {
    name:'Xe cần cẩu đa năng',
    img: img.img_xe,
    shopname:'Shop Thế giới đồ chơi'
  },
  {
    name:'Đồ chơi dạng mô hình',
    img:img.img_dochoi,
    shopname:'Shop Thế giới đồ chơi'
  },
  {
    name:'Lãnh đạo đơn giản',
    img:img.img_lanhdao,
    shopname:'Shop Minh Long book'
  },
  {
    name:'Hiểu lòng trẻ con',
    img:img.img_hieu,
    shopname:'Shop Minh Long book'
  },
  {
    name:'Donal-Trump Thiên tài lãnh đạo',
    img:img.img_donal,
    shopname:'Shop Minh Long book'
  }
  ]);
  return (
    
    <SafeAreaView style={styles.sa}>
    <View style={styles.container}>
         <View style={styles.view}>
           <Image style={{marginRight:10,}}  source={require('./assets/ve.png')} />
           <Text style={{color:'white', fontSize:14, marginRight:10,}}>Chat </Text>
           <Image style={{marginRight:10,}} source={require('./assets/bi_cart-check.png')} />
         </View>
         <View style={styles.view3}>
           <Text style={{color:'black', fontSize:11,alignItems:'center', padding:20}}>
           Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop! </Text>
         </View>
         <View style={styles.view1}>
            <FlatList 
             data={product}
           //  renderItem={({item }) => < dataList={item.name}/>}
             keyExtractor={(item) => item.name}
             renderItem={({item})=> <Items data ={item}/>}
              
            />
         </View>
          <View style={styles.view2}>
           <Image style={{marginRight:10,}}  source={require('./assets/Group10.png')} />
           <Image style={{marginRight:10,}}  source={require('./assets/Vector.png')} />
           <Image style={{marginRight:10,}} source={require('./assets/VectorStroke.png')} />
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
  view3:{
    flex:3,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#00000030',

  },
 
});
