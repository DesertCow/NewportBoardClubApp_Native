import { Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, View } from 'react-native';


//* Import Assets
const boardClubIcon = require('../assets/img/BC_Logo_Clear_1.png')




function PrivacyPolicy( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>

        <View style={styles.LoginPage}>
          <Image
            style={styles.NBCLogo}
            source={boardClubIcon}
          />
        </View>

        <Text style={styles.HeaderText}>Privacy Policy Page</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.buttonText}>Return To Registration</Text>
        </TouchableOpacity> 

      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  HeaderText: {
    marginTop: 100,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    color: "#FFFFFF",
    justifyContent: 'center',
  },
  NBCLogo: {
    width: "90%", 
    marginTop: Platform.OS === 'android' ? 70 : 30,
    alignSelf: 'center'
  },
})

export default PrivacyPolicy;