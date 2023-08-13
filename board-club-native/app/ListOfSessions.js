import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Footer from "../components/common/Footer";

function ListOfSession( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <Text>List Of Surf Session</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>

  );

}

export default ListOfSession;