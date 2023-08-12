import { Text, SafeAreaView, StyleSheet, Image, ScrollView, View, Linking } from 'react-native';

//* Import Assets
const PeterBelden = require('../assets/img/Peter_Belden.jpeg');
const SpencerPirdy = require('../assets/img/Spencer_Pirdy.jpeg');
const WillThompson = require('../assets/img/Will_Thompson.jpg');
const Clubhouse = require('../assets/img/NBC_Clubhouse.jpg');

function About( { navigation } ) {

  return (

    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.clubhousePhoto}
          source={Clubhouse}
        /> 
        <Text style={styles.clubHoursTitle}>Club Hours:</Text>
        <Text style={styles.clubHours}>8am - 6pm</Text>
        <Text style={styles.clubClosed}>Closed on Monday</Text>
        <Text style={styles.clubInfoPar}>
          The Board Club is a Newport Beach surf club that provides our members with unlimited access and exchanges to a large variety of quality surfboards from established shapers throughout California. From 7'2" single fins and old school longboards to the latest high-performance shortboards, every surfer now has the ultimate quiver for all wave conditions.
        </Text>
        <Text style={styles.clubInfoPar}>
          Membership also includes social events and activities, networking opportunities, surfboard design education, surf coaching, ocean skills and fitness training, photo and video surf sessions, and special discounts to local businesses throughout the Newport Beach community.
        </Text>
        <Text style={styles.staffTitle}>
          The Founder: Peter Belden
        </Text>
        <Image
          style={styles.staffIMG}
          source={PeterBelden}
        />
        <Text style={styles.staffTitle}>
          Staff: Spencer Pirdy
        </Text>
        <Image
          style={styles.staffIMG}
          source={SpencerPirdy}
        />
        <Text style={styles.staffTitle}>
          Staff: Will Thompson
        </Text>
        <Image
          style={styles.staffIMGLast}
          source={WillThompson}
        /> 
        <View style={styles.questionsBox}>
          <Text style={styles.questionsBoxText}>Any Questions? Give Us A Call</Text>
          <Text
            style={styles.phoneLink}
            onPress={() => {
              Linking.openURL('tel:${"9494387171"}');
            }}>
            (949) 438-7171
          </Text>
          {/* <Text Linking.openURL(`tel:${"9494387171"}`)> /Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  clubhousePhoto: {
    marginTop: 30,
    borderRadius: 15,
    alignSelf: 'center',
    width: "90%",
    height: 220,
  },
  clubHoursTitle: {
    textAlign: 'center',
    // fontWeight: 700,
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    marginTop: 20,
  },
  clubHours: {
    textAlign: 'center',
    fontSize: 28,
    color: "black",
    marginTop: 20,
  },
  clubClosed: {
    textAlign: 'center',
    fontSize: 35,
    color: "black",
    marginTop: 20,
    // fontWeight: 700,
    fontWeight: 'bold',
  },
  clubInfoPar: {
    textAlign: 'center',
    fontSize: 16,
    color: "black",
    marginTop: 30,
    paddingHorizontal: 30,
  },
  staffTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: "black",
    marginTop: 60,
    fontWeight: 'bold',
  },
  staffIMG: {
    alignSelf: 'center',
    // paddingHorizontal: 20,
    marginTop: 20,
    width: 350,
    height: 350,
    borderRadius: 20,
  },
  staffIMGLast: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50,
    width: 350,
    height: 350,
    borderRadius: 20, 
  },
  questionsBox: {
    alignSelf: 'center',
    width: "80%",
    // height: 100,
    backgroundColor: "grey",
    marginBottom: 50,
    borderStyle: "solid",
    borderWidth: 5,
  },
  questionsBoxText: {
    textAlign: 'center',
    fontSize: 18,
    color: "black",
    marginTop: 20,
    fontWeight: 'bold',
  },
  phoneLink: {
    textAlign: 'center',
    fontSize: 18,
    color: "blue",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  }
});

export default About;