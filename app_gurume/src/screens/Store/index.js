import React, { useState, useEffect } from 'react'
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
import mokupTrips from '../../model/mokupTrips'

// import api
import { getStoreYoutubers, getStoreInfo, getStoreAttraction } from '../../utils/api/map'
import { convertLocationDistance } from '../../utils'

export default (props) => {
  const { route } = props

  // youtubePlayModal
  const [isVisible, setIsVisible] = useState(false)

  const [store, setStore] = useState(null)
  const [attraction, setAttraction] = useState(null)
  const [youtubers, setYoutubers] = useState(null)
  const [videoId, setVideoId] = useState('r-LNSGSCDJg')

  // 페이지 전체 정보 로딩.
  useEffect(() => {
    // route.parms => storeId, storeName
    const { storeId, storeName } = route.params

    init(storeId)
  }, [route.params])

  async function init(argStoreId) {
    try {
      // 1. 가게 정보 불러오기
      const storeInfo = await getStoreInfo(argStoreId)
      setStore(storeInfo)

      // 2. 관련 유튜버 && 썸네일 불러오기
      const youtuberInfo = await getStoreYoutubers(argStoreId)
      setYoutubers(youtuberInfo)

      // 3. Top3 동선 불러오기
      // console.log("받아온 데이터는 : ", storeInfo, youtuberInfo)
      // 4. 주면 명소 불러오기
      let { attractionTb } = await getStoreAttraction(storeInfo.location)
      attractionTb = await attractionTb.map(item => {
        // copy array
        let tempArr = item

        // convert location < -- > distance
        const distance = convertLocationDistance(storeInfo.location, tempArr.location)
        tempArr.distance = distance
        console.log('추가된 데이터', tempArr)
        // add distance and return values
        return tempArr
      })
      setAttraction(attractionTb)
      console.log('변환된 데이터', attraction)

    } catch (e) {
      // err 발생

    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* TODO ScrollView 안에 FlatList가 들어가있으면 안되는 이슈로, ScrollView를 지우고, FlatList의 LisHeaderComponent를 이용하여 ScrollView 기능 대체 */}
      <FlatList
        ListHeaderComponent={
          store ? <>
            {/* 가게 정보 */}
            <StoreHeader store={store} />
            {/* 유튜버 정보 */}
            <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
              <Text weight={"BOLD"} style={{ marginTop: 10, marginLeft: 13 }} size={22}>🌝 {store.storeName} 를 방문한 유튜버 정보</Text>
              <View style={[styles.videoWrapper, { paddingBottom: 10 }]}>
                <YoutuberList data={youtubers} />
              </View>
            </View>
            {/* 관련 영상 */}
            <View style={[styles.contentWrapper, { marginHorizontal: 0 }]}>
              <Text weight={"BOLD"} style={{ marginTop: 10, marginLeft: 13 }} size={22}>📺 {store.storeName} 관련 영상</Text>
              <View style={styles.videoWrapper}>
                <VideoList youtubers={youtubers} setIsVisible={setIsVisible} />
              </View>
            </View>
            {/* Top 순위 동선 추천 */}
            <StoreRecommend route={route} />
            {/* 주변 명소 추천 */}
            <View style={[styles.contentWrapper, { marginHorizontal: 7 }]}>
              <Text weight={"BOLD"} style={{ marginTop: 10, marginLeft: 7 }} size={22}># 주변 명소 추천</Text>
            </View>
          </> : null
        }
        data={attraction}
        keyExtractor={(item, index) => `${item.storeId}-${index}`}
        numColumns={2}  // 괄호 안에 숫자만큼 열로 만들어줌.
        columnWrapperStyle={{ flexWrap: 'wrap', alignItems: 'center' }}
        renderItem={({ item }) => <StoreList data={item} />}
        ListFooterComponent={
          // TODO 푸터가 필요한가 ?
          <YoutubePlayer isVisible={isVisible} setIsVisible={setIsVisible} videoId={videoId} />
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