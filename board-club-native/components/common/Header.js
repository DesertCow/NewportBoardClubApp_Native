import { StyleSheet, View, Image, Text, Platform, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

//* GraphQL
import { useQuery } from '@apollo/client';
import { getWX_Q } from '../../utils/queries';

//* Component Import
import WxWidget from './WxWidget';
import Modal from "react-native-modal";

//* Icon Import
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons   } from '@expo/vector-icons';

//* Import Assets
const boardClubIcon = require('../../assets/img/BC_Logo_Clear_1.png');
const tideIcon = require('../../assets/icons/tide_icon.png')
const tideRiseIcon = require('../../assets/icons/Tide_Rising.png')
const tideFallIcon = require('../../assets/icons/Tide_Falling.png')



function Header() {

  const navigation = useNavigation();
  const [wxDisplayStatus, setWxDisplayStatus] = React.useState(false);

  let tideDirIcon;

  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getWX_Q)

  if(!loading){

    let currentClubStatus;

    if(data.getWX.clubStatus == true)
    {
      currentClubStatus = "Open"
    }else{
      currentClubStatus = "Closed"
    }
    
    //* Logic for Tide Direction Icon
    if (data.getWX.tideRise) {
        tideDirIcon = <Image style={styles.tideDirectionIcon} source={tideRiseIcon}/>
        // console.log("Tide Rising")
    } 

    if (!data.getWX.tideRise) {
        tideDirIcon = <Image style={styles.tideDirectionIcon} source={tideFallIcon}/>
        // console.log("Tide Falling")
    }

    return(

      <View style={styles.header}>

        <View style={styles.WxWidget}>
          <Modal isVisible={wxDisplayStatus}>
            <Pressable onPress={() => setWxDisplayStatus(false)}>
             <WxWidget></WxWidget> 
            </Pressable>
          </Modal>
        </View>
        

        <View style={styles.logoCol}>
          <Image
            style={styles.NBCLogo}
            source={boardClubIcon}
          />
          <Text style={styles.clubHouseStatusText}> Club House: <Text style={{color:  currentClubStatus === 'Open' ? "green" : "red"}}>{currentClubStatus}</Text></Text>
        </View>

        <Pressable onPress={() => setWxDisplayStatus(true)}>
          <View style={styles.wxBoxCol}>
            <View style={styles.wxBoxRow}>
              <Image style={styles.tideIcon} source={tideIcon}/>
              <Feather  style={styles.windIcon} name="wind" size={30} color="black" />
              <Text style={styles.wxDataWindText}> {data.getWX.wind} mph</Text>
            </View>

            <View style={styles.wxBoxRow}>
              <Text style={styles.wxDataTideText}> {data.getWX.tideMSL} ft</Text>
              <Ionicons name="sunny" size={24} color="black" />
              <Text style={styles.wxDataTempText}> {data.getWX.airTemp} &deg;F</Text>
            </View>

            <View style={styles.wxBoxRow}>
              {tideDirIcon}
              <MaterialCommunityIcons style={styles.waterTempIcon} name="coolant-temperature" size={27} color="black" />
              <Text style={styles.wxDataWaterTempText}> {data.getWX.waterTemp} &deg;F</Text>
            </View>
            
          </View>
        </Pressable>
      </View>

    )
  }
};


const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#D8D8D8",
    maxHeight: Platform.OS === 'android' ? 170 : 130,
    minHeight: Platform.OS === 'android' ? 170 : 130,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  clubHouseStatusText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
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
    paddingHorizontal: 5,
    flexDirection: 'column',
    marginTop: Platform.OS === 'android' ? 60 : 10,
  },
  wxBoxRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  wxDataText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  wxDataWindText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  wxDataTideText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 3,
  },
  wxDataTempText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 1,
  },
  wxDataWaterTempText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 3,
  },
  NBCLogo: {
    width: 175, 
    height: 75,
  },
  tideIcon: {
    marginLeft: 13,
    width: 30,
    height: 30,
  },
  tideDirectionIcon: {
    marginLeft: 8,
    // paddingBottom: 10,
    width: 30,
    height: 30,
  },
  windIcon: {
     marginLeft: 13,
  },
  waterTempIcon: {
     marginLeft: 4,
  },
  WxWidget: {
    // justifyContent: 'center',
    // alignItems: "center",
  }
});


export default Header;