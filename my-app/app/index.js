
import { useState } from 'react';

import { Text, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

import { Image, TouchableOpacity } from "react-native";
import styles from "../components/common/header/screenheader.style";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      {/* <Text>Hello World!!!!!!!!!!!!!!!</Text> */}
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: "COLORS.lightWhite"},
          headerShadowVisible: false,
          headerLeft: () => (
            // <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
            // <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <TouchableOpacity style={styles.btnContainer} >
              <Image
                source={icons.menu}
                resizeMode='cover'
                style={styles.btnImg("60%")}
              />
            </TouchableOpacity>
          ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%"/>
          // ),
          headerTitle: ""
        }}
      />
    </SafeAreaView>
  )
}

export default Home;