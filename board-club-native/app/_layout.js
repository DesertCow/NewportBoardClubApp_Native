
import { ImageBackground, StyleSheet, Image, headerBackground, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//* GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import HomeScreen from './Home';
import ClubEvents from './ClubEvents';
import EventDetail from './EventDetail';
import SurfLog from './SurfLog';
import SurfHacks from './SurfHacks';
import NewportSurfMap from './NewportSurfMap';
import Rentals from './Rentals';
import About from './About';
import UserSettings from './UserSettings';
import CreateNewSession from './CreateNewSession';
import ListOfSessions from './ListOfSessions';

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

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.25.22:4001',
  cache: new InMemoryCache()
});


export default function App() {
  return (
    
  <ApolloProvider client={client}>
    {/* // <NavigationContainer> */}
      <Stack.Navigator
        screenOptions={{
          // headerTitle: (props) => <NBC_Logo {...props}/>,
          headerShown: false
          // headerStyle: {
          //   backgroundColor: '#D8D8D8',
          //   height: 150,
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}
      >
        {/* //* App Routes/Pages */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ClubEvents" component={ClubEvents} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="SurfLog" component={SurfLog} />
        <Stack.Screen name="SurfHacks" component={SurfHacks} />
        <Stack.Screen name="NewportSurfMap" component={NewportSurfMap} />
        <Stack.Screen name="Rentals" component={Rentals} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="UserSettings" component={UserSettings} />
        <Stack.Screen name="CreateNewSession" component={CreateNewSession} />
        <Stack.Screen name="ListOfSessions" component={ListOfSessions} />

      </Stack.Navigator>
    {/* // </NavigationContainer> */}
    </ApolloProvider>

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
    // padding: 40,
  }
});