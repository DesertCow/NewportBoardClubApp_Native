import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function ClubEvents( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>

      <Header  style={{ position: "absolute"}}></Header>

      <ScrollView>
        <Text>Club Events Page</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>
    
  );

}

export default ClubEvents;