import { Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, View, TextInput } from 'react-native';
import React from 'react';


//* Import Assets
const boardClubIcon = require('../assets/img/BC_Logo_Clear_1.png')




function Registration( { navigation } ) {

  const [loginEmail, setLoginEmail] = React.useState();
  const [loginPassword, setLoginPassword] = React.useState();

  return (

    <SafeAreaView style={{ flex: 1}}>

      <ScrollView>

        <View style={styles.LoginPage}>
          <Image
            style={styles.NBCLogo}
            source={boardClubIcon}
          />
        </View>

        <Text style={styles.titleText}>Welcome New Member!</Text>

          <View style={styles.loginBox}>

            <Text style={styles.loginBoxTitle}>Create New Account</Text>

            <Text style={styles.emailText}>Email:</Text>

            <TextInput
              style={styles.emailInput}
              onChangeText={setLoginEmail}
              value={loginEmail}
              // defaultValue='MM/DD/YYYY'
              inputMode="email"
            />

            <Text style={styles.passwordText}>Password:</Text>

            <TextInput
              style={styles.emailInput}
              onChangeText={setLoginPassword}
              value={loginPassword}
              inputMode="password"
              secureTextEntry={true}
            />

            {/* <Text style={styles.passwordRecoveryText} onPress={() => navigation.navigate('PasswordRecovery')}>Password Recovery</Text> */}

          </View>       

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TermsOfService')}>
          <Text style={styles.buttonText}>Terms Of Service</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Back To Login</Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  button: {
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
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    color: "#FFFFFF",
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
    NBCLogo: {
    width: "90%", 
    marginTop: Platform.OS === 'android' ? 70 : 30,
    alignSelf: 'center'
  },
  loginBox: {
    backgroundColor: "#AFAFAF",
    marginHorizontal: 15,
    borderRadius: 25,
    // maxHeight: 450,
    // minHeight: 450,
    paddingVertical: 30,
    marginTop: 30,
  },
  emailText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  passwordText: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  emailInput: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 10,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginVertical: Platform.OS === 'android' ? 10 : 5,
  },
  loginBoxTitle: {
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  }
})

export default Registration;