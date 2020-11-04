import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
    <View style={styles.container}>
      <Text>안녕하세요! 메인 페이지 입니다.</Text>
    </View>
  )
}
