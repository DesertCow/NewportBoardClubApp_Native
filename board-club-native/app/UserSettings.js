// import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

//* Auth Import
import Auth from '../utils/auth';

//* GraphQL
import { EMAIL_UPDATE, PASS_UPDATE, NAME_UPDATE } from '../utils/mutations';
import { getURLupload_Q } from '../utils/queries';
import { useMutation, useLazyQuery } from '@apollo/client';

//* Document Picker
import * as DocumentPicker from 'expo-document-picker';



function UserSettings() {

  const navigation = useNavigation();

  //* User Profile Data Fields
  const [profilePictureURL, setProfilePictureURL] = React.useState(null);
  const [memberFirstName, setMemberFirstName] = React.useState(null);
  const [memberLastName, setMemberLastName] = React.useState(null);
  const [memberEmail, setMemberEmail] = React.useState(null);
  const [memberID, setMemberID] = React.useState(null);

  //* Updated User Data
  const [newPassword, setNewPassword] = React.useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = React.useState(null);
  const [newEmail, setNewEmail] = React.useState(null);
  const [newName, setNewName] = React.useState({ firstName: "", lastName: ""});

  //*GraphQL Mutations/Queries
  const [updatePassMu, { passData }] = useMutation(PASS_UPDATE)
  const [updateEmailMu, { emailData }] = useMutation(EMAIL_UPDATE)
  const [updateNameMu, { nameData }] = useMutation(NAME_UPDATE)
  const [getSecureURLQ, { secureURLdata } ] = useLazyQuery(getURLupload_Q);


  // //* Upload File
  const [uploadFile, setUploadFile] = React.useState();


  // //* Handles Upload File
  //   const fileChangeHandler = (event) => {
  //     setSelectedFile(event.target.files[0]);
  //     // setIsSelected(true);
  //   };

  async function chooseFile() {

    // Ask User To Select New Profile Picture
    let newProfilePicture = await DocumentPicker.getDocumentAsync({type: 'image/jpeg'})
    // let newProfilePicture = await DocumentPicker.getDocumentAsync()

    setUploadFile(newProfilePicture)
    console.log(newProfilePicture)
  }

  async function loadProfile() {
    
    //* Grab Decoded Profile
    let profile = await Auth.getProfile()

    //* Remove Data Wrapper
    profile = profile.data

    setMemberID(profile._id)

    //* Create Profile Picture URL based off User ID
    //* Added data to end to drive refresh and bypass cache
    let profilePicture = "https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/" + memberID + ".jpg" + '?' + new Date()
    // console.log(profilePicture)
    
    setProfilePictureURL(profilePicture)
    setMemberEmail(profile.memberEmail)

    setMemberFirstName(profile.memberFirstName)
    setMemberLastName(profile.memberLastName)

    //* Set New First/Last name to existing one incase only one is updated...
    // setNewName({...newName, firstName: memberFirstName, lastName: memberLastName })

  }

  //* Updated User Data
  const firstNameUpdated = (data) => {
    // console.log(data)
    setNewName({...newName, firstName: data})
  };

  const lastNameUpdated = (data) => {
    // console.log(data)
    setNewName({...newName, lastName: data})
  };

  const passwordUpdated = (data) => {
    // console.log(data)
    setNewPassword(data)
  };

  const passwordConfirmUpdated = (data) => {
    // console.log(data)
    setNewPasswordConfirm(data)
  };

  const emailUpdated = (data) => {
    // console.log(data)
    setNewEmail(data)
  };


  //* Handle User Submit
  async function updateProfilePicture() {

    console.log("Update Profile Picture")

      //* Request secure URL for upload from AWS/S3 via graphQL
      const URLdata = await getSecureURLQ({
        variables: { userId: memberID},
      });

      // console.log("Secure URL: " + JSON.stringify(URLdata))
      console.log("Secure URL: ")
      console.log(URLdata.data.uploadUserProfilePicture.secureUploadURL)

      if (uploadFile != null) {
        // If file selected then create FormData
        const data = new FormData();

        data.append('file_attachment', {
          uri: uploadFile.uri,
          name: uploadFile.name,
          // name: memberID + ".jpg",
          type: uploadFile.mimeType,
        });

        //* Use parsed/clean URL to submit PUT request to S3 server
        const response = await fetch(
          URLdata.data.uploadUserProfilePicture.secureUploadURL,
          {
            method: 'PUT',
            body: uploadFile,
            // body: data,
            headers: {
              "Content-Type": "image/jpeg",
            },
          }
        )

        console.log(response)
        //* After Fetch is complete reload page to display new user Profile Picture
        if(response.status == 200){
          // window.location.reload(false);
          loadProfile()
        }
        else{
          //TODO: Add error handling for failed upload!
        }

      }

  }

  async function updateName() {

    // console.log("New First Name: " + newName.firstName)
    // console.log("New Last Name: " + newName.lastName)

    if(newName.firstName != "" && newName.lastName != "") {

      const tokenData = await updateNameMu({
        variables: { 
          id: memberID,
          memberFirstName: newName.firstName,
          memberLastName: newName.lastName,
        },
      });

      //* Generate Updated JWT Token
      Auth.login(tokenData.data.updateName.token)

      //* Refresh Page to grab updated data from stored JWT token
      loadProfile()

    }
    else {

      //TODO: Add Popup Warning / Error!
      console.log("ERROR: Please provide a First and Last name!")
    }
  }

  async function updateEmail() {

    console.log("Update User Email: " + newEmail )
    
    const tokenData = await updateEmailMu({
      variables: { 
        id: memberID,
        memberEmail: newEmail,
      },
    });

    //* Generate Updated JWT Token
    // console.log(tokenData.data.updateEmail.token)
    Auth.login(tokenData.data.updateEmail.token)

    //* Refresh Page to grab updated data from stored JWT token
    loadProfile()

  }

  async function updatePassword() {

    console.log("Update User Password")
    console.log(newPassword + " == " +  newPasswordConfirm)

    //* Confirm Passwords Match
    if(newPassword == newPasswordConfirm){

      console.log("Passwords Match!")

      const tokenData = await updatePassMu({
        variables: { 
          id: memberID,
          password: newPassword,
        },
      });

      //* Generate Updated JWT Token
      console.log(tokenData.data.updatePassword.token)
      // Auth.login(JSON.stringify(tokenData.data.updatePassword.token));
      Auth.login(tokenData.data.updatePassword.token);

      //* Refresh Page to grab updated data from stored JWT token
      // window.location.reload(false);
      loadProfile()

    }
  }

  function logout() {

    // console.log("Logout!")


    //TODO: Add Popup to confirm you want to log out!
    Auth.logout()

    navigation.navigate('Login')

  }

  //* Load Profile Data/JWT Token
  loadProfile()

  //* Confirm Profile Data has loaded
  if(profilePictureURL !== null) {

    // console.log(memberFirstName)
    // console.log(memberLastName)

    return (

      <SafeAreaView style={{ flex: 1}}>

        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>

          <View>

            <Text style={styles.memberName}>{memberFirstName} {memberLastName}</Text>

            <Text style={styles.welcomeText}>Welcome to your Board Club Profile!</Text>

            <View>
              <Image
              style={styles.memberProfilePicture}
              source={{uri: profilePictureURL }}
              />
              
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => chooseFile()}>
                <Text style={styles.buttonText}>Choose File</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => updateProfilePicture()}>
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>

            </View>



            <View style={styles.updateZone}>

              <Text style={styles.welcomeText}>Member Name</Text>
              <TextInput
                style={styles.nameInput}
                name="memberFirstName"
                placeholder={memberFirstName}
                inputMode="text"
                onChangeText={(data) => firstNameUpdated(data)}
              />

              <TextInput
                style={styles.nameInput}
                onChangeText={(data) => lastNameUpdated(data)}
                placeholder={memberLastName}
                inputMode="text"
              />

              <TouchableOpacity
                style={styles.updateButton2}
                onPress={() => updateName()}>
                <Text style={styles.buttonText}>Update Name</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.updateZone}>

              <Text style={styles.welcomeText}>Email Address</Text>
              <TextInput
                style={styles.nameInput}
                name="memberFirstName"
                placeholder={memberEmail}
                inputMode="email"
                onChangeText={(data) => emailUpdated(data)}
              />

              <TouchableOpacity
                style={styles.updateButton2}
                onPress={() => updateEmail()}>
                <Text style={styles.buttonText}>Update Email</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.updateZone}>

              <Text style={styles.welcomeText}>Password</Text>
              <TextInput
                style={styles.nameInput}
                name="memberFirstName"
                placeholder="Password"
                inputMode="text"
                secureTextEntry={true}
                onChangeText={(data) => passwordUpdated(data)}
              />

              <Text style={styles.welcomeText}>Password Confirm</Text>
              <TextInput
                style={styles.nameInput}
                placeholder="Password"
                inputMode="text"
                secureTextEntry={true}
                onChangeText={(data) => passwordConfirmUpdated(data)}
              />

              <TouchableOpacity
                style={styles.updateButton2}
                onPress={() => updatePassword()}>
                <Text style={styles.buttonText}>Update Password</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.logoutZone}>

              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => logout()}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>

            </View>

          </View>


        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>
    );

  }
  else {


    return (
      <SafeAreaView style={{ flex: 1}}>

        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>
          {/* <Text>User Settings Page</Text> */}
          {/* <ActivityIndicator style={styles.memberProfilePicture} size="large" color="black"/> */}
          <ActivityIndicator style={styles.loadingWheel} size="large" color="black"/>
        </ScrollView>

        

        <Footer></Footer>
      </SafeAreaView>
      
    )
  }

}

