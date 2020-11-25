import React from 'react'
import { View } from 'react-native'

import {Text} from '../../styles/CommonStyles'

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
      <Text weight={"BOLD"} size={20}>헤더 정보가 들어갈 공간입니다.</Text>
      <Text>ビックグルメ</Text>
    </View>
  )
}
