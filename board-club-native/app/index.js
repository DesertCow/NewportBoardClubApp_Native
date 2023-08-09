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
import { StyleSheet, Text, View, Button } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={HomeScreen} />
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="Settings" component={HomeScreen} />
    </Stack.Navigator>
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
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});