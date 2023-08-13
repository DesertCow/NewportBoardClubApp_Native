
import { Link, Stack } from 'expo-router';
import { Image, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";




function HomeScreen( { navigation } ) {

  return (
    <SafeAreaView style={{ flex: 1}}>

      <Header  style={{ position: "absolute"}}></Header>

      <ScrollView>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

          <TouchableOpacity
            style={styles.buttonTop}
            onPress={() => navigation.navigate('ClubEvents')}>
            <Text style={styles.buttonText}>Club Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SurfLog')}>
            <Text style={styles.buttonText}>Surf Log</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SurfHacks')}>
            <Text style={styles.buttonText}>Surf Hacks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NewportSurfMap')}>
            <Text style={styles.buttonText}>Newport Surf Map</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Rentals')}>
            <Text style={styles.buttonText}>Rentals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonBottom}
            onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            title="SurfLog"
            style={styles.button}
            onPress={() => navigation.navigate('SurfLog')}
          </TouchableOpacity> */}
        </View>

      </ScrollView>

      <Footer></Footer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonTop: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonBottom: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    color: "#FFFFFF",
    justifyContent: 'center',
  },
});

export default HomeScreen;
