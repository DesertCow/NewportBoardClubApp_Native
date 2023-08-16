import { Text, SafeAreaView, StyleSheet, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//* GraphQL
import { useQuery } from '@apollo/client';
import { getSurfHackList_Q } from '../utils/queries';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function SurfHacks() {

  var finalSurfHackListView = []
  const navigation = useNavigation();

  //* =========== Event Handlers ===========

  const displayHackDetails = async (event, reqSurfHackID) => {
  
    navigation.navigate('SurfHackDetail', {
      HackID: reqSurfHackID
    });

  };

  //* Get List of surf hacks for user from Database
  var { loading, data } = useQuery(getSurfHackList_Q);

  //* Build Events View based off passed Event Data
  function buildSurfHackBTN(surfHackData){

    //* Generate IMG and Button for each event
    finalSurfHackListView.push(

      <View style={styles.hackDisplayBox} key={surfHackData._id}>
        
        <Text style={styles.hackTitleText}>{surfHackData.hackTitle}</Text>

        <Image
        style={styles.hackPicture}
        source={{uri: surfHackData.hackPhotoURL}}
        />

        <TouchableOpacity
          style={styles.hackButton}
          // backgroundColor={switchColor}
          onPress={(event) => displayHackDetails(event, surfHackData._id)}>
          <Text style={styles.buttonText}>Surf Hack Details</Text>
        </TouchableOpacity>

      </View>
    )
  }


  if(!loading){

    let surfHackList = data.getSurfHackList

    //* Lopp over each current event
    surfHackList.forEach(buildSurfHackBTN)

    return (

      <SafeAreaView style={{ flex: 1}}>

        <Header  style={{ position: "absolute"}}></Header>

        <ScrollView>
          <Text style={styles.surfHacksTitle}>Surf Hacks</Text>

          <View>
            {finalSurfHackListView}
          </View>

        </ScrollView>
        
        <Footer></Footer>

      </SafeAreaView>
      
    );

  }

}
const styles = StyleSheet.create({
  surfHacksTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    marginVertical: 10
  },
  hackDisplayBox: {
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: "#6f6f6f75",
    justifyContent: "center"
    
  },
  hackPicture: {
    marginVertical: 30,
    alignSelf: 'center',
    height: 250,
    width: 300,
    borderRadius: 30,
  },
  hackTitleText: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 20,
  },
  hackButton: {
    alignItems: 'center',
    // backgroundColor: "#51A7FF",
    backgroundColor: "#6f6f6f75",
    color: "#FFFFFF",
    height: 50,
    width: "85%",
    marginLeft: "8%",
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 20,
    
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  }
})

export default SurfHacks;