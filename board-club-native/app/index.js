// import { useState } from 'react';

// import { Text, ScrollView, SafeAreaView } from 'react-native';
// import { Stack, useRouter } from 'expo-router';

// import { COLORS, icons, images, SIZES } from '../constants'
// import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

// import { Image, TouchableOpacity } from "react-native";
// import styles from "../components/common/header/screenheader.style";

// const Home = () => {
//   const router = useRouter();

//   return (
//     <SafeAreaView>
//       <Text>Hello World!!!!!!!!!!!!!!!</Text>
//     </SafeAreaView>
//   )
// }

// export default Home;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Button, TouchableOpacity, ScrollView, Link } from 'react-native';

// import { Home } from './home';

import * as React from 'react';


function HomeScreen({ navigation }) {



  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
      <TouchableOpacity
        style={styles.buttonTop}
        onPress={() => navigation.navigate('clubEvents')}>
        {/* // onPress={() => {Linking.openURL("https://www.google.com/");}}> */}
        <Text style={styles.buttonText}>Club Events</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SurfLog')}>
        <Text style={styles.buttonText}>Surf Log</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SurfHacks')}>
        <Text style={styles.buttonText}>Surf Hacks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NewportSurfMap')}>
        <Text style={styles.buttonText}>Newport Surf Map</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Rentals')}>
        <Text style={styles.buttonText}>Rentals</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBottom}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        title="SurfLog"
        style={styles.button}
        onPress={() => navigation.navigate('SurfLog')}
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {

  return (
  
      <ScrollView>
        <HomeScreen />
      </ScrollView>

  );

}


export default function App() {

  return (

    // // <NavigationContainer>
    //   {/* <View style={styles.container}> */}
    //     {/* <Text>Open up App.js to start working on your app!!!!!!!!!!</Text> */}
    //     {/* <StatusBar style="auto" /> */}
    //   {/* </View> */}
    // // </NavigationContainer>

    // <NavigationContainer>
      <MyStack />
    // </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'start',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
    justifyContent: 'center',
  },
  buttonTop: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
    justifyContent: 'center',
  },
  buttonBottom: {
    alignItems: 'center',
    backgroundColor: '#474747',
    color: "#FFFFFF",
    height: 80,
    width: "85%",
    marginTop: 40,
    marginBottom: 80,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    // fontWeight: 700,
    fontWeight: 'bold',
    alignItems: 'center',
    color: "#FFFFFF",
    justifyContent: 'center',
  },
});