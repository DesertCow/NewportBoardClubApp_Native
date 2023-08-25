import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

//* Components Import
// import Header from "../components/common/Header";
// import Footer from "../components/common/Footer";

//* Import Assets
const boardClubIcon = require('../assets/img/BC_Logo_Clear_1.png')

function PasswordRecovery( { navigation } ) {

  const [recoveryEmail, setRecoveryEmail] = React.useState(false);

    //* Update values when input Changed
  const updateRecoveryEmail = (data) => {
    setRecoveryEmail(data);
  };

  async function submitSignupData(){

    console.log("Account Recovery Requested (" + recoveryEmail + ")")

  }


  return (

    <SafeAreaView style={{ flex: 1}}>

      <ScrollView>
        {/* <Text>Password Recovery Page</Text>*/}

        <View style={styles.LoginPage}>
          <Image
            style={styles.NBCLogo}
            source={boardClubIcon}
          />
        </View>

        <Text style={styles.passwordRecoveryTitle}>Password Recovery</Text>

        <TextInput
          style={styles.accountEmailInput}
          name="memberFirstName"
          placeholder="Account Email"
          inputMode="email"
          onChangeText={(data) => updateRecoveryEmail(data)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => submitSignupData()}>
          <Text style={styles.buttonText}>Request Recovery Email</Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
    NBCLogo: {
    width: "90%", 
    marginTop: Platform.OS === 'android' ? 70 : 30,
    alignSelf: 'center'
  },
  passwordRecoveryTitle: {
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  accountEmailInput: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 25,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginVertical: Platform.OS === 'android' ? 10 : 5,
  },
  button: {
    marginTop: 300,
    alignItems: 'center',
    backgroundColor: '#111111',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 23,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    color: "#FFFFFF",
    justifyContent: 'center',
  },
})

export default PasswordRecovery;