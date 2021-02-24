import React from 'react'
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'

// styles
import { Colors } from '@styles'
import { Text } from '../../styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

/**
 * 유튜버 컴포넌트
 * @param {유튜버 정보} data 
 */
const renderYoutuber = (data, argNaviObj) => {
  const ytbSubscribe = data.ytbSubscribe / 10000

  /**
   * 클릭시 유튜버 페이지로 이동
   * @param {유튜버 아이디} argYoutuberId 
   * @param {유튜버 채널이름} argYoutubeChannel
   */
  const handleOnPressYoutuber = (argYoutuberId, argYoutubeChannel) => {
    argNaviObj.navigate('Youtuber', {
      youtuberId : argYoutuberId,
      youtubeChannel:  argYoutubeChannel
    })
  }

  return (
    <View style={{ marginHorizontal: 6 }}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => handleOnPressYoutuber(data._id, data.ytbChannel)}>
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
        props.data && props.data.length !== 0 ?
          <FlatList
            data={props.data}
            keyExtractor={(item, index) => `${item.ytbChannel}-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => renderYoutuber(item, props.navi)}
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