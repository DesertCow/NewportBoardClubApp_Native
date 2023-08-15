import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

import SwitchSelector from "react-native-switch-selector";

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function ClubEvents( { navigation } ) {

  const [bgColor, setBgColor] = React.useState("#E4F1FF");
  const [switchColor, setSwitchColor] = React.useState("#51A7FF");
  const [switchButtonColor, setSwitchButtonColor] = React.useState("#0480FF");

  const switchOptions = [
  { label: "Current Events", value: "Current" },
  { label: "Previous Events", value: "Previous" }
];

function setBackgroundColor ({value}){
  console.log(value)

  if(value == "Current"){
      setBgColor("#E4F1FF")
      setSwitchColor("#51A7FF")
      setSwitchButtonColor("#0480FF")
  }
  else {
    setBgColor("#FFF1E3")
    setSwitchColor("#FFA951")
    setSwitchButtonColor("#FF8304")
  }

  console.log(bgColor);
}

  return (

    // <SafeAreaView style={{ flex: 1, Platform.OS === 'android' ? 20 : 0}}>
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor}}>

      <Header  style={{ position: "absolute"}}></Header>

      <ScrollView>

        <View style={styles.slideBox}>
          {/* <Text style={styles.slideBoxText}>Current Events</Text> */}
          <SwitchSelector
            options={switchOptions}
            initial={0}
            onPress={value => setBackgroundColor({value})}
            // buttonColor={colors.blue}
            // backgroundColor={"#51A7FF"}
            backgroundColor={switchColor}
            buttonColor={switchButtonColor}
            style={styles.switchStyle}
            fontSize={18}
            bold={true}
          />
          {/* <Text style={styles.slideBoxText}>Previous Events</Text> */}
        </View>

      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>
    
  );

}
const styles = StyleSheet.create({
  slideBox: {
    // borderStyle: "solid",
    // borderWidth: 5,
    width: "100%",
    minHeight: 75,
    maxHeight: 75,
    flexDirection: 'row',
    flex: 1,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  slideBoxText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  switchStyle: {
    width: "90%",
    
  },
})

const colors = StyleSheet.create({
  blue: {
    backgroundColor: "blue"
  },
})

export default ClubEvents;