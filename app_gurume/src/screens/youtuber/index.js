import React, { useState } from 'react'
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

export default () => {
  const [isVisible, setIsVisible] = useState(false)
  const [videoId, setVideoId] = useState('r-LNSGSCDJg')
  const [isOverScroll, setIsOverScroll] = useState(false)
  const [youtuber, setYoutuber] = useState('문복희 Eat With Boki')
  
  const [ThumbsUp, isActivity, setIsActivity] = useThumbsUp()

  return (
    <>
      <View style={[styles.statusBar, isOverScroll && styles.hiddenHeader]}>
        <Text size={18} weight="BOLD" style={styles.headerText}>{isOverScroll ? youtuber : '유튜버'}</Text>
        {
          // 스크롤 위치에 따른 반응형 헤더 설정
          isOverScroll &&
          <View style={{ position: 'absolute', right: 20, bottom: 9 }}>
            <ThumbsUp isSmallVersion={true} />
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
          <ThumbsUp />
        </View>
        <YoutuberProfile />
        <YoutuberRank />
        <HashTagList />
        <View style={styles.wrapper}>
          <Text size={20} style={{ padding: 10, paddingLeft: 15 }}>
            🏆 조회수
          <Text weight="BOLD" size={22} color={Colors.RED_4}> Top 5 </Text>
          영상
         </Text>
          <VideoList setIsVisible={setIsVisible} />
        </View>
        <Text size={18} style={{ padding: 10 }}>해시태그로 보는 지역별 영상</Text>
        <YoutuberMovieInfo />
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
