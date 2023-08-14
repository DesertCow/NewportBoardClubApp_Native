import { Text, SafeAreaView, StyleSheet, ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

//* Picker Import
import { Picker } from '@react-native-picker/picker';

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function CreateNewSession( { navigation } ) {

  //* Time/Location Data
  const [dateData, onDateChange] = React.useState();
  const [timeData, onTimeChange] = React.useState();
  const [locationData, onLocationChange] = React.useState();

  //* Session Conditions Data
  const [skyConditions, setSkyConditions] = React.useState();
  const [waveHeight, setWaveHeight] = React.useState();
  const [tideFT, setTideFT] = React.useState();
  const [tideIN, setTideIN] = React.useState();
  const [tideDirection, setTideDirection] = React.useState();
  const [sessionLengthHours, setSessionLengthHours] = React.useState();
  const [sessionLengthMinutes, setSessionLengthMinutes] = React.useState();
  
  //* Surfboard Data
  const [shaper, setShaper] = React.useState();
  const [modelData, setModel] = React.useState();
  const [surfboardLengthFT, setSurfboardLengthFT] = React.useState();
  const [surfboardLengthIN, setSurfboardLengthIN] = React.useState();
  const [surfboardVolumeFT, setSurfboardVolumeFT] = React.useState();
  const [surfboardVolumeIN, setSurfboardVolumeIN] = React.useState();
  const [finsetup, setFinsetup] = React.useState();

  //* Session Notes
  const [sessionNotes, setSessionNotes] = React.useState();
  const [sessionRating, setSessionRating] = React.useState();



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
            selectedValue={sessionLengthHours}
            onValueChange={(itemValue, itemIndex) =>
              setSessionLengthHours(itemValue)
            }>
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
          <Text style={styles.dropdownBoxTitle}>:</Text>
          <Picker
            style={styles.picker}
            selectedValue={sessionLengthMinutes}
            onValueChange={(itemValue, itemIndex) =>
              setSessionLengthMinutes(itemValue)
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

        <View style={styles.surfBoardInfo}>
          
          <View>
            <Text style={styles.dropdownBoxTitle}>Shaper: </Text>
            <Picker
              style={styles.picker}
              selectedValue={shaper}
              onValueChange={(itemValue, itemIndex) =>
                setShaper(itemValue)
              }>
              <Picker.Item label="Baltierra Surfboards" value="Baltierra Surfboards" />
              <Picker.Item label="Solid Surf" value="Solid Surf" />
              <Picker.Item label="Almond Surfboards" value="Almond Surfboards" />
              <Picker.Item label="Tanner Surfboards" value="Tanner Surfboards" />
              <Picker.Item label="Guy Takayama" value="Guy Takayama" />
              <Picker.Item label="Robert August" value="Robert August" />
              <Picker.Item label="Dano Surfboards" value="Dano Surfboards" />
            </Picker>
          </View>

          <View>
            <Text style={styles.userInputTitle}>Model:</Text>
            <TextInput
              style={styles.userInput}
              onChangeText={setModel}
              value={modelData}
              defaultValue=''
              inputMode="text"
            />
          </View>

          <View>
            <Text style={styles.dropdownBoxTitle}>Length: </Text>
            <Picker
              style={styles.picker}
              selectedValue={surfboardLengthFT}
              onValueChange={(itemValue, itemIndex) =>
                setSurfboardLengthFT(itemValue)
              }>
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
            </Picker>
            <Text style={styles.dropdownBoxTitle}>FT</Text>
            <Picker
              style={styles.picker}
              selectedValue={surfboardLengthIN}
              onValueChange={(itemValue, itemIndex) =>
                setSurfboardLengthIN(itemValue)
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
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
            </Picker>
            <Text style={styles.dropdownBoxTitle}>IN</Text>
          </View>

          <View>
            <Text style={styles.dropdownBoxTitle}>Volume: </Text>
            <Picker
              style={styles.picker}
              selectedValue={surfboardVolumeFT}
              onValueChange={(itemValue, itemIndex) =>
                setSurfboardVolumeFT(itemValue)
              }>
              <Picker.Item label="20" />
              <Picker.Item label="21" />
              <Picker.Item label="22" />
              <Picker.Item label="23" />
              <Picker.Item label="24" />
              <Picker.Item label="25" />
              <Picker.Item label="26" />
              <Picker.Item label="27" />
              <Picker.Item label="28" />
              <Picker.Item label="29" />
              <Picker.Item label="30" />
              <Picker.Item label="31" />
              <Picker.Item label="32" />
              <Picker.Item label="33" />
              <Picker.Item label="34" />
              <Picker.Item label="35" />
              <Picker.Item label="36" />
              <Picker.Item label="37" />
              <Picker.Item label="38" />
              <Picker.Item label="39" />
              <Picker.Item label="40" />
            </Picker>
            <Text style={styles.dropdownBoxTitle}>.</Text>
            <Picker
              style={styles.picker}
              selectedValue={surfboardVolumeIN}
              onValueChange={(itemValue, itemIndex) =>
                setSurfboardVolumeIN(itemValue)
              }>
              <Picker.Item label="0" />
              <Picker.Item label="1" />
              <Picker.Item label="2" />
              <Picker.Item label="3" />
              <Picker.Item label="4" />
              <Picker.Item label="5" />
              <Picker.Item label="6" />
              <Picker.Item label="7" />
              <Picker.Item label="8" />
              <Picker.Item label="9" />
            </Picker>
            <Text style={styles.dropdownBoxTitle}>L</Text>
          </View>

          <View>
            <Text style={styles.dropdownBoxTitle}>Fin Setup</Text>
            <Picker
              style={styles.picker}
              selectedValue={finsetup}
              onValueChange={(itemValue, itemIndex) =>
                setFinsetup(itemValue)
              }>
              <Picker.Item label="Single" />
              <Picker.Item label="Twin" />
              <Picker.Item label="Thruster" />
              <Picker.Item label="2+1" />
              <Picker.Item label="Quad" />
            </Picker>            
          </View>

        </View>
          
        <View style={styles.sessionNotes}>
          <Text style={styles.dropdownBoxTitle}>Session Notes</Text>
           <TextInput
            style={styles.sessionNotesInput}
            onChangeText={setSessionNotes}
            multiline={true}
            numberOfLines={3}
            value={sessionNotes}
            defaultValue=''
            inputMode="text"
          />
        </View>

        <View style={styles.userInputBox1}>
          <Text style={styles.dropdownBoxTitle}>Session Rating</Text>
          <Picker
            style={styles.picker}
            selectedValue={sessionRating}
            onValueChange={(itemValue, itemIndex) =>
              setSessionRating(itemValue)
            }>
            <Picker.Item label="0" />
            <Picker.Item label="1" />
            <Picker.Item label="2" />
            <Picker.Item label="3" />
            <Picker.Item label="4" />
            <Picker.Item label="5" />
          </Picker>            
        </View>

        <View style={styles.saveResetButtonsBox}>

          <TouchableOpacity
            style={styles.saveButton}
            // onPress={() => navigation.navigate('ClubEvents')}
            >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resetButton}
            // onPress={() => navigation.navigate('ClubEvents')}
            >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>

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
  surfBoardInfo: {
    borderStyle: "solid",
    borderWidth: 5,
    width: "100%", 
    // maxHeight: 650,
    // flexDirection: 'row',
    // flex: 1,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sessionNotes: {
    borderStyle: "solid",
    borderWidth: 5,
    width: "100%", 
    height: 250,
    flexDirection: 'row',
    flex: 1,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sessionNotesInput: {
    height: 300,
    // numberOfLines: 5,
  },
  saveResetButtonsBox: {
    flex: 1, 
    alignItems: 'center', 
    // justifyContent: 'center'
    flexDirection: 'row',
    height: 100,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    borderStyle: "solid",
    borderWidth: 5,
    width: "100%", 
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: "40%",
    textAlign: "center",
    borderRadius: 25,
    // marginVertical: 25,
    backgroundColor: "green"
  },
  resetButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: "40%",
    textAlign: "center",
    borderRadius: 25,
    // marginVertical: 25,
    backgroundColor: "red"
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default CreateNewSession;