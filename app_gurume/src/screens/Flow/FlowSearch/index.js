import React, { useState, useEffect, useRef } from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcons from 'react-native-vector-icons/Feather'


// import components
import FlowList from '@components/Flow/FlowList'

// import screens
import PlusInput from './PlusInput'
import FlowHashTags from './FlowHashTags'

export default function index(props) {
  const [itemValue, setItemValue] = useState({ key: 0, label: '해시태그', option: 'tag' })
  const [hashTagText, setHashTagText] = useState('')
  const [signalOnPress, setSignalOnPress] = useState(false)

  const [flowsData, setFlowsData] = useState(null)

  const [isOverScroll, setIsOverScroll] = useState(false)                             // 반응형 헤더 제어
  const scrollRef = useRef(null)

  useEffect(() => {
    setFlowsData(null)
    setHashTagText('')
  }, [itemValue])

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        // 스크롤 위치에 따른 반응형 헤더 설정
        onScroll={event => {
          const y = event.nativeEvent.contentOffset.y
          const customOverScrollSignal = y >= 125

          setIsOverScroll(customOverScrollSignal)
        }}
        ref={scrollRef}
      >
        {/* Header ... */}
        <View style={styles.textWrapper}>
          <MaterialCommunityIcons name="pound-box" color={Colors.GRAY_9} size={18} />
          <Text style={styles.textContainer}>동선을 </Text>
          <View style={styles.textHighlighter}>
            <Text size={22} >{itemValue.label}</Text>
          </View>
          <Text style={styles.textContainer}>{itemValue.label === '해시태그' ? '를' : '을'} 통해 검색해보세요!</Text>
        </View>
        {/* 검색 컴포넌트 */}
        <PlusInput
          style={{ flex: 1 }}
          text={hashTagText}
          onChangeText={setHashTagText}
          onPress={setSignalOnPress}
          setItemValue={setItemValue}
          setFlowsData={setFlowsData}
          itemValue={itemValue}
        />
        {/* 추가된 해시태그 리스트 */}
        {itemValue.key === 0 &&
          <FlowHashTags
            signalOnPress={signalOnPress}
            setSignalOnPress={setSignalOnPress}
            hashTagText={hashTagText}
            setHashTagText={setHashTagText}
            setFlowsData={setFlowsData}
            itemValue={itemValue}
          />
        }
        {/* 해시태그 조합으로 검색된 공유 동선 리스트 */}
        <View style={[styles.textWrapper, { paddingTop: 25, paddingBottom: 7 }]}>
          <MaterialCommunityIcons name="pound-box" color={Colors.RED_3} size={18} />
          <Text style={styles.textContainer}>검색 결과</Text>
        </View>
        <FlowList
          naviPath={true}
          navi={props.navigation}
          data={flowsData}
        />
      </ScrollView>
      {
        // 스크롤 위치에 따른 반응형 헤더 설정
        isOverScroll &&
        <TouchableOpacity onPress={() => { scrollRef.current.scrollTo({ x: 5, y: 5, animated: true }) }} style={{ position: 'absolute', bottom: 30, right: 25 }}>
          <FeatherIcons name="arrow-up" color={Colors.WHITE} size={20} style={{ padding: 10, backgroundColor: Colors.RED_3, borderRadius: 50 }} />
        </TouchableOpacity>
      }
    </>
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
    paddingTop: 21,
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