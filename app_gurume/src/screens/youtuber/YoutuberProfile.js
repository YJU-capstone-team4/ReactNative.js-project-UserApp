import React from 'react'
import { View, Dimensions, Image, StyleSheet } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'
const { width, height } = Dimensions.get("window");

// import dummy Data
import thumb from '@images/thumbnail_1.jpg'

export default function youtuberProfile() {
  return (
    <View
      style={styles.container}
    >
      <Image style={styles.youtuberImage} source={thumb} />
      <Text style={styles.titleContainer} weight="BOLD" size={20}>문복희 Eat with Boki</Text>
      <Text>구독자 501만명</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    // height: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  youtuberImage: {
    width: width * 0.45,
    height: width * 0.45,
    borderRadius: 2000
  },
  titleContainer: {
    paddingTop: 20,
    paddingBottom: 7
  }
})
