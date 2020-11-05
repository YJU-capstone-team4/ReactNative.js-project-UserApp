import React from 'react'
import { View, Text } from 'react-native'

export default function MovieList() {
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
      <Text>유튜버 조회수 Top 5 영상 정보가 들어갈 공간입니다.</Text>
      <Text>MovieList</Text>
    </View>
  )
}
