import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height"; 

// import components
import SelectBox from '@components/SelectBox'

// import screens
import Youtuber from './Youtuber'
import HashTag from './HashTag'
import Flow from './Flow'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 10,
  },
})

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Youtuber />
      <SelectBox />
      <HashTag />
      <Flow />
    </ScrollView>
  )
}
