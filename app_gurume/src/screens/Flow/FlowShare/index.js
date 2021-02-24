import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { tempMarkers } from '../../../model/mokupMap'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

// import components
import useSelectBox from '@components/SelectBox'
import PolygonMap from '@components/PolygonMap'

// import screens
import FlowInput from './FlowInput'

// import apis
import { getFlowListItems } from '../../../utils/api/flow'

export default function index() {
  const [markers, setMarkers] = useState(tempMarkers)
  const [SelectBox, itemValue, setItemValue] = useSelectBox()

  useEffect(() => {
    if (!itemValue) return

    async function init(argFolderId) {
      // 폴더 아이디로 해당 값 불러오기
      const data = await getFlowListItems(argFolderId)
      let tempConvertedArr = data.map(item => (
        {
          latitude: item.location.lat,
          longitude: item.location.lng
        }
      ))
      setMarkers(tempConvertedArr)
    }
    init(itemValue.key)
  }, [itemValue])
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header... */}
      <View style={styles.textWrapper}>
        <FontAwesome name="rss-square" color={Colors.GRAY_9} size={18} />
        <Text style={styles.textContainer}> 내가 추가한 동선 폴더</Text>
      </View>
      <SelectBox />
      {/* <FlowMap /> */}
      <View style={{ borderColor:Colors.GRAY_2, borderWidth: 2 }}>
        <PolygonMap data={markers} />
      </View>
      <FlowInput />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE,
    paddingBottom: 30
  },
  textWrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    alignItems: 'center'
  },
  textContainer: {
    fontSize: 18,
    paddingLeft: 3
  },
})