import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

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
  },
  buttonText: {
    color: Colors.WHITE,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
})

export default function index() {
  return (
    <View style={styles.selectContainer}>
      <Text style={{ alignSelf: 'center', padding: 10 }}>동선</Text>
      <FlowList />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>더보기</Text>
      </TouchableOpacity>
    </View>
  )
}
