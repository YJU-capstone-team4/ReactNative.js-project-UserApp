import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'

// import components
import VideoList from '@components/List/VideoList'
import YoutuberList from '@components/List/YoutuberList'
import StoreList from '@components/List/StoreList.js'
import StoreRecommend from './StoreRecommend'
import StoreHeader from './StoreHeader'
import YoutubePlayer from '../../components/YoutubePlayer'

// import mokup data
import mokupViedo from '../../model/mokupViedo'

export default (props) => {
  const { route } = props
  const [isVisible, setIsVisible] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO ScrollView 안에 FlatList가 들어가있으면 안되는 이슈로, ScrollView를 지우고, FlatList의 LisHeaderComponent를 이용하여 ScrollView 기능 대체 */}
      <FlatList
        ListHeaderComponent={
          <>
            {/* 가게 정보 */}
            <StoreHeader route={route} />
            {/* 유튜버 정보 */}
            <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
              <Text weight={"BOLD"} style={{ marginTop: 10, marginLeft: 13 }} size={22}>🌝 {route.params.storeName} 를 방문한 유튜버 정보</Text>
              <View style={[styles.videoWrapper, { paddingBottom: 10 }]}>
                <YoutuberList />
              </View>
            </View>
            {/* 관련 영상 */}
            <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
              <Text weight={"BOLD"} style={{ marginTop: 10, marginLeft: 13 }} size={22}>📺 {route.params.storeName} 관련 영상</Text>
              <View style={styles.videoWrapper}>
                <VideoList />
              </View>
            </View>
            {/* Top 순위 동선 추천 */}
            <StoreRecommend route={route} />
            {/* 주변 명소 추천 */}
            <View style={[styles.contentWrapper, { marginHorizontal: 7 }]}>
              <Text weight={"BOLD"} style={{ marginTop: 10, marginLeft: 7 }} size={22}># 주변 명소 추천</Text>
            </View>
          </>
        }
        data={mokupViedo}
        keyExtractor={(item, index) => `${item.storeId}-${index}`}
        numColumns={2}  // 괄호 안에 숫자만큼 열로 만들어줌.
        columnWrapperStyle={{ flexWrap: 'wrap', alignItems: 'center' }}
        renderItem={({ item }) => <StoreList data={item} />}
        ListFooterComponent={
          // TODO 푸터가 필요한가 ?
          <YoutubePlayer isVisible={isVisible} setIsVisible={setIsVisible} videoId='r-LNSGSCDJg' />
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.WHITE,
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