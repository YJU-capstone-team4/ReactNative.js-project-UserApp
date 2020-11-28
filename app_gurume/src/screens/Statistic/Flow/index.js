import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

// import components
import FlowList from '@components/Flow/FlowList'

const styles = StyleSheet.create({
  selectContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    elevation: 3,
    margin: 5,
    width: 100,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.DEEP_BLUE,
    alignSelf: 'flex-end',
    alignItems: 'center'

  }
})

export default function index() {
  return (
    <View style={styles.selectContainer}>
      <Text style={{ alignSelf: 'center', padding: 10 }}>동선</Text>
      <FlowList />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text weight={"BOLD"} style={{ color: Colors.WHITE }}>더보기</Text>
      </TouchableOpacity>
    </View>
  )
}
