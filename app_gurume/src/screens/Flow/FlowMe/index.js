import React from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import components
import FlowList from '@components/Flow/FlowList'
import SelectBox from '@components/SelectBox'
import FlowMap from '@components/Flow/FlowMap'

// import screens

export default function index(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* <Text>FlowMe - Index.js</Text> */}
      <View style={styles.textWrapper}>
        <MaterialCommunityIcons name="youtube" color={Colors.RED_4} size={20} />
        <Text style={styles.textContainer}> 내가 공유한 동선 리스트</Text>
      </View>
      <FlowList navi={props.navigation} />
      {/* <Text>추가한 동선 리스트</Text> */}
      <SelectBox />
      <FlowMap />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 15,
    paddingHorizontal: 5,
    backgroundColor: Colors.WHITE
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
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  textWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center'
  },
  textContainer: {
    fontSize: 18,
    paddingLeft: 3
  },
})