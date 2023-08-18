import { Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, View, TextInput, Alert } from 'react-native';
import React from 'react';

// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box'

//* Import Assets
const boardClubIcon = require('../assets/img/BC_Logo_Clear_1.png')

//* GraphQL
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import { defaultProfilePictureUpload_Q } from '../utils/queries';


function Registration( { navigation } ) {

  const [signUpData, setSignUpData] = React.useState({ memberEmail: "", password: "", confirmPassword: "", memberFirstName: "", memberLastName: "", clubPassword: "" });

  const [tosCheckbox, setTosCheckbox] = React.useState(false);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false)

  //* GraphQL 
  const [createUser, { error, data }] = useMutation(CREATE_USER);
  const [getDefaultProfilePictureUpload, { defaultProfilePictureUploadData } ] = useLazyQuery(defaultProfilePictureUpload_Q);


  //* Update values when input Changed
  const registrationDataUpdated = (data, name) => {
    setSignUpData({ ...signUpData, [name]: data });
  };

  function TOScheckboxUpdate() {

    if(toggleCheckBox) {
      setToggleCheckBox(false)
    }
    else {
      setToggleCheckBox(true)
    }
  }

  const checkBoxAlert = () =>
    Alert.alert('Please Accept Terms Of Serice and Privacy Policy', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);


  async function submitSignupData(){

    //* Check that TOS and Privacy Policy has been accepted
    if(toggleCheckBox) {

      const { memberEmail, password, memberFirstName, memberLastName, clubPassword } = signUpData;
      // const signupData = { memberEmail, password, memberFirstName, memberLastName, clubPassword }
      console.log(memberEmail)

        //* Create New User In Database
        try {
          const { data } = await createUser({
            variables: { ...signUpData },
          });

          //* Generate New JWT Token
          // Auth.login(JSON.stringify(data.createUser));

          //* Grab and Decode JWT Token
          // let jwtToken = Auth.getProfile()

          // console.log("New User ID: " + jwtToken.data._id)

          //* Trigger Sever to upload a default User Profile Picture for new Account
          // const defaultProfileData = await getDefaultProfilePictureUpload({
          //   variables: { userId: jwtToken.data._id},
          // });

          // console.log(defaultProfileData)
          
          // console.log("Sign-Up Successful!");
          // navigate("/home")

        } catch (e) {
          // toast.error("Sign-Up Failed", toastOptions);
          console.error(e);
        }

    }
    else {
      console.log("Checkbox is not checked!")
      // {checkBoxAlert}
    }
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

        <Text style={styles.titleText}>Welcome New Member!</Text>

          <View style={styles.loginBox}>

            <Text style={styles.registerBoxTitle}>Create Account</Text>

            <TextInput
              style={styles.nameInput}
              name="memberFirstName"
              placeholder="First Name"
              inputMode="email"
              onChangeText={(data) => registrationDataUpdated(data,"memberFirstName")}
            />

            <TextInput
              style={styles.nameInput}
              onChangeText={(data) => registrationDataUpdated(data,"memberLastName")}
              placeholder="Last Name"
              inputMode="text"
            />

            <TextInput
              style={styles.emailInput}
              onChangeText={(data) => registrationDataUpdated(data,"memberEmail")}
              placeholder="Email"
              inputMode="email"
            />

            <TextInput
              style={styles.passwordInput}
              onChangeText={(data) => registrationDataUpdated(data,"password")}
              placeholder="Password"
              inputMode="text"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.passwordInputConfirm}
              onChangeText={(data) => registrationDataUpdated(data,"confirmPassword")}
              placeholder="Confirm Password"
              inputMode="text"
              secureTextEntry={true}
            />

            <TextInput
              style={styles.clubPassword}
              onChangeText={(data) => registrationDataUpdated(data,"clubPassword")}
              placeholder="Club Registration Password"
              inputMode="text"
              secureTextEntry={true}
            />

            <View style={styles.TOS_PP_Text}>
              <CheckBox
                style={styles.checkBox}
                disabled={false}
                isChecked={toggleCheckBox}
                onClick={()=>{TOScheckboxUpdate()}}
              />
              <Text>I agree to the Newport Board Club <Text style={styles.TOS_Text} onPress={() => navigation.navigate('TermsOfService')}>Terms Of Service</Text> and <Text style={styles.TOS_Text} onPress={() => navigation.navigate('PrivacyPolicy')}>Privacy Policy</Text>.</Text>
            </View>

            <TouchableOpacity
              style={styles.signUpBTN}
              onPress={() => {submitSignupData()}}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

          </View>       

        <TouchableOpacity
          style={styles.buttonLogin}
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
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#111111',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 60,
    marginBottom: 60,
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  signUpBTN: {
    alignItems: 'center',
    backgroundColor: '#111111',
    color: "#FFFFFF",
    height: 60,
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
    marginHorizontal: 40,
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
  nameInput: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginVertical: Platform.OS === 'android' ? 10 : 5,
  },
  emailInput: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginVertical: Platform.OS === 'android' ? 10 : 5,
  },
  passwordInput: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 80,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginVertical: Platform.OS === 'android' ? 10 : 5,
  },
  passwordInputConfirm: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginVertical: Platform.OS === 'android' ? 10 : 5,
  },
  clubPassword: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 60,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    // marginVertical: Platform.OS === 'android' ? 10 : 5,
  },
  registerBoxTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  TOS_PP_Text: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 30,
    fontSize: 12,
    // color: "blue",
    // textDecorationLine: 'underline',
    // fontWeight: 'bold',
    justifyContent: "center",
    alignSelf: 'center',
  },
  TOS_Text: {
    // marginTop: 20,
    fontSize: 13,
    color: "blue",
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    // alignSelf: 'center'
  },
  checkBox: {
    marginTop: 5,
    paddingRight: 5,
  }
})

export default Registration;