import React from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get("window");
const SPACING_FOR_CARD_INSET = width * 0.01;

// import styles
import { Colors, Typography } from '@styles'

// import screens
import mokupViedo from '../../model/mokupViedo'

const renderVideo = (data) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{
      marginHorizontal: 5,
      marginTop: 20,
      marginBottom: 3,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 3,
    }}>
      <Image style={{
        position: 'absolute',
        zIndex: 10,
        top: -20,
        left: -11,
        width: 50,
        height: 50,
      }} source={data.medal} />
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
          paddingTop: 5,
          paddingLeft: 15,
          color: Colors.GRAY_DARK,
        }}
      >
        조회수 {data.hits}만회
      </Text>
    </TouchableOpacity>
  )
}

export default function VideoList() {
  return (
    <View
      style={{
        height: 225,
      }}
    >
      {/* <Text>유튜버 조회수 Top 5 영상 정보가 들어갈 공간입니다.</Text>
      <Text>VideoList</Text> */}
      <FlatList
        data={mokupViedo}
        keyExtractor={(item) => item.storeId}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderVideo(item)}
        keyboardShouldPersistTaps="always"
        contentInset={{
          top: 0, left: SPACING_FOR_CARD_INSET,
          bottom: 0, right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
      />
    </View>
  )
}
