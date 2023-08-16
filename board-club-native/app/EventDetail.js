import { Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';

//* GraphQL
import { getEvent_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function EventDetail(nav) {

  const eventID = nav.route.params.EventID;

      //* Get requested Event from Database
    var { loading, data } = useQuery(getEvent_Q, {
      variables: { eventId: eventID },
    });


  if(!loading){

    // console.log(data.getEvent)

    const eventData = data.getEvent

    return (

      <SafeAreaView style={{ flex: 1}}>
        
        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>
          {/* <Text>Event Detail Page ({eventID})</Text> */}

          <Text style={styles.eventTitleText}>{eventData.eventName}</Text>

          <Image
            style={styles.eventPicture}
            source={{uri: eventData.eventPhotoURL}}
            />

          <Text style={styles.eventDateText}>{eventData.eventSlogan}</Text>
          <Text style={styles.eventDateText}>{eventData.eventDate}</Text>

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

})

export default EventDetail;