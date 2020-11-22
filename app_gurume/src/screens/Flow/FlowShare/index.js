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
    paddingHorizontal: 5,
  },
})

export default function index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text>동선 - 공유</Text>
      <Text>FlowShare</Text>
      <SelectBox />
      <FlowMap />
      <FlowInput />
    </ScrollView>
  )
}
