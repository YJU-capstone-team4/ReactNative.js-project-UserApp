import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

// import styles
import { getStatusBarHeight } from "react-native-status-bar-height"
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'

// import components
import SearchInput from '@components/SearchInput'
import VideoList from '@components/List/VideoList'
import YoutubePlayer from '@components/YoutubePlayer'

// import screens
import YoutuberProfile from './YoutuberProfile'
import YoutuberRank from './YoutuberRank'
import YoutuberMovieInfo from './YoutuberMovieInfo'
import HashTagList from './HashTagList'
import useThumbsUp from './ThumbsUp'

// import apis
import {
  getYoutuberVideoInfo,
  getYoutuberRegionInfo,
  getFindOneYoutuberInfo,
  setYoutuberLike
} from '../../utils/api/youtuber'

// 임시 데이터
const YOUTUBER_ID = `5fb73d0e4c2de82830b54834`

export default () => {
  const [isVisible, setIsVisible] = useState(false)                       // 유트브 영상 재생 미니 모달 제어
  const [videoId, setVideoId] = useState('r-LNSGSCDJg')                   // 유튜브 영상 ID ( 현재 클릭한 )

  const [isOverScroll, setIsOverScroll] = useState(false)                 // 반응형 헤더 제어

  // useThumbs 데이터
  const [ThumbsUp, isActivity, setIsActivity] = useThumbsUp()

  // youtuber data
  const [youtuber, setYoutuber] = useState(null)
  const [regionTags, setRegionTags] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    async function init(argStoreId) {
      // * 유튜버 정보 로딩
      const getYoutuberInfo = await getFindOneYoutuberInfo(YOUTUBER_ID)
      setYoutuber(getYoutuberInfo)
      setIsActivity(getYoutuberInfo.youtuberLike)
      console.log(getYoutuberInfo)

      // * 데이터 로딩 ( 비디오, 지역태그 )
      const getVideoInfos = await getYoutuberVideoInfo(YOUTUBER_ID)
      const getRegionTags = await getYoutuberRegionInfo(YOUTUBER_ID)

      // * 데이터 바인딩
      setRegionTags(getRegionTags)
      setVideos(getVideoInfos.video)
    }

    init()
  }, [])

  const handleChangeLikeValue = async () => {
    // 유튜버 좋아요 결과 반영 API 실행
    console.log("바뀔 데이터 값은?", !isActivity)
    const { data } = await setYoutuberLike(!isActivity, YOUTUBER_ID)
    console.log('변경 결과는?', data)
  }

  return (
    <>
      <View style={[styles.statusBar, isOverScroll && styles.hiddenHeader]}>
        <Text size={18} weight="BOLD" style={styles.headerText}>{isOverScroll && youtuber ? youtuber.ytbChannel : '유튜버'}</Text>
        {
          // 스크롤 위치에 따른 반응형 헤더 설정
          isOverScroll &&
          <View style={{ position: 'absolute', right: 20, bottom: 9 }}>
            <ThumbsUp onPress={handleChangeLikeValue} isSmallVersion={true} />
          </View>
        }
      </View>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        // 스크롤 위치에 따른 반응형 헤더 설정
        onScroll={event => {
          const y = event.nativeEvent.contentOffset.y
          const customOverScrollSignal = y >= 125

          setIsOverScroll(customOverScrollSignal)
        }}
      >
        <SearchInput />
        <View style={styles.thumbsUpWrapper}>
          <ThumbsUp onPress={handleChangeLikeValue} />
        </View>
        <YoutuberProfile data={youtuber} />
        <YoutuberRank />
        <HashTagList />
        <View style={styles.wrapper}>
          <Text size={20} style={{ padding: 10, paddingLeft: 15 }}>
            🏆 조회수
          <Text weight="BOLD" size={22} color={Colors.RED_4}> Top 5 </Text>
          영상
         </Text>
          <VideoList data={videos} setIsVisible={setIsVisible} />
        </View>
        <Text size={18} style={{ padding: 10 }}>해시태그로 보는 지역별 영상</Text>
        <YoutuberMovieInfo data={regionTags} />
        <YoutubePlayer isVisible={isVisible} setIsVisible={setIsVisible} videoId={videoId} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: Colors.WHITE
  },
  statusBar: {
    paddingTop: getStatusBarHeight(),
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },
  headerText: {
    paddingVertical: 15
  },
  wrapper: {
    backgroundColor: Colors.GRAY_1 + "90",
    paddingVertical: 10
  },
  thumbsUpWrapper: {
    alignItems: 'flex-end',
    paddingRight: 20,
    top: 20,
    zIndex: 1000
  },
  hiddenHeader: {
    backgroundColor: '#DFF7F7',
    // paddingTop: getStatusBarHeight() + 10,
    // paddingVertical: 18,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  hiddenThumbsUpWrapper: {
    position: 'absolute',
    right: -20,
    bottom: 7
  }
})
