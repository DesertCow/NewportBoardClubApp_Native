import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//* Import Assets
const boardClubIcon = require('../../assets/img/BC_Logo_Clear_1.png');



function Header() {

  const navigation = useNavigation();

  return(

    <View style={styles.header}>

      <View style={styles.logoCol}>
        <Image
          style={styles.NBCLogo}
          source={boardClubIcon}
        />
      </View>

      <View style={styles.wxBox}>
        {/* <FontAwesome5 name="book-open" size={50} color="black" onPress={() => navigation.navigate('Home')}/> */}
        {/* <MaterialCommunityIcons name="surfing" size={50} color="black" onPress={() => navigation.navigate('SurfLog')}/> */}
        {/* <FontAwesome name="gear" size={50} color="black" onPress={() => navigation.navigate('UserSettings')}/> */}
      </View>

    </View>

  )
};


const styles = StyleSheet.create({
  header: {
    // marginTop: 60,
    flex: 1,
    backgroundColor: "#D8D8D8",
    paddingTop: 30,
    paddingBottom: 120,
    alignItems: 'left',
    // height: 120,
    opacity: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // paddingBottom: 40
  },
  logoCol: {
    // flex: 1,
    // flexDirection: 'column',
    // marginBottom: 50, 
    // marginTop: 10
  },
  wxBox: {
    // flex: 1,
    // flexDirection: 'column',
  },
  NBCLogo: {
    width: 175, 
    height: 75, 
    // marginBottom: 50, 
    marginTop: 70
  }
});


export default Header;