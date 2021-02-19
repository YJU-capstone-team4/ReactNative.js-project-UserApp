import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'

export default function YoutuberChart() {
  return (
    <>
      <View
        style={{
          backgroundColor: '#FFF9CD',
          height: 300,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 1.5,
          borderTopColor: Colors.GRAY_2,
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
        {/* <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>유튜버 검색</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>날짜 선택</Text>
        </TouchableOpacity> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({

})
