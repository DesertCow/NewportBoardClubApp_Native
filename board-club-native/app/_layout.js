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

import { Stack } from 'expo-router';
import { ImageBackground, StyleSheet, Image, headerBackground } from 'react-native';

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


export default function Layout() {
  return (
    <Stack
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
      }}>
      {/* Optionally configure static options outside the route. */}
      {/* <Stack.Screen name="home" options={{}} /> */}
    </Stack>
  );
}