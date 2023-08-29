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

  var surfSessionListView = []
  var tempID = "64e27081d2fa09f5f6881882"


  const displaySurfSessionDetails = async (event, reqSurfSessionID) => {
  
    navigation.navigate('SurfSessionDetail', {
      SurfSessionID: reqSurfSessionID
    });

  };

  // async function loadProfile() {
    
  //   //* Grab Decoded Profile
  //   let profile = await Auth.getProfile()

  //   return profile

  // }

  //* Build Buttons Based on Surf Session data from Database
  async function buildSurfSessionView(sessionData) {

    //* Generate Button for each surf session
      surfSessionListView.push(

      <View key={sessionData._id}>
        
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

    //* Get List of surf sessions for user from Database
    var { loading, data } = useQuery(getSurfSessionList_Q, {
      // variables: { userId: profile._id },
      variables: { userId: tempID },
    });

    return data
  }

  //* Load Surf Session Data from DB
  let surfSessionData = loadSurfSessionData()
  surfSessionData = surfSessionData._j

  //* Check surfSessionData has loaded
  if(surfSessionData !== undefined)
  {
    surfSessionData = surfSessionData.getAllUsersSurfSession

    //* Check to confirm session Data exists
    if(surfSessionData.length > 0)
    {

      //* Build List of buttons from surfsession Data
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