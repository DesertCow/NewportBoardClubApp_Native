import { Text, SafeAreaView, StyleSheet, ScrollView, Image, Dimensions, View } from 'react-native';


//* Image Pan
import ImageZoom from 'react-native-image-pan-zoom';

//* Asset Import
const newportSurfMap = require('../assets/maps/Newport_Surf_Map_Sat_Temp.png')

//* Components Import
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function NewportSurfMap() {

  return (

    <SafeAreaView style={{ flex: 1}}>
      
      <Header  style={{ position: "absolute"}}></Header>

      <ScrollView>
        {/* <Text>Newport Surf Map Page</Text> */}

        <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    pinchToZoom={true}
                    pinchToZoom={true}
                    imageWidth={3350}
                    enableCenterFocus={false}
                    imageHeight={1117}>
            <Image style={{width:3350, height:1117}}
                    source={newportSurfMap}/>
        </ImageZoom>

      </ScrollView>
      
      <Footer></Footer>

    </SafeAreaView>

  );

}

export default NewportSurfMap;