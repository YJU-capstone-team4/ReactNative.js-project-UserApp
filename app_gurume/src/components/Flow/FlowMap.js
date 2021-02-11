import React from 'react'
import { View, Text, Image } from 'react-native'

import flowMap from '@images/flow.png'

export default function FlowMap() {
  return (
    <View
      style={{
        backgroundColor: '#68D16860',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Image style={{ margin: 10 }} source={flowMap} resizeMode="cover" />
    </View>
  )
}
