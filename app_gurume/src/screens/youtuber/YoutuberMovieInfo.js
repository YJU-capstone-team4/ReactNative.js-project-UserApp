import React, { useState } from 'react'
import { View } from 'react-native'

import { Text } from '@styles/CommonStyles';
import HashTagList from './HashTagList'

export default function youtuberMovieInfo(props) {
  const [selectedRegionTag, setSelectedRegionTag] = useState(props.data)

  return (
    <>
      <HashTagList data={props.data} onPress={setSelectedRegionTag} />
      <Text>{selectedRegionTag}</Text>
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
