// import { Stack } from 'expo-router';

// export default function Layout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//     />
//   );
// }

// import { Slot } from 'expo-router';

// export default function Layout() {
//   return (
//     <>
//       {/* <Header /> */}
//       <Slot />
//       {/* <Footer /> */}
//     </>
//   );
// }

{/* <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground> */}

// import { Stack } from 'expo-router';
import { ImageBackground, StyleSheet, Image, headerBackground, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import HomeScreen from './Home';
import ClubEvents from './ClubEvents';
import SurfLog from './SurfLog';
import SurfHacks from './SurfHacks';
import NewportSurfMap from './NewportSurfMap';
import Rentals from './Rentals';
import About from './About';
import UserSettings from './UserSettings';

const Stack = createNativeStackNavigator();


//* Import Assets
const boardClubIcon = require('../assets/img/BC_Logo_Clear_1.png');

function NBC_Logo() {
  return (
    <Image
      style={{ width: 175, height: 75, marginBottom: 50}}
      source={boardClubIcon}
    />
  );
}


export default function App() {
  return (

    // <NavigationContainer>
      <Stack.Navigator
        // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
        screenOptions={{
          headerTitle: (props) => <NBC_Logo {...props}/>,
          headerStyle: {
            backgroundColor: '#D8D8D8',
            height: 150,
          },
          // headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* //* App Routes/Pages */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ClubEvents" component={ClubEvents} />
        <Stack.Screen name="SurfLog" component={SurfLog} />
        <Stack.Screen name="SurfHacks" component={SurfHacks} />
        <Stack.Screen name="NewportSurfMap" component={NewportSurfMap} />
        <Stack.Screen name="Rentals" component={Rentals} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="UserSettings" component={UserSettings} />

        {/* <View style={styles.footer}> */}
          {/* <Text>This footer will be pushed to the bottom</Text> */}
          {/* <FontAwesome5 name="book-open" size={50} color="black" /> */}
          {/* <MaterialCommunityIcons name="surfing" size={50} color="black" /> */}
          {/* <FontAwesome name="gear" size={50} color="black" /> */}
        {/* </View> */}
      </Stack.Navigator>


    // {/* </NavigationContainer> */}

  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#D8D8D8",
    // paddingVertical: 20,
    alignItems: 'center',
    height: 80,
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // padding: 40
  }
});