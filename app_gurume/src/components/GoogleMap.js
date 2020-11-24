import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

// import styles
import { Colors, Typography } from '@styles'
import markerImage from '@images/delivery_128.png'
import videoImage from '@images/movie_thumbnail_3.png'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  plainView: {
    width: 'auto',
    backgroundColor: Colors.RED_4
  },
  markerConatiner: {
    width: 40,
    height: 40,
    marginTop: 5,
  },
  videoConatiner: {

  },
  videoSource: {
    height: 100,
    width: 160,
    borderColor: Colors.GRAY_8,
    borderWidth: 2,
  }
})

const CustomMarker = () => (
  <View style={{
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: 'red'
  }}>
    <View style={styles.videoConatiner}>
      <Image source={videoImage} style={styles.videoSource} />
    </View>
    <Image source={markerImage} style={styles.markerConatiner} />
    <View
      style={{
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.BLUE_6,
        borderWidth: 1,
        borderRadius: 25,
      }}
    >
      <Text style={{ color: Colors.BLACK, fontFamily: Typography.FONT_FAMILY_BOLD, fontSize: Typography.FONT_SIZE_14 }}>신전떡볶이</Text>
    </View>
  </View>
);

export default function GoogleMap() {
  return (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: 35.86990,
        longitude: 128.59554,
        longitudeDelta: 0.009,
        latitudeDelta: 0.009
      }}
    >
      <Marker
        coordinate={{
          latitude: 35.86990,
          longitude: 128.59554,
        }}
      >
        <CustomMarker key={1} />
        <Callout style={styles.plainView}>
          <View><Text>안녕하세요</Text></View>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude: 35.86570,
          longitude: 128.59054,
        }}
      >
        <CustomMarker key={2} />
      </Marker>
    </MapView>
  )
}
