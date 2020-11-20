import React from 'react'
import { ScrollView, StyleSheet, Text, Button } from 'react-native'

// import components
import FlowList from '@components/Flow/FlowList'
import SelectBox from '@components/SelectBox'
import FlowMap from '@components/Flow/FlowMap'

// import screens

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
      <Text>동선 - 내 동선</Text>
      <Text>FlowMe - Index.js</Text>
      <Text>내가 공유한 동선 리스트</Text>
      <FlowList />
      <Button style={{ flex: 1, width: 100 }} title="더보기" />
      <Text>추가한 동선 리스트</Text>
      <SelectBox />
      <FlowMap />
    </ScrollView>
  )
}
