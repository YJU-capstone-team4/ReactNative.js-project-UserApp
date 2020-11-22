import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors, Typography } from '@styles'

// apollo
import { useQuery } from '@apollo/react-hooks'
import { Queries } from '~/graphql'


StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0.3)");
  StatusBar.setTranslucent(true);
}

// import components
import SearchInput from '@components/SearchInput'
import YoutuberList from '@components/List/YoutuberList'
import FlowList from '@components/Flow/FlowList'

// import screens
import MainHeader from './MainHeader'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: getStatusBarHeight(),
  },
  textContainer: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    padding: 10
  }
})

export default () => {
  const [region, setRegion] = useState('서울특별시')
  const { loading, error, data } = useQuery(Queries.GET_TOP_FLOWS, {
    variables: { region },
  })

  const lat = 33.364805
  const lng = 126.542671

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <MainHeader />
      <SearchInput />
      <Text style={styles.textContainer}>{region}를 방문한 유튜버</Text>
      <YoutuberList />
      {/* <Text>{JSON.stringify(Queries.GET_TOP_FLOWS)}</Text> */}
      {/* <Text>{loading ? '로딩중 ?' + loading : '로딩중'}</Text> */}
      {/* <Text>{data ? '결과는 ?' + JSON.stringify(data.localShareFlow) : data}</Text> */}
      {/* <Text>{error ? '에러내용은 ?' + JSON.stringify(error) : JSON.stringify(error)}</Text> */}
      <Text style={styles.textContainer}>{region} Top5 인기 동선</Text>
      {data ? <FlowList localShareFlow={data.localShareFlow} /> : null}
    </ScrollView>
  )
}
