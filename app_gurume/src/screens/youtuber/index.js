import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

// import components
import SearchInput from '@components/SearchInput'
import ThumbsUp from '@components/ThumbsUp'
import HashTagList from '@components/HashTagList'
import MovieList from '@components/List/MovieList'

// import screens
import YoutuberProfile from './YoutuberProfile'
import YoutuberRank from './YoutuberRank'
import YoutuberMovieInfo from './YoutuberMovieInfo'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    opacity: 0.6,
  },
})

export default () => {
  return (
    <ScrollView style={styles.container}>
      <SearchInput />
      <ThumbsUp />
      <YoutuberProfile />
      <YoutuberRank />
      <HashTagList />
      <Text style={{ padding: 10 }}>조회수 Top 5 영상</Text>
      <MovieList />
      <Text style={{ padding: 10 }}>해시태그로 보는 지역별 영상</Text>
      <YoutuberMovieInfo />
    </ScrollView>
  )
}
