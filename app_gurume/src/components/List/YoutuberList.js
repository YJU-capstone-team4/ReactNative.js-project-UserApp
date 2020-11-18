import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

// import screens
import mokupYoutuber from './mokupYoutuber'

const renderYoutuber = (data) => {
  return (
    <View
      style={{
        width: 230,
        margin: 9,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Image style={{ borderRadius: 230, width: 170, height: 170 }} source={data.ytbProfile} />
      <Text style={{ margin: 5 }}>체널명 : {data.ytbChannel}</Text>
      <Text style={{ margin: 5, color: 'gray' }}>방문맛집수 : {data.ytbProfile}</Text>
      {/* <Text style={{ margin: 5 }}>{data.ytbLinkAddress}</Text> */}
    </View>
  )
}

export default function YoutuberList() {
  return (
    <View
      style={{
        backgroundColor: '#FFA6C5',
        height: 330,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <Text>유튜버 Top 5 랭킹 정보가 들어갈 공간입니다.</Text>
      <Text>YoutuberList</Text>
      <FlatList
        data={mokupYoutuber}
        keyExtractor={(item) => item.ytbLinkAddress}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderYoutuber(item)}
        keyboardShouldPersistTaps="always"
      />
    </View>
  )
}
