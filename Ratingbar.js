import img from './assets/img';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  BackHandler,
} from 'react-native';
function FiveStar(props) {
  const {numberOfStar} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      {[0, 1, 2, 3, 4].map(item => (
        <Image
          source={img.img_star}
          style={{
            height: 15,
            width: 15,
            tintColor: item <= numberOfStar - 1 ? 'red' : 'gray',
          }}></Image>
      ))}
    </View>
  );
}
export default FiveStar;