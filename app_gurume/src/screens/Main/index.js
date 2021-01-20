import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors, Typography } from '@styles'

// apollo
import { useQuery } from '@apollo/react-hooks'
import { Queries } from '~/graphql'

// import components
import SearchInput from '@components/SearchInput'
import YoutuberList from '@components/List/YoutuberList'
import FlowList from '@components/Flow/FlowList'

// import screens
import MainHeader from './MainHeader'


export default () => {
  const [region, setRegion] = useState('서울특별시')

  const lat = 33.364805
  const lng = 126.542671

  return (
    <ScrollView style={styles.container}>
      <View style={styles.statusBar} />
      <MainHeader />
      <SearchInput />
      <Text style={styles.textContainer}>{region}를 방문한 유튜버</Text>
      <YoutuberList />
      <Text style={styles.textContainer}>{region} Top5 인기 동선</Text>
      {/* TODO GraphQL 걷어 낸 부분 데이터 교체 필수 */}
      {/* {data ? <FlowList localShareFlow={data.localShareFlow} /> : null} */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    padding: 10
  },
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: Colors.RED_4
  }
})