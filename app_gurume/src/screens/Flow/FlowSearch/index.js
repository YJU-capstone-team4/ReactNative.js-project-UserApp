import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import components
import FlowList from '@components/Flow/FlowList'
import PlusInput from '@components/PlusInput'

// import screens
import FlowHashTags from './FlowHashTags'

export default function index() {
  const [hashTagText, setHashTagText] = useState('')

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header ... */}
      <View style={styles.textWrapper}>
        <MaterialCommunityIcons name="pound-box" color={Colors.RED_3} size={18} />
        <Text style={styles.textContainer}>해시태그 조합으로 </Text>
        <View style={styles.textHighlighter}>
          <Text size={22} >원하는 결과</Text>
        </View>
        <Text style={styles.textContainer}>를 한눈에!</Text>
      </View>
      {/* 해시태그 추가 컴포넌트 */}
      <PlusInput setHashTagText={setHashTagText} />
      {/* 추가된 해시태그 리스트 */}
      <FlowHashTags hashTagText={hashTagText} />
      {/* 해시태그 조합으로 검색된 공유 동선 리스트 */}
      <View style={[styles.textWrapper, { paddingTop: 5}]}>
        <MaterialCommunityIcons name="pound-box" color={Colors.RED_3} size={18} />
        <Text style={styles.textContainer}>검색 결과</Text>
      </View>
      <FlowList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 5,
    backgroundColor: Colors.WHITE
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
    paddingLeft: 10
  },
  textContainer: {
    fontSize: 18,
    paddingLeft: 5
  },
  textHighlighter: {
    borderBottomColor: Colors.RED_4 + "90",
    borderBottomWidth: 2,
  }
})
