import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function EventDetail(nav) {

  const EventID = nav.route.params.EventID;

  // console.log("EventID = " + EventID)
  console.log(nav.route.params.EventID)

  return (

    <SafeAreaView style={{ flex: 1}}>
      
      <Header  style={{ position: "absolute"}}></Header>

      <ScrollView>
        <Text>Event Detail Page ({EventID})</Text>
        {/* <Text>Event Detail Page</Text> */}
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>

  );

}

export default EventDetail;