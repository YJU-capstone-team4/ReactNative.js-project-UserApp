import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

// import components
import VideoList from '@components/List/VideoList'
import YoutuberList from '@components/List/YoutuberList'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // marginTop: 10,
    backgroundColor: Colors.WHITE
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  contentWrapper: {
    marginHorizontal: 10,
    marginBottom: 13,
  },
  videoWrapper: {
    marginTop: 10,
    backgroundColor: Colors.RED_3 + 80,
    paddingTop: 10,
    paddingBottom: 15,
  }
})

export default (props) => {
  const { route } = props
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.contentWrapper}>
          <Text weight={"BOLD"} style={{ fontSize: 50, color: Colors.RED_3 }}>{route.params.storeName}</Text>
          <Text style={{ marginTop: 10, color: Colors.GRAY_9 }} size={22}>대구광역시 북구 복현동 동북로 55길 13-6</Text>
        </View>
        <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
          <Text weight={"BOLD"} style={{ marginTop: 10, marginHorizontal: 10 }} size={22}>{route.params.storeName} 를 방문한 유튜버 정보</Text>
          <View style={[styles.videoWrapper, { paddingBottom: 10 }]}>
            <YoutuberList />
          </View>
        </View>
        <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
          <Text weight={"BOLD"} style={{ marginTop: 10, marginHorizontal: 10 }} size={22}>{route.params.storeName} 관련 영상</Text>
          <View style={styles.videoWrapper}>
            <VideoList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
