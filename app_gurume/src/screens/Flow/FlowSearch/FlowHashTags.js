import React from 'react'
import { View } from 'react-native'

import { Text } from '@styles/CommonStyles'

export default function FlowHashTags() {
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
      <Text>지역, 계졀, 사용자 추가 해시태그 목록 정보가 들어갈 공간입니다.</Text>
      <Text>FlowHashTags</Text>
    </View>
  )
}
