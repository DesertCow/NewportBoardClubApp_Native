import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function CreateNewSession( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>

      <Header  style={{ position: "absolute"}}></Header>

      <ScrollView>
        <Text>Create New Surf Session</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>

  );

}

export default CreateNewSession;