import React, { useState, useEffect } from 'react'
import { View, } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Feather'

// import screens
import ModalSelector from './ModalSelector'

import { Text } from '../../styles/CommonStyles'
import { Colors } from '@styles'

export default function MainHeader(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [locationInfo, setLocationInfo] = useState([])

  useEffect(() => {
    setLocationInfo([
      { key: -1, section: true, label: '지역선택' },
      { key: 0, label: '서울특별시' },
      { key: 1, label: '인천광역시' },
      { key: 2, label: '광주광역시' },
      { key: 3, label: '대구광역시' },
      { key: 4, label: '울산광역시' },
      { key: 5, label: '부산광역시' },
    ])
  }, [])

  return (
    <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.GRAY_1 }}>
      <Ionicons size={20} style={{ justifyContent: 'flex-end', marginLeft: 15 }} name="bell" color={Colors.GRAY_8} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text size={22} weight={'BOLD'} style={{ color: Colors.GRAY_8 }}>{props.region}</Text>
        <MaterialCommunityIcons onPress={() => { setModalOpen(!modalOpen) }} size={33} style={{ marginLeft: -5 }} name="menu-down" color={Colors.GRAY_8}>
          <ModalSelector data={locationInfo} modalOpen={modalOpen} setRegion={props.setRegion} />
        </MaterialCommunityIcons>
      </View>
      <Ionicons size={20} style={{ justifyContent: 'flex-end', marginRight: 15 }} name="settings" color={Colors.GRAY_8} />
    </View>
  )
}
