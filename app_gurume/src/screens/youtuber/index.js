import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height"; 

// import components
import SearchInput from '@components/SearchInput'
import ThumbsUp from '@components/ThumbsUp'
import HashTagList from '@components/HashTagList'
import VideoList from '@components/List/VideoList'

// import screens
import YoutuberProfile from './YoutuberProfile'
import YoutuberRank from './YoutuberRank'
import YoutuberMovieInfo from './YoutuberMovieInfo'

export default () => {
  return (
    <ScrollView style={styles.container}>
      <ThumbsUp />
      <YoutuberProfile />
      <SearchInput />
      <YoutuberRank />
      <HashTagList />
      <Text style={{ padding: 10 }}>조회수 Top 5 영상</Text>
      <VideoList />
      <Text style={{ padding: 10 }}>해시태그로 보는 지역별 영상</Text>
      <YoutuberMovieInfo />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: getStatusBarHeight(),
    // opacity: 0.8,
  },
})
