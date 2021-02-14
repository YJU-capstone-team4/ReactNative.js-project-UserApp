import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { tempMarkers } from '../../../model/mokupMap'

// import components
import PolygonMap from '@components/PolygonMap'
import SelectBox from '@components/SelectBox'

// import screens
import DraggableFlowList from './DraggableFlowList'

export default function index(props) {
  const EMPTY_ARRAY = []              // ScrollView + FlatList 충돌로 빈 배열 선언
  const [markers, setMarkers] = useState(tempMarkers)

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
          <PolygonMap data={markers} />
          <DraggableFlowList data={markers} setMarkers={setMarkers} />
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