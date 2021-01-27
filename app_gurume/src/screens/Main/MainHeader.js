import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Feather'

// import screens
import { Text } from '../../styles/CommonStyles'
import { Colors } from '@styles'
import ModalSelector from './../../components/ModalSelector';

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

  const handleInfoNavi = (navigation) => {
    // TODO 자연스러운 화면 이동 로직 
    // 여기서 'userInfo' or 'signIn' 페이지로 이동할지 결정해야 함.
    navigation.navigate('signIn', {
      // storeId: index,
      // storeName: marker.title,
    })
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', alignItems: 'center', backgroundColor: Colors.GRAY_1 }}>
      <Ionicons size={20} style={{ justifyContent: 'flex-end', marginLeft: 15 }} name="bell" color={Colors.GRAY_8} />
      <TouchableOpacity
        activeOpacity={0.8} //깜빡임을 조절하는 기능 
        hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }} //터치영역을 확장
        onPress={() => { setModalOpen(!modalOpen) }} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text size={22} weight={'BOLD'} style={{ color: Colors.GRAY_8 }}>{props.region}</Text>
        <MaterialCommunityIcons size={33} style={{ marginLeft: -5 }} name="menu-down" color={Colors.GRAY_8}>
          <ModalSelector data={locationInfo} modalOpen={modalOpen} setModalOpen={setModalOpen} onChange={props.setRegion} />
        </MaterialCommunityIcons>
      </TouchableOpacity>
      <Ionicons onPress={() => handleInfoNavi(props.navi)} size={20} style={{ justifyContent: 'flex-end', marginRight: 15 }} name="settings" color={Colors.GRAY_8} />
    </View>
  )
}
