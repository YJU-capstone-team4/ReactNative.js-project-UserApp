import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '@styles';
import { Text } from '@styles/CommonStyles';

export default function HashTagList({ data, onPress }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 10,
        justifyContent: 'center'
      }}
    >
      { data ?
        data && data.map(item =>
          <TouchableOpacity onPress={() => onPress(item)} key={item} style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># {item}</Text>
          </TouchableOpacity>
        )
        :
        <>
          {/* TODO 커스텀 태그 데이터 추가하기 */}
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 야식이 입맛</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 푸드파이터</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 먹방</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 고기맛집</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 시골먹방</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 구독</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 강아지</Text>
          </View>
          <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
            <Text color={Colors.WHITE} weight="BOLD" size={16}># 대한민국</Text>
          </View>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
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