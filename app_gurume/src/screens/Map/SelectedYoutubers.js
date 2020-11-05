import React from 'react'
import { View, Text } from 'react-native'

export default function SelectedYoutubers() {
  return (
    <View
      style={{
        backgroundColor: '#FF7493',
        height: 80,
        width: 400,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text>검색 하여 추가된 유튜버가 나열 될 기능이 들어갈 공간입니다.</Text>
      <Text>SelectedYoutubers</Text>
    </View>
  )
}
