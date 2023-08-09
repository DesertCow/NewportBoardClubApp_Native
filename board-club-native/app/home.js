




// export default function HomeScreen({ navigation }) {

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );

// }

// export default HomeScreen;

import { Link, Stack } from 'expo-router';
import { Image, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//     />
//   );
// }

function HomeScreen( { navigation } ) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
      <TouchableOpacity
        style={styles.buttonTop}
        onPress={() => navigation.navigate('ClubEvents')}>
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

export default HomeScreen;