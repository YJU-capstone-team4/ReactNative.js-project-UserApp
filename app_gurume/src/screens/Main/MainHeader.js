import React from 'react'
import { View } from 'react-native'

import { Text } from '../../styles/CommonStyles'
import { Colors } from '@styles'


export default function MainHeader() {
  return (
    <View
      style={{
        backgroundColor: Colors.RED_4,
        height: 150,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Text style={{ color: Colors.WHITE, marginBottom: 10 }} weight={"BOLD"} size={20}>헤더 정보가 들어갈 공간입니다.</Text>
      <Text>ビックグルメ</Text>
    </View>
  )
}
