import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

// import screens
import mokupViedo from './mokupViedo'

const renderVideo = (data) => {
  return (
    <View
      style={{
        margin: 5,
        borderRadius: 10,
        backgroundColor: 'white',
      }}
    >
      <Image
        style={{ width: 200, height: 150, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
        source={data.ytbThumbnail}
      />
      <Text style={{ fontFamily: Typography.FONT_FAMILY_BOLD, paddingTop: 9, paddingLeft: 15 }}>
        {data.ytbVideoName}
      </Text>
      <Text
        style={{
          fontFamily: Typography.FONT_FAMILY_BOLD,
          paddingTop: 6,
          paddingLeft: 15,
          color: Colors.GRAY_DARK,
        }}
      >
        조회수 {data.hits}만회
      </Text>
    </View>
  )
}

export default function VideoList() {
  return (
    <View
      style={{
        backgroundColor: '#FFA6C5',
        height: 265,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 10,
      }}
    >
      <Text>유튜버 조회수 Top 5 영상 정보가 들어갈 공간입니다.</Text>
      <Text>VideoList</Text>
      <FlatList
        data={mokupViedo}
        keyExtractor={(item) => item.storeId}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderVideo(item)}
        keyboardShouldPersistTaps="always"
      />
    </View>
  )
}
