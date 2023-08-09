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

// const boardClubIcon = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };
{/* <ImageBackground source={image} resizeMode="cover"></ImageBackground> */}




export default function Layout() {
  return (
    <Stack
      // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
      screenOptions={{
        title: "Update options",
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerBackground: () => (
          <Image
            style={StyleSheet.absoluteFill}
            source={require('../assets/img/BC_Logo_Clear_1.png')}
          />
        ),
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* <ImageBackground source={require('../assets/img/BC_Logo_Clear_1.png')} resizeMode="cover"></ImageBackground> */}
      {/* Optionally configure static options outside the route. */}
      <Stack.Screen name="home" options={{}} />
    </Stack>
  );
}