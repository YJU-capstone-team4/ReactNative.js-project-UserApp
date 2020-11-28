import React from 'react'
import { View, FlatList, Image } from 'react-native'

// apollo
import { useQuery } from '@apollo/react-hooks'
import { Queries } from '~/graphql'

// import screens
import mokupYoutuber from '../../model/mokupYoutuber'

// styles
import { Colors } from '@styles'
import { Text } from '../../styles/CommonStyles'

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
        elevation: 3,
      }}
    >
      <Image
        style={{ borderRadius: 230, width: 170, height: 170 }}
        source={data.ytbProfile}
      />
      <Text style={{ marginTop: 20 }}>체널명 : {data.ytbChannel}</Text>
      <Text style={{ margin: 15, color: 'gray' }}>구독자수 : {data.ytbSubscribe}</Text>
      <Text style={{ color: 'gray' }}>방문맛집수 : {data.ytbHits}</Text>
      {/* <Text style={{ margin: 5 }}>{data.ytbLinkAddress}</Text> */}
    </View>
  )
}

export default function YoutuberList() {
  const { loading, error, data } = useQuery(Queries.GET_YOUTUBERS)

  // if (loading) return <Text>로딩중입니다!!</Text>
  // if (error) return <Text>에러가 났습니다!!</Text>

  return (
    <View
      style={{
        // backgroundColor: Colors.RED_4 + '90',
        height: 330,
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
        keyExtractor={(item) => item.ytbChannel}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderYoutuber(item)}
        keyboardShouldPersistTaps="always"
      />
    </View>
  )
}
