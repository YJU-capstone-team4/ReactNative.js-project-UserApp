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
    marginTop: 10,
    paddingHorizontal: 10,
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
      {/* <TouchableOpacity
        style={[styles.buttonContainer, { marginTop: 20, marginBottom: 10, width: 200 }]}
      >
        <Text style={styles.buttonText}>공유하기</Text>
      </TouchableOpacity> */}
    </ScrollView>
  )
}
