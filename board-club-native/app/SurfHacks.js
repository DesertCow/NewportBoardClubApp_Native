import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Footer from "../components/common/Footer";

function SurfHacks( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <Text>Surf Hacks Page</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>
    
  );

}

export default SurfHacks;