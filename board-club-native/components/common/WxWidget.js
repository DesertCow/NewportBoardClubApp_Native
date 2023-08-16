import { StyleSheet, View, Image, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

//* GraphQL
import { useQuery } from '@apollo/client';
import { getWX_Q } from '../../utils/queries';

import Modal from "react-native-modal";

//* Icon Import
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, Feather, Ionicons   } from '@expo/vector-icons';

//* Import Assets
const boardClubIcon = require('../../assets/img/BC_Logo_Clear_1.png');
const tideIcon = require('../../assets/icons/tide_icon.png')
const tideRiseIcon = require('../../assets/icons/Tide_Rising.png')
const tideFallIcon = require('../../assets/icons/Tide_Falling.png')


function WxWidget() {

  return (

    // <View>
      // {/* <Modal isVisible={true}> */}
        <View style={styles.wxWidget}>
          <Text>I am the modal content!</Text>
        </View>
      // </Modal>
    // </View>

  )

}

const styles = StyleSheet.create({
  wxWidget: {
    flex: 1,
    backgroundColor: "#1CADB2",
    opacity: .85,
    // maxHeight: Platform.OS === 'android' ? 450 : 130,
    maxHeight: 300,
    minHeight: 300,
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: "center"
  },
})

export default WxWidget;