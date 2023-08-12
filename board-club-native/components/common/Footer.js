

import { StyleSheet, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Footer = () => {

  return(

    <View style={styles.footer}>
      <FontAwesome5 name="book-open" size={50} color="black" onPress={() => navigation.navigate('Home')}/>
      <MaterialCommunityIcons name="surfing" size={50} color="black" onPress={() => navigation.navigate('SurfLog')}/>
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