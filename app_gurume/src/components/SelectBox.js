import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

// import components
import useModalSelector from '@utils/hooks/useModalSelector';

// import styles
import FeatherIcons from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SelectBox = (props) => {
  const [userFlows, setUserFlows] = useState(null)
  const [itemValue, setItemValue] = useState(null)
  const [ModalSelector, visible, setVisible] = useModalSelector()

  // 초기 유저 폴더 세팅
  useEffect(() => {
    setUserFlows([
      { key: -1, section: true, label: '-- 공유한 동선 --' },
      { key: 0, label: 'YJU 여름 여행' },
      { key: 1, label: '제주도 여행' },
      { key: 2, label: '국밥팸 서울나들이' },
      { key: 3, label: '부산여행' },
      { key: 11, label: '국밥팸 서울나들이' },
      { key: 8, label: '부산여행' },
      { key: 9, label: '국밥팸 서울나들이' },
      { key: 10, label: '부산여행' },
      { key: -2, section: true, label: '-- 개인 동선 --' },
      { key: 5, label: '제주도 여행' },
      { key: 6, label: '국밥팸 서울나들이' },
      { key: 7, label: '부산여행' },
    ])
  }, [])

  return (
    <>
      {
        userFlows ?
          <View style={styles.folderWrap}>
            <TouchableOpacity
              style={styles.downIcon}
              onPress={() => setVisible(!visible)}
              hitSlop={{ top: 60, right: 60, bottom: 60, left: 60 }}
            >
              <MaterialCommunityIcons size={16} color={Colors.RED_3} style={{ paddingRight: 3 }} name="map-marker" />
              <Text size={20}> {itemValue ? itemValue.label : userFlows[1].label}</Text>
              <FeatherIcons name="chevron-down" size={22} color={Colors.GRAY_8} />
            </TouchableOpacity>
          </View>
          : null
      }
      {
        visible ?
          <ModalSelector
            data={userFlows}
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
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
})