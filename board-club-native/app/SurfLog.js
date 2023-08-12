import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Footer from "../components/common/Footer";

function SurfLog( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <Text>Surf Log Page</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>
  );

}

export default SurfLog;