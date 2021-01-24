import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

export default function index() {
  return (
    <View style={styles.selectContainer}>
      <Text style={{ alignSelf: 'center', padding: 10 }}>해시태그</Text>
      <View
        style={{
          backgroundColor: '#00EBFF',
          height: 300,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Text>해시태그 비교 차트 정보가 들어갈 공간입니다.</Text>
        <Text>HashTagChart</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>더보기</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  selectContainer: {
    marginBottom: 10,
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
    textTransform: 'uppercase',
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
})
