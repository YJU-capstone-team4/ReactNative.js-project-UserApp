import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors } from '@styles'
import { getStatusBarHeight } from "react-native-status-bar-height"

// import components
import FlowTopNavigation from '~/navigations/FlowTopNavigation'
// import FlowHeader from './FlowHeader'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.WHITE
  }
})

export default function index() {
  return (
    <View style={styles.container}>
      {/* <FlowHeader /> */}
      <View style={{ marginTop: getStatusBarHeight() }} />
      <FlowTopNavigation />
    </View>
  )
}
