import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

// import components
import FlowList from '@components/Flow/FlowList'
import SelectBox from '@components/SelectBox'
import FlowMap from '@components/Flow/FlowMap'

// import screens

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 15,
    paddingHorizontal: 5,
    backgroundColor: Colors.CEMENT
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
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
})

export default function index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* <Text>동선 - 내 동선</Text>
      <Text>FlowMe - Index.js</Text> */}
      {/* <Text>내가 공유한 동선 리스트</Text> */}
      <FlowList />
      {/* <Text>추가한 동선 리스트</Text> */}
      <SelectBox />
      <FlowMap />
    </ScrollView>
  )
}
