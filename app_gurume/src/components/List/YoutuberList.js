import React from 'react'
import { View, FlatList, Image } from 'react-native'

// import screens
import mokupYoutuber from '../../model/mokupYoutuber'

// styles
import { Colors } from '@styles'
import { Text } from '../../styles/CommonStyles'

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
    <View style={{ margin: 10, alignItems: 'center' }}>
      <Image
        style={{ borderRadius: 100, width: 170, height: 170 }}
        source={data.ytbProfile}
      />
      <Text weight={"BOLD"} size={18} style={{ marginTop: 10 }}>{data.ytbChannel}</Text>
    </View>
  )
}

export default function YoutuberList() {
  return (
    <View
      style={{
        // backgroundColor: Colors.RED_4 + '90',
        height: 300,
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
