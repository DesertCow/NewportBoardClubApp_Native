import { Text, SafeAreaView, StyleSheet, ScrollView, View, TextInput } from 'react-native';
import React from 'react';

//* Picker Import
import { Picker } from '@react-native-picker/picker';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function CreateNewSession( { navigation } ) {


  const [dateData, onDateChange] = React.useState();
  const [timeData, onTimeChange] = React.useState();
  const [locationData, onLocationChange] = React.useState();

  //* Drop Down Pickers
  const [skyConditions, setSkyConditions] = React.useState();
  const [waveHeight, setWaveHeight] = React.useState();
  const [tideFT, setTideFT] = React.useState();
  const [tideIN, setTideIN] = React.useState();
  const [tideDirection, setTideDirection] = React.useState();

  return (

    <SafeAreaView style={{ flex: 1}}>

      <Header  style={{ position: "absolute"}}></Header>

      {/* <ScrollView style={{ flex: 1, flexDirection: 'row', alignSelf: 'center'}}> */}
      <ScrollView>
        {/* <Text>Create New Surf Session</Text> */}

        <View style={styles.userInputBox1}>
          <Text style={styles.userInputTitle}>Date:</Text>
          <TextInput
            style={styles.userInput}
            onChangeText={onDateChange}
            value={dateData}
            defaultValue='MM/DD/YYYY'
            inputMode="text"
          />
        </View>

        <View style={styles.userInputBox1}>
          <Text style={styles.userInputTitle}>Time:</Text>
          <TextInput
            style={styles.userInput}
            onChangeText={onTimeChange}
            value={timeData}
            defaultValue='hh:mm aa'
            inputMode="text"
          />
        </View>

        <View style={styles.userInputBox1}>
          <Text style={styles.userInputTitle}>Location:</Text>
          <TextInput
            style={styles.userInput}
            onChangeText={onLocationChange}
            value={locationData}
            defaultValue='Location'
            inputMode="text"
          />
        </View>

        <View style={styles.dropDownBox}>
          <Text style={styles.dropdownBoxTitle}>Sky Conditions</Text>
          <Picker
            style={styles.picker}
            selectedValue={skyConditions}
            onValueChange={(itemValue, itemIndex) =>
              setSkyConditions(itemValue)
            }>
            <Picker.Item label="???" value="???" />
            <Picker.Item label="Sunny" value="Sunny" />
            <Picker.Item label="Partly Sunny" value="Partly Sunny" />
            <Picker.Item label="Cloudy" value="Cloudy" />
            <Picker.Item label="Foggy" value="Foggy" />
            <Picker.Item label="Rainy" value="Rainy" />
            <Picker.Item label="Thunderstorms" value="Thunderstorms" />
          </Picker>
        </View>

        <View style={styles.dropDownBox}>
          <Text style={styles.dropdownBoxTitle}>Wave Height</Text>
          <Picker
            style={styles.picker}
            selectedValue={waveHeight}
            onValueChange={(itemValue, itemIndex) =>
              setWaveHeight(itemValue)
            }>
            <Picker.Item label="???" value="???" />
            <Picker.Item label="0-1" value="0-1" />
            <Picker.Item label="1-2" value="1-2" />
            <Picker.Item label="2-3" value="2-3" />
            <Picker.Item label="3-4" value="3-4" />
            <Picker.Item label="4-5" value="4-5" />
            <Picker.Item label="5-6" value="5-6" />
            <Picker.Item label="6-7" value="6-7" />
            <Picker.Item label="7-8" value="7-8" />
            <Picker.Item label="8-9" value="8-9" />
            <Picker.Item label="10+" value="10+" />
          </Picker>
        </View>

        <View style={styles.tideDropDownBox}>
          <Text style={styles.dropdownBoxTitle}>Tide</Text>
          <Picker
            style={styles.picker}
            selectedValue={tideFT}
            onValueChange={(itemValue, itemIndex) =>
              setTideFT(itemValue)
            }>
            <Picker.Item label="-2" value="-2" />
            <Picker.Item label="-1" value="-1" />
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
          </Picker>
          <Text style={styles.dropdownBoxTitle}>.</Text>
          <Picker
            style={styles.picker}
            selectedValue={tideIN}
            onValueChange={(itemValue, itemIndex) =>
              setTideIN(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
          </Picker>
          <Text style={styles.dropdownBoxTitle}>Tide Direction</Text>
          <Picker
            style={styles.picker}
            selectedValue={tideDirection}
            onValueChange={(itemValue, itemIndex) =>
              setTideDirection(itemValue)
            }>
            <Picker.Item label="Rising" value="Rising" />
            <Picker.Item label="Falling" value="Falling" />
          </Picker>
        </View>

        <View style={styles.tideDropDownBox}>
          <Text style={styles.dropdownBoxTitle}>Session Length (H:MM)</Text>
          <Picker
            style={styles.picker}
            selectedValue={tideFT}
            onValueChange={(itemValue, itemIndex) =>
              setTideFT(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
          <Text style={styles.dropdownBoxTitle}>.</Text>
          <Picker
            style={styles.picker}
            selectedValue={tideIN}
            onValueChange={(itemValue, itemIndex) =>
              setTideIN(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="55" value="55" />
          </Picker>
        </View>        


      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>

  );

}
const styles = StyleSheet.create({
  userInputBox1: {
    borderStyle: "solid",
    borderWidth: 5,
    width: "100%", 
    maxHeight: 75,
    flexDirection: 'row',
    flex: 1,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userInputTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingRight: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  userInput: {
    width: "70%",
    fontSize: 20,
    height: 40,
    borderStyle: "solid",
    borderWidth: 5,
    padding: 5,
    marginVertical: 5,
  },
  dropdownBoxTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingRight: 10,
    textAlign: "center",
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  dropDownBox: {
    borderStyle: "solid",
    borderWidth: 5,
    width: "100%", 
    maxHeight: 100,
    // flexDirection: 'row',
    // flex: 1,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  picker: {
    marginBottom: Platform.OS === 'android' ? 20 : 10,
    width:150,
    // borderStyle: "solid",
    // borderWidth: 5,
  },
  tideDropDownBox: {
    borderStyle: "solid",
    borderWidth: 5,
    width: "100%",
    maxHeight: 350,
    // flexDirection: 'row',
    // flex: 1,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
export default CreateNewSession;