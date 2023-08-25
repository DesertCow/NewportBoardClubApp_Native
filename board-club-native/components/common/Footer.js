

import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


function Footer() {

  const navigation = useNavigation();

  return(

    <View style={styles.footer}>
      <Entypo name="home" size={50} color="black" onPress={() => navigation.navigate('Home')} />
      <MaterialCommunityIcons name="surfing" size={50} color="black" onPress={() => navigation.navigate('SurfLog')}/>
      <MaterialIcons name="event" size={50} color="black" onPress={() => navigation.navigate('ClubEvents')}/>
      <FontAwesome name="gear" size={50} color="black" onPress={() => navigation.navigate('UserSettings')}/>
    </View>

  )
};


const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#D8D8D8",
    // paddingVertical: 20,
    alignItems: 'center',
    height: 90,
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingBottom: 40
  }
});


export default Footer;