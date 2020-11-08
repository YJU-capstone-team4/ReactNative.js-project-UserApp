import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

const styles = StyleSheet.create({
  selectContainer: {
    backgroundColor: Colors.PRIMARY,
    marginBottom: 10,
  },
  buttonContainer: {
    elevation: 3,
    margin: 5,
    width: 100,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: Colors.DEEP_BLUE,
    alignSelf: 'center',
  },
  buttonText: {
    color: Colors.WHITE,
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
})

export default function YoutuberChart() {
  return (
    <>
      <View
        style={{
          backgroundColor: '#FFC8CD',
          height: 300,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>유튜버 구독자 & 조회수 비교 차트 정보가 들어갈 공간입니다.</Text>
        <Text>YoutuberChart</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>유튜버 검색</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>날짜 선택</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
