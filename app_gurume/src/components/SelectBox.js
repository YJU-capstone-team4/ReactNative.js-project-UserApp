import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'

// import components
import ModalSelector from './ModalSelector'

// import styles
import FeatherIcons from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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
      { key: 0, label: '코코의 여름 여행' },
      { key: 1, label: '제주도 여행' },
      { key: 2, label: '국밥팸 서울나들이' },
      { key: 3, label: '부산여행' },
    ])
  }, [])

  // 폴더 변경 감지
  useEffect(() => {
    Alert.alert("폴더가 변경되었습니다!")
  }, [itemValue])

  return (
    <>
      {
        userFlows ?
          <View style={styles.container}>
            <View style={styles.folderWrap}>
              <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons size={15} color={Colors.RED_3} style={{paddingRight: 3}} name="folder-open-outline" />
                <Text size={18}> {itemValue ? itemValue.label : userFlows[1].label}</Text>
              </View>
              <TouchableOpacity onPress={() => setModalOpen(true)}>
                <FeatherIcons name="chevron-down" size={18} color={Colors.GRAY_8} />
              </TouchableOpacity>
            </View>
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
  container: {
    flex: 1,
    paddingVertical: 10
  },
  folderWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.GRAY_1,
    padding: 15,
    paddingLeft: 20,
    borderRadius: 10,
    borderColor: Colors.GRAY_3,
    borderWidth: 0.4
  }
})