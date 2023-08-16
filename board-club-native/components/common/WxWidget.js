import { StyleSheet, View, Image, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

//* GraphQL
import { useQuery } from '@apollo/client';
import { getWidgetWX_Q } from '../../utils/queries';

import Modal from "react-native-modal";

//* Icon Import
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons   } from '@expo/vector-icons';

//* Import Assets
const boardClubIcon = require('../../assets/img/BC_Logo_Clear_1.png');
const tideIcon = require('../../assets/icons/tide_icon.png')
const tideRiseIcon = require('../../assets/icons/Tide_Rising.png')
const tideFallIcon = require('../../assets/icons/Tide_Falling.png')
const surfWaveIcon = require('../../assets/icons/surf-wave-icon.jpg')


function WxWidget() {

  //* Get Latest Weather Data from App Server
  var { loading, data } = useQuery(getWidgetWX_Q)

  let tideDirIcon;


  if(!loading){




    //* Logic for Tide Direction Icon
    if (data.getWidgetWX.tideRise) {
        tideDirIcon = <Image style={styles.tideDirectionIcon} source={tideRiseIcon}/>
        // console.log("Tide Rising")
    } 

    if (!data.getWidgetWX.tideRise) {
        tideDirIcon = <Image style={styles.tideDirectionIcon} source={tideFallIcon}/>
        // console.log("Tide Falling")
    }

    return (

          <View style={styles.wxWidget}>

            <View style={styles.wxBoxCol}>

              <View style={styles.wxBoxRow}>
                <MaterialCommunityIcons style={styles.waterTempIcon} name="coolant-temperature" size={27} color="black" />
                <Text style={styles.wxDataTempText}> {data.getWidgetWX.airTemp} &deg;F</Text>
              </View>

              <View style={styles.wxBoxRow}>
                <Ionicons name="sunny" size={24} color="black" />
                <Text style={styles.wxDataTempText}> {data.getWidgetWX.airTemp} &deg;F</Text>
              </View>
              
              <View style={styles.wxBoxRow}>
                <Feather  style={styles.windIcon} name="wind" size={30} color="black" />
                <Text style={styles.wxDataWindText}> {data.getWidgetWX.wind} mph</Text>
              </View>

              <View style={styles.wxBoxRow}>
                <Image style={styles.tideIcon} source={tideIcon}/>
                <Text style={styles.wxDataTideText}> {data.getWidgetWX.tideMSL} ft</Text>
              </View>

              <View style={styles.wxBoxRow}>
                {tideDirIcon}
                <Text style={styles.wxDataNextTideText} >{data.getWidgetWX.nextTideHeight} FT {data.getWidgetWX.nextTideType} at {data.getWidgetWX.nextTideTime}</Text>
              </View>

            </View>

            <View style={styles.wxSurfCol}>
              
              <View style={styles.wxBoxRow}>
                <Image style={styles.surfWaveIcon} source={surfWaveIcon}/>
              </View>

              <View style={styles.wxSurfRow1}>
                <Text style={styles.surfSpotText}> Blackies: </Text>
                <Text style={styles.surfSpotDataText}> {data.getWidgetWX.surfHeightBlackies} FT</Text>
              </View>

              <View style={styles.wxSurfRow}>
                <Text style={styles.surfSpotText}> 36th Street: </Text>
                <Text style={styles.surfSpotDataText}> {data.getWidgetWX.surfHeight36th} FT</Text>
              </View>

              <View style={styles.wxSurfRow}>
                <Text style={styles.surfSpotText}> 56th Street: </Text>
                <Text style={styles.surfSpotDataText}> {data.getWidgetWX.surfHeight56th} FT</Text>
              </View>

              <View style={styles.wxSurfRow}>
                <Text style={styles.surfSpotText}> River Jetties: </Text>
                <Text style={styles.surfSpotDataText}> {data.getWidgetWX.surfHeightRiver} FT</Text>
              </View> 

            </View>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  wxWidget: {
    flex: 1,
    backgroundColor: "#1CADB2",
    borderRadius: 25,
    opacity: .90,
    maxHeight: "35%",
    minHeight: "35%",
    width: "100%",
    flexDirection: 'row',
  },
  wxBoxCol: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: 'column',
    marginTop: 20,
  },
  wxSurfCol: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'column',
    marginTop: 10,
  },
  wxBoxRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'start',
    marginLeft: 20,
  },
  wxSurfRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  wxSurfRow1: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
  },
  tideIcon: {
    width: 30,
    height: 30,
  },
  tideDirectionIcon: {
    width: 30,
    height: 30,
  },
  windIcon: {
    //  marginLeft: 15,
    //  paddingHorizontal: 10,
  },
  waterTempIcon: {
    //  marginLeft: 4,
  },
  surfWaveIcon: {
    width: 100,
    height: 50,
  },
  surfSpotText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  wxDataTempText: {
    marginLeft: 30,
  },
  wxDataTideText: {
    marginLeft: 25,
  },
  wxDataWindText: {
    marginLeft: 25,
  },
  wxDataTideText: {
    marginLeft: 25,
  },
  wxDataNextTideText: {
    fontSize: 12,
    textAlign: "center",
    marginLeft: 15,
  },
  surfSpotDataText: {
    marginTop: 2,
    fontSize: 12,
  },
})

export default WxWidget;