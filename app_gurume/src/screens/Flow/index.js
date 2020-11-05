import React from 'react'
import { View, StyleSheet } from 'react-native'

// import navigation
import FlowTopNavigation from '../../navigations/FlowTopNavigation'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 50,
  },
})

export default function index() {
  return (
    <View style={styles.container}>
      <FlowTopNavigation />
    </View>
  )
}
