import { Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//* GraphQL
import { useQuery, useMutation } from '@apollo/client';
import { getSurfSession_Q } from '../utils/queries';
import { DELETE_SURF_SESSION } from '../utils/mutations';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function EventDetail(nav) {

  const navigation = useNavigation();
  const [deleteSurfSession, { deleteSurfSessionID }] = useMutation(DELETE_SURF_SESSION);

  const SurfSessionID = nav.route.params.SurfSessionID;

  // console.log("Surf Session ID: " + SurfSessionID)


  const deleteSurfSessionRequest = async (event, reqSurfSessionID) => {
  
    // navigation.navigate('SurfSessionDetail', {
    //   SurfSessionID: reqSurfSessionID
    // });
    
    // console.log("Delete Session: " + reqSurfSessionID)

    const { surfSessionData } = await deleteSurfSession({

      variables: { 
        sessionId: reqSurfSessionID
      },
    });

    navigation.navigate('ListOfSessions')

  };

  const editSurfSessionRequest = async (event, reqSurfSessionID) => {
  
    // navigation.navigate('SurfSessionDetail', {
    //   SurfSessionID: reqSurfSessionID
    // });
    
    console.log("Edit Session: " + reqSurfSessionID)

  };

    //* Get requested surf session from Database
    var { loading, data } = useQuery(getSurfSession_Q, {
      variables: { sessionId: SurfSessionID },
    });


  if(!loading){

    const sessionData = data.getSurfSession
    // console.log(sessionData)

    return (

      <SafeAreaView style={{ flex: 1}}>
        
        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>

          <View style={styles.titleTextBorder}>
            <Text style={styles.surfSessionTitleText}> Surf Session</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.topText}>{sessionData.sessionLocation}</Text>
            <Text style={styles.midText}>{sessionData.sessionDate} ({sessionData.sessionTime})</Text>
            <Text style={styles.bottomText}>Session Length: {sessionData.sessionLength}</Text>
          </View>
          
          <View style={styles.infoBox}>
            <Text style={styles.topText}>Waves: {sessionData.waveSize} ft</Text>
            <Text style={styles.midText}>Sky Conditions: {sessionData.skyConditions}</Text>
            <Text style={styles.bottomText}>Tide: {sessionData.tideLevel} ft ({sessionData.tideDirection})</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.topText}>Model: {sessionData.surfboardModel}</Text>
            <Text style={styles.midText}>Shaper: {sessionData.surfboardShaper}</Text>
            <Text style={styles.midText}>Length: {sessionData.surfboardLengthFT}`{sessionData.surfboardLengthIN}</Text>
            <Text style={styles.midText}>Volume: {sessionData.surfboardVolume} L</Text>
            <Text style={styles.bottomText}>Fin Setup: {sessionData.surfboardFinConfig}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.sessionNotesTitle}>Session Notes</Text>
            <Text style={styles.sessionNotesDescription}>{sessionData.sessionNotes}</Text>
            <Text style={styles.sessionRating}>Session Rating: {sessionData.sessionRating}/5</Text>
          </View>

          <View style={styles.buttonZone}>
            <TouchableOpacity
              style={styles.sessionButton}
              onPress={() => navigation.navigate('ListOfSessions')}>
              <Text style={styles.buttonText}>List Of Sessions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.editButton}
              onPress={(event) => editSurfSessionRequest(event, sessionData._id)}>
              <Text style={styles.buttonText}>Edit Session</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={(event) => deleteSurfSessionRequest(event, sessionData._id)}>
              <Text style={styles.buttonText}>Delete Session</Text>
            </TouchableOpacity>

          </View>



          {/* <Text>Event Detail Page ({eventID})</Text> */}

          {/* <Text style={styles.eventTitleText}>{eventData.eventName}</Text> */}

          {/* <Image
            style={styles.eventPicture}
            source={{uri: eventData.eventPhotoURL}}
            /> */}

          {/* <Text style={styles.eventDateText}>{eventData.eventSlogan}</Text>
          <Text style={styles.eventDateText}>{eventData.eventDate}</Text> */}


          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ClubEvents')}>
            <Text style={styles.buttonText}>Club Events Home</Text>
          </TouchableOpacity> */}

        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>

    );
    }
}

const styles = StyleSheet.create({
  surfSessionTitleText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 20,
  },
  sessionNotesTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
  sessionNotesDescription: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: 'left',
    paddingHorizontal: 20,
    // marginTop: 10,
    // paddingBottom: 10,
  },
  sessionRating: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 20,
  },
  titleTextBorder: {
    // borderBottomWidth: 5,
    // borderBottomColor: "grey",
  },
  infoBox: {
    borderWidth: 5,
    borderColor: "grey",
  },
  topText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
  },
  midText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
  },
  bottomText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "white",
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
  sessionButton: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 50,
    width: "85%",
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 20,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: '#F25B5B',
    color: "#FFFFFF",
    height: 50,
    width: "50%",
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 30,
  },
  editButton: {
    alignItems: 'center',
    backgroundColor: '#DFE530',
    color: "#FFFFFF",
    height: 50,
    width: "50%",
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 20,
    // marginBottom: 10,
  },
  buttonZone: {
    justifyContent: 'center',
    alignItems: 'center',
  }

})

export default EventDetail;