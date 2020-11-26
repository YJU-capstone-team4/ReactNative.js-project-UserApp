import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";

// import components
import SelectBox from '@components/SelectBox'

// import screens
import Youtuber from './Youtuber'
import HashTag from './HashTag'
import Flow from './Flow'

// styles
import { Colors } from '@styles'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // paddingHorizontal: 10,
  },
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: Colors.BLUE_7
  }
})

export default () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.statusBar} />
      <Youtuber />
      <SelectBox />
      <HashTag />
      <Flow />
    </ScrollView>
  )
}
