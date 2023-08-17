import { StyleSheet, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//* Import Assets
import { FontAwesome5 } from '@expo/vector-icons';
const GitHubIcon = require('../../assets/icons/github.png')

function FooterLogin() {

  const navigation = useNavigation();

  return(

    <View style={styles.footer}>
      <Image style={styles.gitHubIcon} source={GitHubIcon} />
      <Text style={styles.footerText}>🙊 Monkey See Monkey Do LLC. 🙉</Text>
      <FontAwesome5 name="id-badge" size={24} color="black" />
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