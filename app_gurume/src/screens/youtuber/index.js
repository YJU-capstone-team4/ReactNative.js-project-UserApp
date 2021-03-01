import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

// import styles
import { getStatusBarHeight } from "react-native-status-bar-height"
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import FeatherIcons from 'react-native-vector-icons/Feather'

// import components
import SearchInput from '@components/SearchInput'
import VideoList from '@components/List/VideoList'
import YoutubePlayer from '@components/YoutubePlayer'
import ModalYoutuber from '@components/ModalYoutuber';

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
  getYoutuberHashtags,
  getFindOneYoutuberInfo,
  setYoutuberLike
} from '../../utils/api/youtuber'

// 임시 데이터
const YOUTUBER_ID = `5fb73d0e4c2de82830b54834`

export default (props) => {
  const { route } = props                                                             // 라우터 정보
  const [isVisible, setIsVisible] = useState(false)                                   // 유트브 영상 재생 미니 모달 제어
  const [videoId, setVideoId] = useState('r-LNSGSCDJg')                               // 유튜브 영상 ID ( 현재 클릭한 )

  const [isOverScroll, setIsOverScroll] = useState(false)                             // 반응형 헤더 제어

  // useThumbs 데이터
  const [ThumbsUp, isActivity, setIsActivity] = useThumbsUp()

  // <<-- 유튜버 검색 결과 토글
  const [searchToggle, setSearchToggle] = useState(false)
  const [searchYoutuber, setSearchYoutuber] = useState({ _id: null, label: null })    // 유튜버 검색 text
  // -->>

  // youtuber data
  const [youtuber, setYoutuber] = useState(null)
  const [regionTags, setRegionTags] = useState(null)
  const [userTags, setUserTags] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    async function init(argYoutuber) {
      setYoutuber(null)
      setUserTags(null)
      // * 유튜버 정보 로딩
      const getYoutuberInfo = await getFindOneYoutuberInfo(argYoutuber ? argYoutuber : YOUTUBER_ID)
      setYoutuber(getYoutuberInfo)
      setIsActivity(getYoutuberInfo.youtuberLike)

      // * 데이터 로딩 ( 비디오, 지역태그 )
      const getUserTagInfos = await getYoutuberHashtags(argYoutuber ? argYoutuber : YOUTUBER_ID)
      const getVideoInfos = await getYoutuberVideoInfo(argYoutuber ? argYoutuber : YOUTUBER_ID)
      const getRegionTags = await getYoutuberRegionInfo(argYoutuber ? argYoutuber : YOUTUBER_ID)

      // * 데이터 바인딩
      setUserTags(getUserTagInfos)
      setRegionTags(getRegionTags)
      setVideos(getVideoInfos.video)
    }

    init(searchYoutuber._id)
  }, [searchYoutuber])

  // 라우터 감지 후 유튜버 정보 반환
  useEffect(() => {
    if (route.params && route.params.youtuberId) {
      setSearchYoutuber({
        _id: route.params.youtuberId,
        label: route.params.youtubeChannel
      })
    }
  }, [route.params])

  const handleChangeLikeValue = () => {
    // 유튜버 좋아요 결과 반영 API 실행
    setYoutuberLike(searchYoutuber._id)
  }

  const scrollRef = useRef(null)

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
        ref={scrollRef}
      >
        <SearchInput onPress={setSearchToggle} />
        <View style={styles.thumbsUpWrapper}>
          <ThumbsUp onPress={handleChangeLikeValue} />
        </View>
        <YoutuberProfile data={youtuber} />
        <YoutuberRank data={youtuber} />
        <HashTagList data={userTags} />

        {/*  조회수 Top5 유튜브 영상 컴포넌트  */}
        <View style={styles.wrapper}>
          <Text size={20} style={{ paddingTop: 10, paddingLeft: 15 }}>
            🏆 조회수
          <Text weight="BOLD" size={22} color={Colors.RED_4}> Top 5 </Text>
          영상
         </Text>
          <VideoList data={videos} setIsVisible={setIsVisible} />
        </View>

        {/*  지역별 유튜브 영상 컴포넌트  */}
        <View style={[styles.wrapper, { marginTop: 25 }]}>
          <Text size={20} style={{ padding: 10, paddingLeft: 15 }}>🌏 해시태그로 보는 지역별 영상</Text>
          {regionTags && <YoutuberMovieInfo navi={props.navigation} searchYoutuber={searchYoutuber} data={regionTags} />}
        </View>
      </ScrollView>

      {
        // 스크롤 위치에 따른 반응형 헤더 설정
        isOverScroll &&
        <TouchableOpacity onPress={() => { scrollRef.current.scrollTo({ x: 5, y: 5, animated: true }) }} style={{ position: 'absolute', bottom: 30, right: 25 }}>
          <FeatherIcons name="arrow-up" color={Colors.WHITE} size={20} style={{ padding: 10, backgroundColor: Colors.RED_3, borderRadius: 50 }} />
        </TouchableOpacity>
      }

      {/* 유튜브 영상 재생 모달 */}
      <YoutubePlayer isVisible={isVisible} setIsVisible={setIsVisible} videoId={videoId} />

      {/* 유튜버 검색 리스트 모달 */}
      {searchToggle ?
        <ModalYoutuber
          searchYoutuber={searchYoutuber}
          setSearchYoutuber={setSearchYoutuber}
          setVisibleToggle={setSearchToggle}
        /> : null}
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
    backgroundColor: '#DFF7F7'
  },
  hiddenThumbsUpWrapper: {
    position: 'absolute',
    right: -20,
    bottom: 7
  }
})
