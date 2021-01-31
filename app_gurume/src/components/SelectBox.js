import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'

// import components
import ModalSelector from './ModalSelector'

// import styles
import FeatherIcons from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const convertFolderList = (data) => {
  const items = []
  // 타이틀, id 만 가져오기
  data.map(v => {
    items.push(
      {
        label: v.folderTitle,
        value: v._id,
        icon: () => <Icon name="hash" size={18} color="#900" />,
      }
    )
  })

  console.log(items)
  return items;
}

const SelectBox = (props) => {
  const [userFlows, setUserFlows] = useState(null)
  const [itemValue, setItemValue] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // 초기 유저 폴더 세팅
  useEffect(() => {
    setUserFlows([
      { key: -1, section: true, label: '지역선택' },
      { key: 0, label: 'YJU 여름 여행' },
      { key: 1, label: '제주도 여행' },
      { key: 2, label: '국밥팸 서울나들이' },
      { key: 3, label: '부산여행' },
    ])
  }, [])

  // 폴더 변경 감지
  useEffect(() => {
    // Alert.alert("폴더가 변경되었습니다!")
    console.log("폴더가 변경되었습니다!")
  }, [itemValue])

  return (
    <>
      {
        userFlows ?
          <View style={styles.folderWrap}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons size={16} color={Colors.RED_3} style={{ paddingRight: 3 }} name="map-marker" />
              {/* <EntypoIcons size={15} color={Colors.RED_4} style={{ paddingRight: 3 }} name="folder-video" /> */}
              <Text size={20}> {itemValue ? itemValue.label : userFlows[1].label}</Text>
            </View>
            <TouchableOpacity
              style={styles.downIcon}
              onPress={() => setModalOpen(true)}
              hitSlop={{ top: 60, right: 60, bottom: 60, left: 60 }}
            >
              <FeatherIcons name="chevron-down" size={22} color={Colors.GRAY_8} />
            </TouchableOpacity>
          </View>
          : null
      }
      {
        modalOpen ?
          <ModalSelector
            data={userFlows}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            onChange={setItemValue}
          />
          : null
      }
    </>
  )
}

export default SelectBox

const styles = StyleSheet.create({
  folderWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GRAY_1 + '80',
    padding: 15,
    paddingLeft: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: Colors.GRAY_4,
    borderWidth: 0.4
  },
  downIcon: {
    // position: 'absolute',
    // left: 20,
    // top: 10,
    marginLeft: 10
  }
})