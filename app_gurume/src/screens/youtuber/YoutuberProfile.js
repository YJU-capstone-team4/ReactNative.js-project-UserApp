import React from 'react'
import { View, Dimensions, Image, StyleSheet } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'
const { width, height } = Dimensions.get("window");

// import dummy Data
import thumb from '@images/thumbnail_1.jpg'

export default function youtuberProfile({ data }) {
  return data ?
    <View
      style={styles.container}
    >
      <Image style={styles.youtuberImage} source={{ uri: data.ytbProfile }} />
      <Text style={styles.titleContainer} weight="BOLD" size={20}>{data.ytbChannel}</Text>
      <Text>구독자 {parseInt(data.ytbSubscribe / 1000)}만명</Text>
    </View>
    : <View style={styles.container}    >
      <View style={[styles.youtuberImage, { backgroundColor: Colors.GRAY_2 }]} />
      <Text style={styles.titleContainer} weight="BOLD" size={20}>로딩중...</Text>
      <Text>구독자 n만명</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  youtuberImage: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: 2000
  },
  titleContainer: {
    paddingTop: 20,
    paddingBottom: 7
  }
})
