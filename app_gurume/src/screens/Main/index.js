import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors, Typography } from '@styles'

// import components
import YoutuberList from '@components/List/YoutuberList'
import FlowList from '@components/Flow/FlowList'
import { Text } from '../../styles/CommonStyles'

// import screens
import MainHeader from './MainHeader'
import NoticeContainer from './NoticeContainer'

export default (props) => {
  const [region, setRegion] = useState({ key: 0, label: '서울특별시' })

  const lat = 33.364805
  const lng = 126.542671

  return (
    <View>
      <View style={styles.statusBar} />
      <ScrollView stickyHeaderIndices={[0]}>
        <MainHeader navi={props.navigation} region={region.label} setRegion={setRegion} />
        <NoticeContainer />
        {/* <SearchInput /> */}
        <View style={styles.wrapContainer}>
          {/* 🇰🇷  */}
          <Text style={styles.textContainer} size={20}><Text size={22} weight="BOLD">🇰🇷 {region.label}</Text>를 방문한 유튜버</Text>
          <YoutuberList region={region.label} />
        </View>
        <View style={[styles.wrapContainer, { marginTop: 10 }]}>
          <Text style={styles.textContainer} size={20}><Text size={22} weight="BOLD">🇰🇷 {region.label}</Text> Top5 인기 동선</Text>
          <FlowList region={region.label} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_1
  },
  textContainer: {
    paddingLeft: 10,
    paddingBottom: 15,
  },
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: Colors.GRAY_1
  },
  wrapContainer: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 30
  }
})