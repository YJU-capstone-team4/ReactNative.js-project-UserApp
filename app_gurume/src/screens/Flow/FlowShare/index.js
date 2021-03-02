import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, StyleSheet, View, Alert } from 'react-native'
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
import TestContext from "../../../context/TestContext"

export default function index() {
  const [markers, setMarkers] = useState(tempMarkers)
  const [SelectBox, itemValue, setItemValue] = useSelectBox()
  const [regionTags, setRegionTags] = useState([])
  const { globalUserFlows } = useContext(TestContext)                 // 전역 폴더 값

  useEffect(() => {
    if (!itemValue) return
    //TODO 이미 공유 된 동선이라면 경고창 로딩
    // else if (itemValue.isShared) Alert.alert('이미 공유 된 동선입니다., 지금은 수정하면 에러나요~')

    async function init(argFolderId) {
      // 폴더 아이디로 해당 값 불러오기
      const data = await getFlowListItems(argFolderId)
      let tempRegionTags = []

      // 폴더 안의 정보 빼내오기
      let tempConvertedArr = data.map(item => {
        // 사용자가 추가한 동선 읽은 후 자동으로 지역 태그 맵핑
        const regionTag = item.storeAddress.split(' ')
        tempRegionTags.push(regionTag[0])

        // 폴리맵 마커 로딩을 위한 위치 객체 반환
        return {
          latitude: item.location.lat,
          longitude: item.location.lng
        }
      })

      // Set을 이용한 중복값 제거
      const tempSetRegionTags = new Set(tempRegionTags);

      setRegionTags([...tempSetRegionTags])

      setMarkers(tempConvertedArr)
    }


    init(itemValue.key)
  }, [itemValue, globalUserFlows])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header... */}
      <View style={styles.textWrapper}>
        <FontAwesome name="rss-square" color={Colors.GRAY_9} size={18} />
        <Text style={styles.textContainer}> 내가 추가한 동선 폴더</Text>
      </View>
      <SelectBox />
      {/* <FlowMap /> */}
      {
        markers && markers.length > 0 ?
          <>
            <View style={{ borderColor: Colors.GRAY_4, borderWidth: 2 }}>
              <PolygonMap data={markers} />
            </View>
            <FlowInput regionTags={regionTags} data={markers} folderInfo={itemValue} />
          </> : <Text style={{ alignSelf: 'center' }}>폴더가 비었습니다. 가게를 추가해주세요!!</Text>
      }
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