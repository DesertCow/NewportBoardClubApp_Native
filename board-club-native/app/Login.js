import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Footer from '../components/common/Footer';

//* Components Import
// import Header from "../components/common/Header";
import FooterLogin from "../components/common/FooterLogin";

//* Import Assets
const boardClubIcon = require('../assets/img/BC_Logo_Clear_1.png')

//* GraphQL
import { LOGIN_M } from '../utils/mutations'
import { useMutation } from '@apollo/client';

function LoginMain( { navigation } ) {

  const [loginEmail, setLoginEmail] = React.useState();
  const [loginPassword, setLoginPassword] = React.useState();

  const [login, { data }] = useMutation(LOGIN_M);

  async function makeLoginRequest(){

    console.log("Make Login Request")
    console.log("Email: " + loginEmail)
    console.log("Password: " + loginPassword)

    const { data } = await login({
      
      variables: { 
        memberEmail: loginEmail,
        password: loginPassword,
      },

    })

  }

  return (

    <SafeAreaView style={{ flex: 1}}>

      <ScrollView>

        <View style={styles.LoginPage}>
          <Image
            style={styles.NBCLogo}
            source={boardClubIcon}
          />
        </View>

        <View style={styles.loginBox}>

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
            inputMode="text"
            secureTextEntry={true}
          />

          <Text style={styles.passwordRecoveryText} onPress={() => navigation.navigate('PasswordRecovery')}>Password Recovery</Text>

          <TouchableOpacity
            style={styles.loginBTN}
            onPress={() => makeLoginRequest()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.newMemberBTN}
            onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.buttonText}>New Member Registration</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
      
      <FooterLogin></FooterLogin>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  LoginPage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  NBCLogo: {
    width: "90%", 
    marginTop: Platform.OS === 'android' ? 70 : 30,
    // height: 75,
  },
  loginBox: {
    backgroundColor: "#AFAFAF",
    marginHorizontal: 15,
    borderRadius: 25,
    // maxHeight: 450,
    // minHeight: 450,
    paddingVertical: 30,
    marginTop: 30,
    marginBottom: 50,
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
  passwordRecoveryText: {
    marginTop: 20,
    fontSize: 15,
    color: "blue",
    textDecorationLine: 'underline',
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
  loginBTN: {
    alignItems: 'center',
    backgroundColor: '#111111',
    height: 60,
    width: "85%",
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  newMemberBTN: {
    alignItems: 'center',
    backgroundColor: '#111111',
    color: "#FFFFFF",
    height: 60,
    width: "85%",
    marginTop: 50,
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default LoginMain;