import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

// import components
import SearchInput from '@components/SearchInput'
import FlowList from '@components/Flow/FlowList'

// import screens
import FlowHashTags from './FlowHashTags'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    paddingHorizontal: 20,
    // opacity: 0.6,
  },
})

export default function index() {
  return (
    <ScrollView style={styles.container}>
      <Text>동선 - 검색</Text>
      <Text>FlowSearch - Index.js</Text>
      <SearchInput />
      <Text>해시태그 조합으로 원하는 결과를 한눈에!</Text>
      <FlowHashTags />
      <Text>검색 결과</Text>
      <View style={{ backgroundColor: '#3DFF92', paddingVertical: 10 }}>
        <Text>FlowList 순회 ...</Text>
        <FlowList />
      </View>
    </ScrollView>
  )
}
