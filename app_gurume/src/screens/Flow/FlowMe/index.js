import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

// import components
import FlowList from '@components/Flow/FlowList'
import SelectBox from '@components/SelectBox'
import FlowMap from '@components/Flow/FlowMap'

// import screens
import DraggableFlowList from './DraggableFlowList';

export default function index(props) {
  const EMPTY_ARRAY = []              // ScrollView + FlatList 충돌로 빈 배열 선언
  return (
    <FlatList
      data={EMPTY_ARRAY}
      style={styles.container}
      ListFooterComponent={
        <>
          {/* <FlowList navi={props.navigation} /> */}
          {/* <Text>추가한 동선 리스트</Text> */}
          <View style={styles.textWrapper}>
            <FontAwesome name="rss-square" color={Colors.GRAY_9} size={18} />
            <Text style={styles.textContainer}> 내가 추가한 동선 폴더</Text>
          </View>
          <View style={{ paddingHorizontal: 6 }}>
            <SelectBox />
          </View>
          {/* FIXME 공유 동선 조회는 동선 관리 페이지 보다는 공유하기 페이지가 더 잘어울리는듯. */}
          {/* <View style={styles.textWrapper}>
            <FontAwesome name="share-square" color={Colors.GRAY_9} size={20} />
            <Text style={styles.textContainer}> 공유 동선 조회</Text>
          </View> */}
          <FlowMap />
          <DraggableFlowList />
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