import React from 'react'
import { View, Text } from 'react-native'

import HashTagList from './HashTagList'

export default function youtuberMovieInfo() {
  return (
    <>
      <HashTagList />
      <View
        style={{
          backgroundColor: '#FFF978',
          height: 300,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>해시태그로 보는 지역별 영상 정보가 들어갈 공간입니다.</Text>
        <Text>HasTagMovieList</Text>
      </View>
    </>
  )
}
