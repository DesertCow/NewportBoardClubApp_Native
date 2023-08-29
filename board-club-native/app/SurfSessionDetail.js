import { Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
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

  console.log("Surf Session ID: " + SurfSessionID)

    //* Get requested surf session from Database
    var { loading, data } = useQuery(getSurfSession_Q, {
      variables: { sessionId: SurfSessionID },
    });


  if(!loading){

    const sessionData = data.getSurfSession
    console.log(sessionData.sessionDate)

    return (

      <SafeAreaView style={{ flex: 1}}>
        
        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>

          <Text style={styles.surfSessionTitleText}> Surf Session</Text>
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
  eventPicture: {
    marginVertical: 30,
    alignSelf: 'center',
    height: 250,
    width: 300,
    borderRadius: 30,
  },
  surfSessionTitleText: {
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

})

export default EventDetail;