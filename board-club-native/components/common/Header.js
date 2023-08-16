import { StyleSheet, View, Image, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

//* GraphQL
import { useQuery } from '@apollo/client';
import { getWX_Q } from '../../utils/queries';

//* Icon Import
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons   } from '@expo/vector-icons';

//* Import Assets
const boardClubIcon = require('../../assets/img/BC_Logo_Clear_1.png');
const tideIcon = require('../../assets/icons/tide_icon.png')
const tideRiseIcon = require('../../assets/icons/Tide_Rising.png')
const tideFallIcon = require('../../assets/icons/Tide_Falling.png')


function Header() {

  const navigation = useNavigation();

  let tideDirIcon;

  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getWX_Q)

  if(!loading){

    let currentClubStatus;

    if(data.getWX.clubStatus == true)
    {
      currentClubStatus = "Open"
      // setClubOpen(true)
      // currentClubStatus = "Closed"
    }else{
      currentClubStatus = "Closed"
      // setClubOpen(false)
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

        <View style={styles.logoCol}>
          <Image
            style={styles.NBCLogo}
            source={boardClubIcon}
          />
          <Text style={styles.clubHouseStatusText}> Club House: <Text style={{color:  currentClubStatus === 'Open' ? "green" : "red"}}>{currentClubStatus}</Text></Text>
        </View>

        <View style={styles.wxBoxCol}>
          <View style={styles.wxBoxRow}>
            <Image style={styles.tideIcon} source={tideIcon}/>
            <Feather name="wind" size={30} color="black" />
            <Text style={styles.wxDataText}> {data.getWX.wind} mph</Text>
          </View>

          <View style={styles.wxBoxRow}>
            <Text style={styles.wxDataText}> {data.getWX.tideMSL} ft</Text>
            <Ionicons name="sunny" size={24} color="black" />
            <Text style={styles.wxDataText}> {data.getWX.airTemp} &deg;F</Text>
          </View>

          <View style={styles.wxBoxRow}>
            {tideDirIcon}
            <MaterialCommunityIcons name="coolant-temperature" size={30} color="black" />
            <Text style={styles.wxDataText}> {data.getWX.waterTemp} &deg;F</Text>
          </View>
          
        </View>

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
  clubHouseColoredText: {
    // color: ClubOpen === true ? "green" : "red",
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
    paddingHorizontal: 20,
    flexDirection: 'column',
    marginTop: Platform.OS === 'android' ? 60 : 10,
  },
  wxBoxRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wxDataText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  NBCLogo: {
    width: 175, 
    height: 75,
  },
  tideIcon: {
    width: 30,
    height: 30,
  },
  tideDirectionIcon: {
    width: 40,
    height: 40,
  }
});


export default Header;