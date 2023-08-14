import { StyleSheet, View, Image, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//* Icon Import
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons   } from '@expo/vector-icons';

//* Import Assets
const boardClubIcon = require('../../assets/img/BC_Logo_Clear_1.png');


//? Temp Status set till API call working
const ClubOpen = false;



function Header() {

  const navigation = useNavigation();

  let clubOpenText = "Closed";

  if(ClubOpen) {
    clubOpenText = "Open";
  }
  else {
    clubOpenText = "Closed";
  }

  console.log(clubOpenText)

  return(

    <View style={styles.header}>

      <View style={styles.logoCol}>
        <Image
          style={styles.NBCLogo}
          source={boardClubIcon}
        />
        <Text style={styles.clubHouseStatusText}> Club House: <Text style={styles.clubHouseColoredText}>{clubOpenText}</Text></Text>
      </View>

      <View style={styles.wxBoxCol}>
        <View style={styles.wxBoxRow}>
          <MaterialCommunityIcons name="waves-arrow-up" size={30} color="black" />
          <Feather name="wind" size={30} color="black" />
          <Text style={styles.wxDataText}> 4mph</Text>
        </View>

         <View style={styles.wxBoxRow}>
          <Text style={styles.wxDataText}> 3.9 ft</Text>
          <Ionicons name="sunny" size={24} color="black" />
          <Text style={styles.wxDataText}> 73 &deg;F</Text>
        </View>

        <View style={styles.wxBoxRow}>
          <MaterialCommunityIcons name="waves-arrow-up" size={30} color="black" />
          <MaterialCommunityIcons name="coolant-temperature" size={30} color="black" />
          <Text style={styles.wxDataText}> 65 &deg;F</Text>
        </View>
        
      </View>

    </View>

  )
};


const styles = StyleSheet.create({
  header: {
    // marginTop: 60,
    flex: 1,
    backgroundColor: "#D8D8D8",
    // paddingTop: 30,
    // paddingBottom: 100,
    // Platform.OS === 'android' ? StatusBar.currentHeight - 20 : undefined,
    // alignItems: 'left',
    // height: 150,
    // maxHeight: 170,
    maxHeight: Platform.OS === 'android' ? 170 : 130,
    minHeight: Platform.OS === 'android' ? 170 : 130,
    // opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingBottom: 40
  },
  clubHouseStatusText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  clubHouseColoredText: {
    // color: "green"
    color: ClubOpen === true ? "green" : "red",
  },
  logoCol: {
    alignSelf: "flex-start",
    flex: 1,
    flexDirection: 'column',
    marginTop: Platform.OS === 'android' ? 60 : 20,
    marginLeft: 10,
  },
  wxBoxCol: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'column',
    marginTop: Platform.OS === 'android' ? 60 : 10,
    // marginLeft: 10,
  },
  wxBoxRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight: 50,
    // marginTop: 5,
    // paddingLeft: 10,
  },
  wxDataText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  NBCLogo: {
    width: 175, 
    height: 75, 
    // marginBottom: 50, 
    // marginTop: 60,
    // marginLeft: 10,
  }
});


export default Header;