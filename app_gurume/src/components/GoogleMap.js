import React from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

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
        latitude: 37.413294,
        longitude: 127.269311,
        longitudeDelta: 0.1,
        latitudeDelta: 0.1
      }}
    />
  )
}
