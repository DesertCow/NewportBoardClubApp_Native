import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Footer from "../components/common/Footer";

function CreateNewSession( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <Text>Create New Surf Session</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>

  );

}

export default CreateNewSession;