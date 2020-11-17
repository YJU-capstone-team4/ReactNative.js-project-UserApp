import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE, MAP_TYPES } from 'react-native-maps'

export default function GoogleMap() {
  return (
    // <View
    //   style={{
    //     backgroundColor: '#9D71BD',
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginBottom: 10,
    //   }}
    // >
    //   <Text>GoogleMap 정보가 들어갈 공간입니다.</Text>
    //   <Text>GoogleMap</Text>
    // </View>
    <MapView
      style={{ position: 'absolute', width: '100%', height: '100%' }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  )
}
