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

// import apis
import { getUserFolders } from '../utils/api/folder'

const useSelectBox = (props) => {
  const [userFlows, setUserFlows] = useState(null)
  const [itemValue, setItemValue] = useState(null)
  const [ModalSelector, visible, setVisible] = useModalSelector()

  // 초기 유저 폴더 세팅
  useEffect(() => {
    async function init() {
      const data = await getUserFolders()
      console.log(data)
      let temp = [{ key: -1, section: true, label: '코코님의 동선 폴더' }]
      data.map(item => (
        temp.push({
          key: item._id,
          label: item.folderTitle,
        })
      ))

      setUserFlows(temp)
      setItemValue(temp[1])
    }
    init()
  }, [])

  const SelectBox = () => {

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

  return [SelectBox, itemValue, setItemValue]
}

export default useSelectBox

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