import React from 'react'
import { View, ImageBackground } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Feather'

import { Text } from '../../styles/CommonStyles'
import { Colors } from '@styles'

export default function MainHeader() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.GRAY_1 }}>
      <Ionicons size={20} style={{ justifyContent: 'flex-end', marginLeft: 10 }} name="bell" color={Colors.GRAY_8} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text size={22} weight={'BOLD'} style={{ color: Colors.GRAY_8 }}>서울특별시 </Text>
        <MaterialCommunityIcons size={33} style={{ marginLeft: -9 }} name="menu-down" color={Colors.GRAY_8} />
      </View>
      <Ionicons size={20} style={{ justifyContent: 'flex-end', marginRight: 10 }} name="settings" color={Colors.GRAY_8} />
    </View>
  )
}
