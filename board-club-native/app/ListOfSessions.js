import { Text, SafeAreaView, StyleSheet, ScrollView, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

//* GraphQL
import { getSurfSessionList_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

//* Auth Import
import Auth from '../utils/auth';




function ListOfSession() {

  const navigation = useNavigation();
  const [profileData, setProfileData] = React.useState(null);
  // const [surfSessionData2, setSurfSessionData2] = React.useState([]);

  var surfSessionListView = []
  var tempID = "64e27081d2fa09f5f6881882"
  // var tempID = "64e27081d2fa09f5f6881865"

  // console.log("!!!!!!!!!!!!!!!!!!!!!!!")
  // console.log(finalSurfHackListView)

  
  
  const displaySurfSessionDetails = async (event, reqSurfSessionID) => {
  
    navigation.navigate('SurfHackDetail', {
      SurfSessionID: reqSurfSessionID
    });

  };

  async function loadProfile() {
    
    //* Grab Decoded Profile
    let profile = await Auth.getProfile()
    // profile = profile.data

    // setProfileData(profile.data)

    // console.log("Profile = ")
    // console.log(profile)

    // if(!loading) {

    //   console.log("111LOADING = ")
    //   console.log(loading)
    //   console.log("Data = ")
    //   console.log(data)
    //   setSurfSessionData(data)


    //   return data
    // }

    // return loading
    return profile

  }

  //* Build Buttons Based on Surf Session data from Database
  async function buildSurfSessionView(sessionData) {

    console.log("*****************************************")
    console.log(sessionData)
    
    //* Generate IMG and Button for each event
      surfSessionListView.push(

      <View key={sessionData._id}>
        
        {/* <Text style={styles.sessionTitleText}>{sessionData.hackTitle}</Text> */}

        {/* <Image
        style={styles.hackPicture}
        source={{uri: surfHackData.hackPhotoURL}}
        /> */}

        <TouchableOpacity
          style={styles.sessionButton}
          // backgroundColor={switchColor}
          onPress={(event) => displaySurfSessionDetails(event, sessionData._id)}>
          <Text style={styles.buttonText}>{sessionData.sessionDate} ({sessionData.sessionTime}) @ {sessionData.sessionLocation}</Text>
        </TouchableOpacity>

      </View>
    )
  }

  //* Request Surf Session data from Database
  async function loadSurfSessionData() {

    // let profile = null
    // profile = await Auth.getProfile()

    // console.log("PROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    // console.log(profile)

    // if(profile !== null) {
      // //* Get List of surf sessions for user from Database
      var { loading, data } = useQuery(getSurfSessionList_Q, {
        // variables: { userId: profile._id },
        variables: { userId: tempID },
      });

      return data
    // }
  }

  // //* Get List of surf sessions for user from Database
  // var { loading, data } = useQuery(getSurfSessionList_Q, {
  //   variables: { userId: profile._id },
  // });


  // let loadStatus = loadSurfSessionData()

  //* Load Profile Data/JWT Token
  // loadProfile()

  //* Load Surf Session Data from DB
  let surfSessionData = loadSurfSessionData()
  surfSessionData = surfSessionData._j

  //* Check surfSessionData has loaded
  if(surfSessionData !== undefined)
  {
    surfSessionData = surfSessionData.getAllUsersSurfSession

    //* Check to confirm session Data exists
    if(surfSessionData.length > 0)
    // if(false)
    {
      // console.log("Profile Data Valid!")
      // console.log(profileData)

      // surfSessionData = surfSessionData.getAllUsersSurfSession

      console.log("%%%%%%%%%%%%%%%%%%%%%")
      console.log(surfSessionData)
      console.log(surfSessionData[0]._id)
      console.log(surfSessionData[1]._id)
      console.log(surfSessionData[2]._id)

      // profile = profileData



      // let loading = true

      //* Get List of surf sessions for user from Database
      // var { loading, data } = useQuery(getSurfSessionList_Q, {
      //   // variables: { userId: loadProfile()._id },
      //   variables: { userId: profileData._id },
      // });

      // if(!loading) {

        // console.log(loading)
        // console.log(data)

      // populateListOfSessions(surfSessionData)
      surfSessionData.forEach(buildSurfSessionView)

      return (

        <SafeAreaView style={{ flex: 1}}>
          
          <Header  style={{ position: "absolute"}}></Header>

          <ScrollView>

            <Text style={styles.surfSessionTitle}>Surf Sessions</Text>

            <View>
              {surfSessionListView}
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
            <Text>No Surf Sessions Logged!</Text>
            {/* <ActivityIndicator style={{ marginTop: 250}} size="large" /> */}
          </ScrollView>
          
          <Footer></Footer>

        </SafeAreaView>

      );

    }
  }
  else {

    return (

      <SafeAreaView style={{ flex: 1}}>
        
        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>
          {/* <Text>Loading!!!!!!!!!!!!</Text> */}
          <ActivityIndicator style={{ marginTop: 250}} size="large" />
        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>

    );

  }
}

const styles = StyleSheet.create({
  surfSessionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    marginVertical: 10
  },
  sessionDisplayBox: {
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: "#6f6f6f75",
    justifyContent: "center"
    
  },
  sessionPicture: {
    marginVertical: 30,
    alignSelf: 'center',
    height: 250,
    width: 300,
    borderRadius: 30,
  },
  sessionTitleText: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20,
  },
  sessionButton: {
    alignItems: 'center',
    // backgroundColor: "#51A7FF",
    backgroundColor: "#6f6f6f75",
    color: "#FFFFFF",
    height: 50,
    width: "85%",
    marginLeft: "8%",
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 20,
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  }
})
export default ListOfSession;