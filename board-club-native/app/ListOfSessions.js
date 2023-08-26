import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
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
  const [surfSessionData, setSurfSessionData] = React.useState(null);

  var finalSurfHackListView = []

  console.log("!!!!!!!!!!!!!!!!!!!!!!!")
  console.log(finalSurfHackListView)

  
  
  const displayHackDetails = async (event, reqSurfHackID) => {
  
    navigation.navigate('SurfHackDetail', {
      HackID: reqSurfHackID
    });

  };

  async function loadProfile() {
    
    //* Grab Decoded Profile
    let profile = await Auth.getProfile()
    // profile = profile.data

    setProfileData(profile.data)

    console.log("Profile = ")
    console.log(profile)

    // console.log(profile._id)

    // //* Get List of surf sessions for user from Database
    // var { loading, data } = useQuery(getSurfSessionList_Q, {
    //   // variables: { userId: loadProfile()._id },
    //   variables: { userId: profile._id },
    // });

    
    

    if(!loading) {

      console.log("111LOADING = ")
      console.log(loading)
      console.log("Data = ")
      console.log(data)
      setSurfSessionData(data)


      return loading
    }

    // return loading

  }

  async function loadSurfSessionData() {

    // profile = await loadProfile()

    // console.log("PROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    // console.log(profile)

    // //* Get List of surf sessions for user from Database
    // var { loading, data } = useQuery(getSurfSessionList_Q, {
    //   variables: { userId: profile._id },
    // });

    console.log("Data@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@r")
    console.log(data)
    console.log(loading)

    return true

  }

  // //* Get List of surf sessions for user from Database
  // var { loading, data } = useQuery(getSurfSessionList_Q, {
  //   variables: { userId: profile._id },
  // });


  // let loadStatus = loadSurfSessionData()

  //* Load Profile Data/JWT Token
  loadProfile()

  // console.log(profileData)
  // console.log("LOADING = ")
  // console.log(loading)

  if(profileData !== null)
  {
    console.log("Profile Data Valid!")
    console.log(profileData)

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

    return (

      <SafeAreaView style={{ flex: 1}}>
        
        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>
          <Text>List Of Surf Session!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
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
          <Text>Loading!!!!!!!!!!!!</Text>
        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>

    );

  }
}

export default ListOfSession;