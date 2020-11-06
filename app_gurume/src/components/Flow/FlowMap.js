import React from 'react'
import { View, Text } from 'react-native'

export default function FlowMap() {
  return (
    <View
      style={{
        backgroundColor: '#68D168',
        height: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text>내가 추가한 동선 리스트 정보가 들어갈 공간입니다.</Text>
      <Text>FlowMap</Text>
    </View>
  )
}
