import React from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <MaterialCommunityIcons name="youtube" color={Colors.RED_4} size={20} />
        {/* TODO 헤더 네이밍 다시하자. */}
        <Text style={styles.textContainer}> 공유하지 않은 동선 리스트</Text>
      </View>
      <SelectBox />
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
    paddingVertical: 10,
    paddingLeft: 5,
    alignItems: 'center'
  },
  textContainer: {
    fontSize: 18,
    paddingLeft: 3
  },
})