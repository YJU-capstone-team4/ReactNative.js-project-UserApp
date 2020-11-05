import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

// import components
import SearchInput from '../../components/SearchInput'
import YoutuberList from '../../components/List/YoutuberList'
import FlowList from '../../components/Flow/FlowList'

// import screens
import MainHeader from './MainHeader'

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    marginTop: 30,
    opacity: 0.6,
  },
})

export default () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <SearchInput />
      <Text style={{ padding: 10 }}>대구광역시를 방문한 유튜버</Text>
      <YoutuberList />
      <Text style={{ padding: 10 }}>대구광역시 Top5 인기 동선</Text>
      <FlowList />
    </View>
  )
}
