import React from 'react'
import { View, Text } from 'react-native'

export default function ThumbsUp() {
  return (
    <View
      style={{
        backgroundColor: '#FF7493',
        // width: 20,
        minHeight: 20,
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 10,
      }}
    >
      <Text style={{ paddingRight: 5 }}>좋아요 기능이 들어갈 공간입니다. ★</Text>
      <Text style={{ paddingRight: 5, alignSelf: 'center' }}>ThumbsUp</Text>
    </View>
  )
}
