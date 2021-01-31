import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors } from '@styles'
import { getStatusBarHeight } from "react-native-status-bar-height"

// import components
import FlowTopNavigation from '~/navigations/FlowTopNavigation'
import FlowHeader from './FlowHeader'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // marginTop: getStatusBarHeight(),
    backgroundColor: Colors.WHITE
  }
})

export default function index() {
  return (
    <View style={styles.container}>
      {/* TODO FlowHeader 는 로그인 여부에 따라서 DISPLAY NONE 처리. */}
      {/* <FlowHeader /> */}
      <View style={{ marginTop: getStatusBarHeight() }} />
      <FlowTopNavigation />
    </View>
  )
}
