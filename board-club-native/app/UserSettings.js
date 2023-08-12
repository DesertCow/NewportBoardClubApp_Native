import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

//* Components Import
import Footer from "../components/common/Footer";

function UserSettings( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>

      <ScrollView>
        <Text>User Settings Page</Text>
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>
  );

}

export default UserSettings;