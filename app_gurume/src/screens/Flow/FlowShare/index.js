import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'

// import components
import SelectBox from '@components/SelectBox'
import FlowMap from '@components/Flow/FlowMap'

// import screens
import FlowInput from './FlowInput'

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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 10,
    paddingHorizontal: 5,
  },
})