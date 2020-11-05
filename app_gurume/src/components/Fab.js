import React from 'react'
import { View, Text } from 'react-native'

export default function Fab() {
  return (
    <View
      style={{
        backgroundColor: '#90D133',
        position: 'absolute',
        height: 80,
        width: 80,
        right: 30,
        bottom: 30,
        marginBottom: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Fab 컴포넌트</Text>
    </View>
  )
}
