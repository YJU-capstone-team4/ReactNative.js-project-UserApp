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
import LocationSelector from './ModalSelector'

export default (props) => {
  const [region, setRegion] = useState('서울특별시')

  const lat = 33.364805
  const lng = 126.542671

  return (
    <View>
      <View style={styles.statusBar} />
      <ScrollView stickyHeaderIndices={[0]}>
        <MainHeader navi={props.navigation} region={region} setRegion={setRegion} />
        <NoticeContainer />
        {/* <SearchInput /> */}
        <View style={styles.wrapContainer}>
          <Text style={styles.textContainer} size={20}>🇰🇷 <Text size={22} weight="BOLD">{region}</Text>를 방문한 유튜버</Text>
          <YoutuberList />
        </View>
        <View style={styles.wrapContainer, { marginTop: 5 }}>
          <Text style={styles.textContainer}>{region} Top5 인기 동선</Text>
        </View>
        <View style={styles.wrapContainer, { marginTop: 5 }}>
          <Text style={styles.textContainer}>{region} Top5 인기 동선</Text>
        </View>
        <View style={styles.wrapContainer, { marginTop: 5 }}>
          <Text style={styles.textContainer}>{region} Top5 인기 동선</Text>
        </View>
        {/* TODO GraphQL 걷어 낸 부분 데이터 교체 필수 */}
        {/* {data ? <FlowList localShareFlow={data.localShareFlow} /> : null} */}
        <LocationSelector/>
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