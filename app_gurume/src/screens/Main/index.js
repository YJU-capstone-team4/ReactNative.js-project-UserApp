import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";

// import components
import SearchInput from '@components/SearchInput'
import YoutuberList from '@components/List/YoutuberList'
import FlowList from '@components/Flow/FlowList'

// import screens
import MainHeader from './MainHeader'

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    marginTop: getStatusBarHeight(),
    // opacity: 0.6,
  },
})
export default () => {
  const [address, setAddress] = useState('')
  const lat = 33.364805
  const lng = 126.542671
  useEffect(() => {
    fetch(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}&input_coord=WGS84`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': '',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': 'dapi.kakao.com'
      }), 
    })
      .then((response) => response.json())
      .then((json) => {
        setAddress(json)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>
          {JSON.stringify(address)}
        </Text>
      </View>
      <MainHeader />
      <SearchInput />
      <Text style={{ padding: 10 }}>대구광역시를 방문한 유튜버</Text>
      <YoutuberList />
      <Text style={{ padding: 10 }}>대구광역시 Top5 인기 동선</Text>
      <FlowList />
    </ScrollView>
  )
}
