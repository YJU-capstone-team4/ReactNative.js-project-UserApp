import React from 'react'
import { View, Text } from 'react-native'

export default function MainHeader() {
  return (
    <View
      style={{
        backgroundColor: '#FFBEFF',
        height: 150,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text>헤더 정보가 들어갈 공간입니다.</Text>
      <Text>ビックグルメ</Text>
    </View>
  )
}
