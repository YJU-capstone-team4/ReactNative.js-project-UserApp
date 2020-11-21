import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

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
    />
  )
}
