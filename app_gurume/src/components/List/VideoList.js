import React from 'react'
import { View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get("window");
const SPACING_FOR_CARD_INSET = width * 0.01;

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

// import screens
import mokupViedo from '../../model/mokupViedo'

/**
 * 비디오 렌더링 컴포넌트
 * @param { video info } data 
 * @param { argIndex } index 
 * @param { youtubePlayModal } setIsVisible 
 */
const renderVideo = (data, index, setIsVisible) => {
  return (
    <TouchableOpacity onPress={() => { setIsVisible(true) }} activeOpacity={0.8} style={styles.container}>
      {/* {
        index < 3 ?
          <Image style={styles.medalContainer} source={data.medal} /> : null
      } */}
      {/* 유튜버 이미지 */}
      {/* <Image style={styles.youtuberImage} source={{ uri: String(data.ytbThumbnail) }} /> */}
      <Image style={styles.youtuberImage} source={data.ytbThumbnail} />
      {/* 제목  */}
      <Text weight={"BOLD"} numberOfLines={1} style={styles.youtubeTitle}>{data.ytbVideoName}</Text>
      {/* 조회수  */}
      {/* <Text weight={"BOLD"} style={styles.youtubeHits}>조회수 {parseInt(data.hits / 10000)} 만회</Text> */}
      <Text weight={"BOLD"} style={styles.youtubeHits}>조회수 {data.hits} 만회</Text>
    </TouchableOpacity>
  )
}

export default function VideoList(props) {
  return (
    <View
      style={{
        height: 225,
      }}
    >
      {/* 유튜버 조회수 Top 5 영상 위치 */}
      <FlatList
        data={mokupViedo}
        keyExtractor={(item, index) => `${item.storeId}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => renderVideo(item, index, props.setIsVisible)}
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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    width: 200
  },
  medalContainer: {
    position: 'absolute',
    zIndex: 10,
    top: -20,
    left: -11,
    width: 50,
    height: 50,
  },
  youtuberImage: {
    width: 200, height: 150, borderTopRightRadius: 10, borderTopLeftRadius: 10
  },
  youtubeTitle: {
    paddingTop: 9,
    paddingLeft: 13
  },
  youtubeHits: {
    paddingTop: 5,
    paddingLeft: 15,
    color: Colors.GRAY_DARK,
  }
})