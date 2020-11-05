import React from 'react'
import { View, Text } from 'react-native'

export default function FlowList() {
  return (
    <View
      style={{
        backgroundColor: '#FFA6C5',
        height: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text>동선 Top 5 랭킹 정보가 들어갈 공간입니다.</Text>
      <Text>FlowList</Text>
    </View>
  )
}
