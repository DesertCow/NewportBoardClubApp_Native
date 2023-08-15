import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import SwitchSelector from "react-native-switch-selector";

//* GraphQL
import { useQuery } from '@apollo/client';
import { getCurrentEvents_Q, getHistoryEvents_Q } from '../utils/queries';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function ClubEvents() {

  const navigation = useNavigation();

  const [switchStatus, setSwitchStatus] = React.useState(true);
  const [bgColor, setBgColor] = React.useState("#E4F1FF");
  const [switchColor, setSwitchColor] = React.useState("#51A7FF");
  const [switchButtonColor, setSwitchButtonColor] = React.useState("#0480FF");

  var finalEventListView = []
  

  const switchOptions = [
  { label: "Current Events", value: "Current" },
  { label: "Previous Events", value: "Previous" }
  ];

  //* =========== Functions ===========
  function setBackgroundColor ({value}){
    
    // console.log(value)

    if(value == "Current"){
      setSwitchStatus(true)
      setBgColor("#E4F1FF")
      setSwitchColor("#51A7FF")
      setSwitchButtonColor("#0480FF")
    }
    else {
      setSwitchStatus(false)
      setBgColor("#FFF1E3")
      setSwitchColor("#FFA951")
      setSwitchButtonColor("#FF8304")
    }
  }

  //* =========== Event Handlers ===========

  const displayEventDetails = async (event, reqEventID) => {
    // event.preventDefault();

    // navigate("/club_events/event/" + reqEventID);
    console.log("Event (" + reqEventID + ") Clicked!")

    navigation.navigate('EventDetail', {
      EventID: reqEventID
    });
    // navigation.navigate('EventDetail');
    // console.log(event)
  };

  //* Get Current Event Data from App Server
  var { loading, data } = useQuery(getCurrentEvents_Q)
  
  var currrentEventData = data;
  
  //* Get Historic Event Data from App Server
  var { loading, data } = useQuery(getHistoryEvents_Q)
  
  var historyEventData = data;

  //* Build Events HTML based off passed Event Data
  function buildEventView(eventData){

  // console.log(eventData.eventName)

  //* Generate IMG and Button for each event
  finalEventListView.push(
    // <div className="eventsDisplayBox" key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)}>
    //   <h1 className="mt-2 pt-4 px-3">{eventData.eventName}</h1>
    //   <img src={eventData.eventPhotoURL} 
    //     className="eventIconPhoto mb-1 px-3" 
    //     alt="Event Photo" />
    //   <h1 className="mb- mt-2">{eventData.eventDate}</h1>
    // </div>)

    

    // <View style={styles.eventsDisplayBox} key={eventData._id} onClick={(event) => displayEventDetails(event, eventData._id)}>
    // <View style={styles.eventsDisplayBox} key={eventData._id} onClick={(event) => console.log("Event (" + eventData._id + ") Clicked!")}>
    <View style={styles.eventsDisplayBox} key={eventData._id} onClick={(event) => console.log("Event Clicked!")}>
      <Text style={styles.eventTitleText}>{eventData.eventName}</Text>

      <Image
      style={styles.eventPicture}
      source={{uri: eventData.eventPhotoURL}}
      />

      <Text style={styles.eventDateText}>{eventData.eventDate}</Text>

      <TouchableOpacity
        style={styles.eventButton}
        // backgroundColor={switchColor}
        onPress={(event) => displayEventDetails(event, eventData._id)}>
        <Text style={styles.buttonText}>Event Link</Text>
      </TouchableOpacity>

    </View>
  )}


  if(switchStatus && !loading) {

    let eventList = currrentEventData.getCurrentEvents

    //* Lopp over each current event
    eventList.forEach(buildEventView)

    return (

      // <SafeAreaView style={{ flex: 1, Platform.OS === 'android' ? 20 : 0}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor}}>

        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>

          <View style={styles.slideBox}>
            {/* <Text style={styles.slideBoxText}>Current Events</Text> */}
            <SwitchSelector
              options={switchOptions}
              initial={0}
              onPress={value => setBackgroundColor({value})}
              // buttonColor={colors.blue}
              // backgroundColor={"#51A7FF"}
              backgroundColor={switchColor}
              buttonColor={switchButtonColor}
              style={styles.switchStyle}
              fontSize={18}
              bold={true}
            />
            {/* <Text style={styles.slideBoxText}>Previous Events</Text> */}
          </View>

          <View>
            {finalEventListView}
          </View>

        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>

    );

  }

  if(!switchStatus && !loading) {

    let eventList = historyEventData.getPreviousEvents

    // * Lopp over each current event
    eventList.forEach(buildEventView)

    return (

      // <SafeAreaView style={{ flex: 1, Platform.OS === 'android' ? 20 : 0}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor}}>

        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>

          <View style={styles.slideBox}>
            {/* <Text style={styles.slideBoxText}>Current Events</Text> */}
            <SwitchSelector
              options={switchOptions}
              initial={0}
              onPress={value => setBackgroundColor({value})}
              // buttonColor={colors.blue}
              // backgroundColor={"#51A7FF"}
              backgroundColor={switchColor}
              buttonColor={switchButtonColor}
              style={styles.switchStyle}
              fontSize={18}
              bold={true}
            />
            {/* <Text style={styles.slideBoxText}>Previous Events</Text> */}
          </View>

          <View>
            {finalEventListView}
          </View>

        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>

    );
    
  }

}
const styles = StyleSheet.create({
  slideBox: {
    // borderStyle: "solid",
    // borderWidth: 5,
    width: "100%",
    minHeight: 75,
    maxHeight: 75,
    flexDirection: 'row',
    flex: 1,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  slideBoxText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  switchStyle: {
    width: "90%",
  },
  eventsDisplayBox: {
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: "#6f6f6f75",
    justifyContent: "center"
    
  },
  eventPicture: {
    marginVertical: 30,
    alignSelf: 'center',
    height: 250,
    width: 300,
    borderRadius: 30,
  },
  eventTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20,
  },
  eventDateText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 20,
  },
  eventButton: {
    alignItems: 'center',
    backgroundColor: "#51A7FF",
    color: "#FFFFFF",
    height: 50,
    width: "85%",
    marginLeft: "8%",
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 20,
    
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  }
})

const colors = StyleSheet.create({
  blue: {
    backgroundColor: "blue"
  },
})

export default ClubEvents;