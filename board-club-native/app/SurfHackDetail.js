import { Text, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//* GraphQL
import { getSurfHack_Q } from '../utils/queries';
import { useQuery } from '@apollo/client';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function SurfHackDetail( nav ) {

  const navigation = useNavigation();

  const surfHackID = nav.route.params.HackID;

  //* Get requested Event from Database
  var { loading, data } = useQuery(getSurfHack_Q, {
    variables: { surfHackId: surfHackID },
  });

  if(!loading){



    const hackData = data.getSurfHack

    return (

      <SafeAreaView style={{ flex: 1}}>
        
        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>

          <Text style={styles.hackTitleText}>{hackData.hackTitle}</Text>

          <Image
            style={styles.hackPicture}
            source={{uri: hackData.hackPhotoURL}}
          />




          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SurfHacks')}>
            <Text style={styles.buttonText}>Surf Hack Home</Text>
          </TouchableOpacity>

        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>

    );
  }



}

const styles = StyleSheet.create({
  hackPicture: {
    marginVertical: 30,
    alignSelf: 'center',
    height: 250,
    width: 300,
    borderRadius: 30,
  },
  hackTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "white",
    height: 80,
    width: "85%",
    marginTop: 40,
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    color: "#FFFFFF",
    justifyContent: 'center',
  },
})
export default SurfHackDetail;