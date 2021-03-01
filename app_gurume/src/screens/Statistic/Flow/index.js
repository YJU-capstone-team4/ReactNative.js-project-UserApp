import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

// import components
import FlowList from '@components/Flow/FlowList'

export default function index() {
  return (
    <View style={styles.selectContainer}>
      <Text style={{ alignSelf: 'center', padding: 10 }}>동선</Text>
      {/* <FlowList /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  selectContainer: {
    flex: 1,
    // marginBottom: 50,
  },
  buttonContainer: {
    margin: 5,
    width: 100,
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: 'flex-end',
    alignItems: 'center'
  }
})
