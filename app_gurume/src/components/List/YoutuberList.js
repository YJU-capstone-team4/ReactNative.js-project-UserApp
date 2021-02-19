import React from 'react'
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'

// styles
import { Colors } from '@styles'
import { Text } from '../../styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const renderYoutuber = (data) => {
  const ytbSubscribe = data.ytbSubscribe / 10000

  return (
    <View style={{ marginHorizontal: 6 }}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={{ width: 170, height: 170 }}
          source={{ uri: data.ytbProfile }}
        />
      </TouchableOpacity>
      {/* 구독자 수 */}
      <View style={styles.subscribeTextWrapper}>
        <Text size={20} weight={'BOLD'} style={styles.subscribeText}>{ytbSubscribe}K</Text>
      </View>
      <View>
        {/* 채널명 */}
        <Text size={20} style={{ marginTop: -10 }}>{data.ytbChannel}</Text>
        {/* 영상 개수 */}
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <MaterialCommunityIcons name="youtube" color={Colors.RED_4} size={16} />
          <Text style={{ color: Colors.GRAY_8, marginVertical: 3, marginLeft: 3 }}>방문맛집 {data.storeCount}</Text>
        </View>
      </View>
    </View>
  )
}

/**
 * 
 * @param {data} props : youtuber data list
 */
const YoutuberList = (props) => {

  return (
    <View style={styles.container}>
      {
        props.data && props.data.ytbChannelTb && props.data.ytbChannelTb.length !== 0 ?
          <FlatList
            data={props.data.ytbChannelTb}
            keyExtractor={(item, index) => `${item.ytbChannel}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => renderYoutuber(item)}
            keyboardShouldPersistTaps="always"
          /> : <Text style={{ alignSelf: 'center' }}>검색 데이터가 없습니다</Text>
      }
    </View>
  )
}

export default YoutuberList

const styles = StyleSheet.create({
  container: {
    height: 225,
    marginHorizontal: 5,
    justifyContent: 'center',
    // alignItems: 'center'
  },
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