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
import ThumbsUp from './ThumbsUp'


export default () => {
  const [isVisible, setIsVisible] = useState(false)
  const [videoId, setVideoId] = useState('r-LNSGSCDJg')

  return (
    <ScrollView style={styles.container}>
      <SearchInput />
      <View style={{ alignItems: 'flex-end', paddingRight: 20, top: 20 }}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: getStatusBarHeight() + 5,
    backgroundColor: Colors.WHITE
    // opacity: 0.8,
  },
  wrapper: {
    backgroundColor: Colors.GRAY_1 + "90",
    paddingVertical: 10
  }
})
