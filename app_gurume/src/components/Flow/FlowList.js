import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import components
import PreviewThumb from '@components/PreviewThumb'

export default function FlowList({ localShareFlow, navi }) {
  return (
    <View
      style={styles.container}
    >
      {
        localShareFlow ? localShareFlow.map((value => <PreviewThumb data={value} />)) : null
      }

      <TouchableOpacity onPress={() => navi.navigate('sharedFlow')} style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>더보기</Text>
        <MaterialCommunityIcons name="chevron-right" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    elevation: 1,
    margin: 10,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: Colors.CEMENT,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: Colors.GRAY_8,
    alignSelf: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row'
  }
})