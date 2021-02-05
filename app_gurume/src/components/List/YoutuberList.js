import React from 'react'
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'

// import screens
import mokupYoutuber from '../../model/mokupYoutuber'

// import apis
import { getRegionYoutubers } from '@utils/api/main/index'
import { useAsync } from '@utils/hooks'

// styles
import { Colors } from '@styles'
import { Text } from '../../styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import thumb_2 from '@images/thumbnail_2.jpg'

const renderYoutuber = (data) => {
  const ytbSubscribe = data.ytbSubscribe / 10000

  return (
    <View style={{ marginHorizontal: 6 }}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={{ width: 170, height: 170 }}
          source={thumb_2}
        />
      </TouchableOpacity>
      {/* 구독자 수 */}
      <View style={styles.subscribeTextWrapper}>
        <Text size={20} weight={'BOLD'} style={styles.subscribeText}>{ytbSubscribe}K</Text>
      </View>
      <View>
        <Text size={20} style={{ marginTop: -10 }}>{data.ytbChannel}</Text>
        {/* 영상 개수 */}
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <MaterialCommunityIcons name="youtube" color={Colors.RED_4} size={16} />
          <Text style={{ color: Colors.GRAY_8, marginVertical: 3, marginLeft: 3 }}>방문맛집 {data.ytbHits}</Text>
        </View>
        {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="star" color={Colors.YELLOW_6} size={16} />
          <Text style={{ color: Colors.GRAY_8, marginVertical: 3, marginLeft: 5 }}>구독자 : {data.ytbSubscribe}</Text>
        </View> */}
      </View>
    </View>
  )
}

const YoutuberList = (props) => {
  // 여기서 두가지 모듈로 나뉘어 진다.
  // 1. 00 지역을 방문한 유튜버
  // 2. 00 가게를 방문한 유튜버
  const [state] = useAsync(() => getRegionYoutubers(props.region), [props.region])
  const { loading, data, error } = state

  if (loading) return <View><Text>로딩로딩!</Text></View>
  if (error) return <View><Text>에러에러</Text></View>

  return (
    <View
      style={{
        height: 225,
        marginHorizontal: 5
      }}
    >
      {
        props.region && data && data.ytbChannelTb ?
          <FlatList
            data={data.ytbChannelTb}
            keyExtractor={(item, index) => `${item.ytbChannel}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => renderYoutuber(item)}
            keyboardShouldPersistTaps="always"
          />
          : null}
    </View>
  )
}

export default YoutuberList

const styles = StyleSheet.create({
  subscribeTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    bottom: 23
  },
  subscribeText: {
    minWidth: 45,
    backgroundColor: Colors.RED_4,
    padding: 3,
    color: Colors.WHITE,
    letterSpacing: -1,
    textAlign: 'center'
  }
})