import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//* Import Assets
import { FontAwesome5 } from '@expo/vector-icons';
const GitHubIcon = require('../../assets/icons/github.png')

//* Linking
import * as Linking from 'expo-linking';




function FooterLogin() {

  const navigation = useNavigation();

  function gitHubLink(){
    Linking.openURL('https://github.com/DesertCow');
  }

  function portfolioLink(){
    Linking.openURL('https://www.claytonskaggs.dev/');
  }

  return(

    <View style={styles.footer}>

      <TouchableOpacity
        onPress={() => gitHubLink()}
      >
      <Image style={styles.gitHubIcon} source={GitHubIcon}/>
      </TouchableOpacity>

      <Text style={styles.footerText}>🙊 Monkey See Monkey Do LLC. 🙉</Text>

      <TouchableOpacity
        onPress={() => portfolioLink()}
      >
        <FontAwesome5 name="id-badge" size={24} color="black" />
      </TouchableOpacity>
      
      
      
    </View>

  )
};


const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#D8D8D8",
    // paddingVertical: 20,
    alignItems: 'center',
    height: 50,
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "90%",
    alignSelf: 'center',
    // paddingBottom: 40
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gitHubIcon: {
    marginTop: 3,
    // marginLeft: 3,
    height: 25,
    width: 25,
  }
});


export default FooterLogin;