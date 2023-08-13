import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";




function Rentals( { navigation } ) {

  return (

    <SafeAreaView style={{ flex: 1}}>

      <Header  style={{ position: "absolute"}}></Header>
      
      <ScrollView>

        <Text style={styles.rentalPageTitle}>Rental Pricing</Text>

        <Text style={styles.rentalInfoPar}>
           Includes <Text style={{ textDecorationLine: 'underline'}}>unlimited</Text> surfboard exchanges during your rental period. Access to lockers, an outdoor rinse shower, and a hot indoor shower.
        </Text>

        {/* <View style={styles.rentalPricesBox}>
          <Text> TEST TEST</Text>
        </View> */}

        <View style={styles.rentalPriceContainer}>

          <View style={ styles.rentalRow}>
            <View>
              <Text style={ styles.rentalText}>                   </Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>4hrs</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>24hrs</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>Week</Text>
            </View>
          </View>

          <View style={ styles.rentalRow}>
            <View>
              <Text style={ styles.rentalText} >Longboard</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$35</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$45</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$180</Text>
            </View>
          </View>

          <View style={ styles.rentalRow}>
            <View>
              <Text style={ styles.rentalText} >Shortboard</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$35</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$45</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$180</Text>
            </View>
          </View>

          <View style={ styles.rentalRow}>
            <View>
              <Text style={ styles.rentalText} >Soft Top    </Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$25</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$30</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$100</Text>
            </View>
          </View>

          <View style={ styles.rentalRow}>
            <View>
              <Text style={ styles.rentalText} >Wetsuit    </Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$20</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$25</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$75</Text>
            </View>
          </View>

          <View style={ styles.rentalRow}>
            <View>
              <Text style={ styles.rentalText} >Beach Item</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$10</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$15</Text>
            </View>
            <View>
              <Text style={ styles.rentalText}>$35</Text>
            </View>
          </View>
          <View style={ styles.rentalRow}>

          </View>
        </View>

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

      <Footer></Footer>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  rentalPageTitle: {
    textAlign: 'center',
    // fontWeight: 700,
    fontWeight: 'bold',
    fontSize: 35,
    color: "black",
    marginTop: 20,
  },
  rentalInfoPar: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: "black",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  rentalPricesBox: {
    alignSelf: 'center',
    width: "90%",
    height: 100,
    // backgroundColor: "grey",
    marginBottom: 50,
    marginTop: 50,
    borderStyle: "solid",
    borderWidth: 5,
  },
  rentalPriceContainer: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center', 
    flexDirection: 'column', 
    flex: 1,
    width: "90%",
    height: 120,
    borderStyle: "solid",
    borderWidth: 5,
    marginTop: 50,
  },
  rentalRow: {
    // alignSelf: 'center',
    justifyContent: 'space-evenly',
    // alignItems: 'center', 
    flexDirection: 'row', 
    flex: 1,
    width: "115%",
    marginTop: 15,
  },
  rentalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  questionsBox: {
    alignSelf: 'center',
    width: "80%",
    // height: 100,
    backgroundColor: "grey",
    marginBottom: 50,
    marginTop: 40,
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

export default Rentals;