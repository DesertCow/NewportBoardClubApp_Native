import { Slot } from 'expo-router';

export default function HomeLayout() {
  return (
    <>
      {/* <Header /> */}
      <Slot />
      {/* <Footer /> */}
    </>
  );
}