import React from 'react'
import { View, FlatList, Image, TouchableOpacity } from 'react-native'

// import screens
import mokupYoutuber from '../../model/mokupYoutuber'

// styles
import { Colors } from '@styles'
import { Text } from '../../styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const renderYoutuber = (data) => {
  return (
    <View style={{ marginHorizontal: 6 }}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={{ width: 170, height: 170 }}
          source={data.ytbProfile}
        />
      </TouchableOpacity>
      {/* 구독자 수 */}
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative', bottom: 23 }}>
        <Text size={20} weight={'BOLD'} style={{ backgroundColor: Colors.RED_4, padding: 3, color: Colors.WHITE, letterSpacing: -1 }}>300K</Text>
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

export default function YoutuberList() {
  return (
    <View
      style={{
        height: 225,
        marginHorizontal: 5
      }}
    >
      {/* 유튜버 Top 5 랭킹 정보 */}
      <FlatList
        data={mokupYoutuber}
        keyExtractor={(item, index) => `${item.ytbChannel}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderYoutuber(item)}
        keyboardShouldPersistTaps="always"
      />
    </View>
  )
}
