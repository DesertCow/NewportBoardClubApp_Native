import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const MemberName = "Clayton Skaggs"
const SessionCountData = 3;




function SurfLog() {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0F2F7"}}>

      <Header  style={{ position: "absolute"}}></Header>

      <ScrollView>
        
        <View>
          <Text style={styles.memberName}>{MemberName}</Text>
        </View>

        <View>
          <Image
          style={styles.memberProfilePicture}
          source={{uri:"https://theboardclubprofilepictures.s3.us-west-1.amazonaws.com/64b5dc72997c339bf80a95f6.jpg" }}
          />
        </View>

        <View>
          <Text style={styles.surfSessionTitle}>Sessions Stats</Text>
        </View>

        <View style={styles.sessionStatsBox}>
          <Text style={styles.sessionData}>
            Session Count: {SessionCountData}
          </Text>

          <Text style={styles.sessionData}>
            Favroite Board: 6'0 DHD Phoenix
          </Text>

          <Text style={styles.sessionData}>
            Favroite Surf Spot: 36th ST
          </Text>

          <Text style={styles.sessionData}>
            Longest Session: 1:36
          </Text>

          <Text style={styles.sessionData}>
            Last Session: 6/12/2023
          </Text>
        </View>

        <View style={styles.buttonView}>

          <TouchableOpacity
            style={styles.sessionButton}
            onPress={() => navigation.navigate('CreateNewSession')}>
            <Text style={styles.buttonText}>Create New Session</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sessionButton}
            onPress={() => navigation.navigate('ListOfSessions')}>
            <Text style={styles.buttonText}>List Of Sessions</Text>
          </TouchableOpacity>
          
        </View>

        
      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  memberName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    marginTop: 20,
  },
  memberProfilePicture: {
    marginTop: 30,
    alignSelf: 'center',
    // width: "90%",
    height: 150,
    width: 150,
    borderWidth: 10,
    borderColor: "#CACACA",
    borderRadius: 30,
  },
  surfSessionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    marginTop: 40,
  },
  sessionStatsBox: {
    alignSelf: 'center',
    marginTop: 20,
    width: "80%",
    borderStyle: "solid",
    borderWidth: 10,
  },
  sessionData: {
    alignSelf: 'center',
    fontSize: 18,
    // fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 30,
  },
  sessionButton: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
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

export default SurfLog;