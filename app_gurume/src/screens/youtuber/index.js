import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})

export default () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
      <Text style={{ height: 165 }}>안녕하세요! 유튜버 페이지 입니다.</Text>
    </ScrollView>
  )
}
