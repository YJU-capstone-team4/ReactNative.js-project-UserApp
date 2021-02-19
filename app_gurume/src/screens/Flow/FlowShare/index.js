import React from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

// import components
import SelectBox from '@components/SelectBox'
import FlowMap from '@components/Flow/FlowMap'

// import screens
import FlowInput from './FlowInput'

export default function index() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header... */}
      <View style={styles.textWrapper}>
        <FontAwesome name="rss-square" color={Colors.GRAY_9} size={18} />
        <Text style={styles.textContainer}> 내가 추가한 동선 폴더</Text>
      </View>
      <View style={{ paddingHorizontal: 6 }}>
        <SelectBox />
      </View>
      <FlowMap />
      <FlowInput />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.WHITE
  },
  textWrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    alignItems: 'center'
  },
  textContainer: {
    fontSize: 18,
    paddingLeft: 3
  },
})