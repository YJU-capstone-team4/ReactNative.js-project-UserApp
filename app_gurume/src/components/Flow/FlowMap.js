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
      <Text>내가 추가한 동선 리스트 정보가 들어갈 공간입니다.</Text>
      <Text>FlowMap</Text>
      <Image style={{ margin: 10 }} source={flowMap} resizeMode="cover" />
    </View>
  )
}
