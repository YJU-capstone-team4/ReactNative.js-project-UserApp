import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

// import components
import SelectBox from '@components/SelectBox'

// import screens
import Youtuber from './Youtuber'
import HashTag from './HashTag'
import Flow from './Flow'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    paddingHorizontal: 10,
  },
})

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Youtuber />
      <SelectBox />
      <HashTag />
      <Flow />
    </ScrollView>
  )
}