const styles = StyleSheet.create({
  loadingWheel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    marginTop: 250,
  },
  memberName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    marginTop: 20,
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: "black",
    marginTop: 10,
  },
  memberProfilePicture: {
    marginTop: 30,
    alignSelf: 'center',
    // width: "90%",
    height: 200,
    width: 200,
    // borderWidth: 10,
    // borderColor: "#CACACA",
    borderRadius: 30,
  },
  updateButton: {
    alignItems: 'center',
    backgroundColor: '#191919',
    color: "#FFFFFF",
    height: 50,
    width: 250,
    marginTop: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  updateButton2: {
    alignItems: 'center',
    backgroundColor: '#191919',
    color: "#FFFFFF",
    height: 50,
    width: 250,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    color: "#FFFFFF",
    justifyContent: 'center',
  },
  updateZone: {
    marginTop: 50,
  },
  nameInput: {
    width: "90%",
    fontSize: 20,
    // height: 40,
    marginTop: 10,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  logoutZone: {
    marginTop: 100,
    alignSelf: 'center',
    justifyContent: "center",
    // width: "90%",
    // height: 150,
    // width: 150,
    padding: 20,
    borderWidth: 10,
    borderStyle: "dotted",
    borderColor: "#CACACA",
    // borderRadius: 30,
    marginBottom: 50,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#DC3545',
    color: "#FFFFFF",
    height: 50,
    width: 300,
    // marginTop: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  }
});

export default UserSettings;