import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import components
import SearchInput from '@components/SearchInput'
import FlowList from '@components/Flow/FlowList'

// import screens
import FlowHashTags from './FlowHashTags'

export default function index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* <Text>동선 - 검색</Text>
      <Text>FlowSearch - Index.js</Text> */}
      <SearchInput />
      <View style={styles.textWrapper}>
        <MaterialCommunityIcons name="pound" color={Colors.GRAY_7} size={18} />
        <Text style={styles.textContainer}>해시태그 조합으로 </Text>
        <View style={styles.textHighlighter}>
          <Text size={20} >원하는 결과</Text>
        </View>
        <Text style={styles.textContainer}>를 한눈에!</Text>
      </View>
      <FlowHashTags />
      <View style={styles.textWrapper}>
        <MaterialCommunityIcons name="folder-pound-outline" color={Colors.GRAY_7} size={18} />
        <Text style={styles.textContainer}>검색 결과</Text>
      </View>
      <View style={{ backgroundColor: '#3DFF92', paddingVertical: 10 }}>
        <Text>FlowList 순회 ...</Text>
        <FlowList />
      </View>
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
    paddingVertical: 10,
  },
  textContainer: {
    fontSize: 18,
    paddingLeft: 5
  },
  textHighlighter: {
    borderBottomColor: Colors.YELLOW_4,
    borderBottomWidth: 3,
  }
})
