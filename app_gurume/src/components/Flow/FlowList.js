import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

// import components
import PreviewThumb from '@components/PreviewThumb'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    // elevation: 3,
    margin: 10,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: Colors.CEMENT,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: Colors.BLUE_5,
    alignSelf: 'center',
    fontFamily: Typography.FONT_FAMILY_EXTRA_BOLD,
  },
})


export default function FlowList({ localShareFlow }) {
  return (
    <View
      style={styles.container}
    >
      {
        localShareFlow ? localShareFlow.map((value => <PreviewThumb data={value} />)) : null
      }
      
      <TouchableOpacity style={styles.buttonContainer} >
        <Text style={styles.buttonText}>더보기</Text>
      </TouchableOpacity>
    </View>
  )
}
