import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Footer from "../components/common/Footer";

function ClubEvents( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <Text>Club Events Page</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>
    
  );

}

export default ClubEvents;