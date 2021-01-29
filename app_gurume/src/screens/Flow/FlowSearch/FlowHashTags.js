import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'

export default function FlowHashTags() {
  return (
    <View style={styles.container}    >
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 지역별 해시태그</Text>
        {/* 해시태그 */}
        <View style={styles.hashtagContainerWrapper}>
          <View style={styles.hashtagContainer}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}>서울</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>인천</Text>
          </View>
          <View style={styles.hashtagContainer}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}>광주</Text>
          </View>
          <View style={styles.hashtagContainer}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}>대구</Text>
          </View>
          <View style={styles.hashtagContainer}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}>울산</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>부산</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>세종시</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>경기</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>강원</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>충남</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>충북</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>경북</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>경남</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>전북</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>전남</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>제주</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 계절별 해시태그</Text>
        {/* 해시태그 */}
        <View style={styles.hashtagContainerWrapper}>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.YELLOW_6 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}>봄</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>여름</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>가을</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_2 }]}>
            <Text color={Colors.GRAY_5} weight="BOLD" size={16}>겨울</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text weight="BOLD" size={20} style={styles.titleWrapper}># 사용자가 추가한 해시태그</Text>
        {/* 해시태그 */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 야식이 입맛</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 고기맛집</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    borderRadius: 5,
    marginVertical: 10,
  },
  headerContainer: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 3,
    borderColor: Colors.GRAY_9,
  },
  hashtagContainerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_2,
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 15
  },
  titleWrapper: {
    paddingVertical: 3,
    marginLeft: 8,
    marginBottom: 5,
  },
  hashtagContainer: {
    backgroundColor: '#F5839A',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    marginVertical: 6,
    elevation: 1.5,
    minWidth: 60,
    alignItems: 'center',
    marginRight: 4
  },
})