import React, { useState, useRef } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors, Typography } from '@styles'
import FeatherIcons from 'react-native-vector-icons/Feather'

// import components
import YoutuberList from '@components/List/YoutuberList'
import FlowList from '@components/Flow/FlowList'
import { Text } from '../../styles/CommonStyles'

// import screens
import MainHeader from './MainHeader'
import NoticeContainer from './NoticeContainer'

// import apis
import { getRegionYoutubers, getRegionFlows } from '@utils/api/main/index'
import { useAsync } from '@utils/hooks'

export default (props) => {
  const [region, setRegion] = useState({ key: 0, label: '서울특별시' })

  const [state] = useAsync(() => getRegionYoutubers(region.label), [region.label])
  const { loading: youtuberLoading, data: youtuberData, error } = state

  const [regionFlowsState] = useAsync(() => getRegionFlows(region.label), [region.label])
  const { loading: flowLoading, data: flowData, error: flowError } = regionFlowsState

  const [isOverScroll, setIsOverScroll] = useState(false)                             // 반응형 scrollTo 버튼
  const scrollRef = useRef(null)

  return (
    <View>
      <View style={styles.statusBar} />
      <ScrollView 
      showsVerticalScrollIndicator={false} 
      stickyHeaderIndices={[0]}
        // 스크롤 위치에 따른 scrollTo 버튼
        onScroll={event => {
          const y = event.nativeEvent.contentOffset.y
          const customOverScrollSignal = y >= 125

          setIsOverScroll(customOverScrollSignal)
        }}
        ref={scrollRef}
      >
        <MainHeader navi={props.navigation} region={region.label} setRegion={setRegion} />
        <NoticeContainer />
        {/* <SearchInput /> */}
        <View style={styles.wrapContainer}>
          {/* 🇰🇷  */}
          <Text style={styles.textContainer} size={20}><Text size={22} weight="BOLD">🇰🇷 {region.label}</Text>를 방문한 유튜버</Text>
          {!youtuberLoading && youtuberData ? <YoutuberList navi={props.navigation} data={youtuberData.ytbChannelTb} /> : null}
        </View>
        <View style={[styles.wrapContainer, { marginTop: 10 }]}>
          <Text style={styles.textContainer} size={20}><Text size={22} weight="BOLD">🇰🇷 {region.label}</Text> Top5 인기 동선</Text>
          <FlowList navi={props.navigation} data={flowData} />
        </View>
      </ScrollView>
      {
        // 스크롤 위치에 따른 scrollTo 버튼
        isOverScroll &&
        <TouchableOpacity onPress={() => { scrollRef.current.scrollTo({ x: 5, y: 5, animated: true }) }} style={{ position: 'absolute', bottom: 70, right: 25 }}>
          <FeatherIcons name="arrow-up" color={Colors.WHITE} size={20} style={{ padding: 10, backgroundColor: Colors.RED_3, borderRadius: 50 }} />
        </TouchableOpacity>
      }
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