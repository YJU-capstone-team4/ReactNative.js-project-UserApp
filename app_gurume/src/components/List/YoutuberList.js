import React from 'react'
import { View, FlatList, Image } from 'react-native'

// import screens
import mokupYoutuber from '../../model/mokupYoutuber'

// styles
import { Colors } from '@styles'
import { Text } from '../../styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const renderYoutuber = (data) => {
  return (
    // <View
    //   style={{
    //     width: 230,
    //     margin: 4,
    //     borderRadius: 5,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //     elevation: 2,
    //   }}
    // >
    //   <Image
    //     style={{ borderRadius: 230, width: 170, height: 170 }}
    //     source={data.ytbProfile}
    //   />
    //   <View>
    //     <Text weight={"BOLD"} style={{ marginTop: 20 }}>체널명 : {data.ytbChannel}</Text>
    //     <Text style={{ color: 'gray' }}>구독자수 : {data.ytbSubscribe}</Text>
    //     <Text style={{ color: 'gray' }}>방문맛집수 : {data.ytbHits}</Text>
    //   </View>
    //   {/* <Text style={{ margin: 5 }}>{data.ytbLinkAddress}</Text> */}
    // </View>
    // <View style={{ margin: 5, borderRadius: 5, padding: 10, justifyContent: 'space-evenly', backgroundColor: Colors.WHITE }}>
    <View style={{ marginHorizontal: 6 }}>
      <Image
        style={{ width: 170, height: 170 }}
        source={data.ytbProfile}
      />
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative', bottom: 23 }}>
        {/* <MaterialCommunityIcons name="youtube" color={Colors.BLACK} size={16} /> */}
        <Text size={20} weight={'BOLD'} style={{ backgroundColor: Colors.RED_4, padding: 3, color: Colors.WHITE, letterSpacing: -0.5 }}>300K</Text>
      </View>
      <View>
        <Text size={20} style={{ marginTop: -10 }}>{data.ytbChannel}</Text>
        {/* 영상 개수 */}
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
          <MaterialCommunityIcons name="youtube" color={Colors.RED_3} size={16} />
          <Text style={{ color: Colors.GRAY_8, marginVertical: 3, marginLeft: 5 }}>영상 : {data.ytbHits}</Text>
        </View>
        {/* 구독자 수 */}
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
        // backgroundColor: Colors.RED_4 + '90',
        height: 225,
        marginHorizontal: 5
        // flex: 1,
        // borderBottomEndRadius: 10,
        // borderBottomStartRadius: 10,
        // borderTopRightRadius: 10,
      }}
    >
      {/* <Text>유튜버 Top 5 랭킹 정보가 들어갈 공간입니다.</Text>
      <Text>YoutuberList</Text> */}
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
