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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!!!!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});