import React from 'react'
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

// import components
import SelectBox from '@components/SelectBox'
import FlowMap from '@components/Flow/FlowMap'

// import screens
import FlowInput from './FlowInput'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    marginHorizontal: 10,
  },
  buttonContainer: {
    elevation: 3,
    width: 200,
    margin: 5,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: Colors.DEEP_BLUE,
    alignSelf: 'center',
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
    <ScrollView style={styles.container}>
      <Text>동선 - 공유</Text>
      <Text>FlowShare</Text>
      <SelectBox />
      <FlowMap />
      <FlowInput />
      <TouchableOpacity style={[styles.buttonContainer, { marginTop: 20, marginBottom: 10 }]}>
        <Text style={styles.buttonText}>공유하기</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
