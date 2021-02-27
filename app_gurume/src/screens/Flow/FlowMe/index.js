import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { tempMarkers } from '../../../model/mokupMap'

// import components
import PolygonMap from '@components/PolygonMap'
import useSelectBox from '@components/SelectBox'

// import screens
import DraggableFlowList from './DraggableFlowList'

// import apis
import { getFlowListItems } from '../../../utils/api/flow'

export default function index(props) {
  const EMPTY_ARRAY = []                                              // ScrollView + FlatList 충돌로 빈 배열 선언

  const [markers, setMarkers] = useState(null)                        // 사용자 폴더의 값 로딩 후 반환
  const [convertedMarkers, setConvertMarkers] = useState(null)        // PolygonMap 맵 전용 변수 :: 위도 경도만 따로 빼낸 배열.
  const [SelectBox, itemValue, setItemValue] = useSelectBox()         // 폴더 변경 감지

  useEffect(() => {
    if (!itemValue) return
    console.log(props)
    async function init(argFolderId) {
      // 폴더 아이디로 해당 값 불러오기
      const data = await getFlowListItems(argFolderId)

      setMarkers(data)
    }
    init(itemValue.key)
  }, [itemValue])

  useEffect(() => {
    if (!markers) return

    // PolygonMap 맵 전용 위도 경도 데이터셋 만들기
    let tempConvertedArr = markers.map(item => (
      {
        latitude: item.location.lat,
        longitude: item.location.lng
      }
    ))

    setConvertMarkers(tempConvertedArr)
  }, [markers])

  return (
    <FlatList
      data={EMPTY_ARRAY}
      style={styles.container}
      ListFooterComponent={
        <>
          {/* Header */}
          <View style={styles.textWrapper}>
            <FontAwesome name="rss-square" color={Colors.GRAY_9} size={18} />
            <Text style={styles.textContainer}> 내가 추가한 동선 폴더</Text>
          </View>
          {/* 공유 동선 폴더 */}
          <View style={{ paddingHorizontal: 6 }}>
            <SelectBox />
          </View>
          {
            markers && convertedMarkers && convertedMarkers.length > 0 ? <>
              <View style={{ borderColor: Colors.GRAY_4, borderWidth: 2, marginHorizontal: 6 }}>
                <PolygonMap data={convertedMarkers} />
              </View>
              <DraggableFlowList data={markers} setMarkers={setMarkers} setConvertMarker={setConvertMarkers} folderValue={itemValue} />
            </> : <Text style={{ alignSelf: 'center' }}>폴더가 비었습니다. 가게를 추가해주세요!!</Text>
          }
        </>
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.WHITE
  },
  buttonContainer: {
    elevation: 3,
    margin: 5,
    width: 100,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.DEEP_BLUE,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: Colors.WHITE,
    alignSelf: 'center',
    fontFamily: Typography.FONT_FAMILY_BOLD,
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