import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

// import components
import VideoList from '@components/List/VideoList'
import YoutuberList from '@components/List/YoutuberList'
import GoogleMiniMap from '@components/GoogleMiniMap.js'

export default (props) => {
  const { route } = props
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={[styles.contentWrapper, { paddingTop: 20, paddingBottom: 10, paddingLeft: 5 }]}>
          <Text weight={"BOLD"} style={{ fontSize: 50, color: Colors.GRAY_8 }}>{route.params.storeName}</Text>
          <Text style={{ marginTop: 10, color: Colors.GRAY_9 }} size={22}>대구광역시 북구 복현동 동북로 55길 13-6</Text>
        </View>
        <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
          <Text weight={"BOLD"} style={{ marginTop: 10, marginHorizontal: 10 }} size={22}>🌝 {route.params.storeName} 를 방문한 유튜버 정보</Text>
          <View style={[styles.videoWrapper, { paddingBottom: 10 }]}>
            <YoutuberList />
          </View>
        </View>
        <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
          <Text weight={"BOLD"} style={{ marginTop: 10, marginHorizontal: 10 }} size={22}>📺 {route.params.storeName} 관련 영상</Text>
          <View style={styles.videoWrapper}>
            <VideoList />
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <Text weight={"BOLD"} style={{ marginTop: 10 }} size={22}>🏆 {route.params.storeName} 를 포함한 Top3 동선</Text>
          <View style={[styles.contentWrapper, { marginBottom: 4 }]}>
            <Text size={20} style={{ marginTop: 20 }}>
              <Text size={22} weight={"EXTRA_BOLD"} style={{ color: Colors.RED_4 }}>1</Text>
              . 킹크랩이 땡기는 날에는 바로 여기!
            </Text>
            <Text size={20} style={{ marginTop: 20 }}>
              <Text size={22} weight={"EXTRA_BOLD"} style={{ color: Colors.RED_4 }}>2</Text>
              . 킹크랩이 땡기는 날에는 바로 여기!
            </Text>
            <Text size={20} style={{ marginTop: 20 }}>
              <Text size={22} weight={"EXTRA_BOLD"} style={{ color: Colors.RED_4 }}>3</Text>
              . 킹크랩이 땡기는 날에는 바로 여기!
            </Text>
          </View>
        </View>
        <View style={[styles.contentWrapper, { marginHorizontal: 7 }]}>
          <Text weight={"BOLD"} style={{ margin: 10, marginLeft: 0 }} size={22}>🐥 주변 명소 추천</Text>
          {/* <View style={{ }}> */}
          <GoogleMiniMap />
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  contentWrapper: {
    marginHorizontal: 10,
    marginBottom: 13,
  },
  videoWrapper: {
    marginTop: 10,
    backgroundColor: Colors.GRAY_2 + 50,
    paddingTop: 10,
    paddingBottom: 15,
  }
})