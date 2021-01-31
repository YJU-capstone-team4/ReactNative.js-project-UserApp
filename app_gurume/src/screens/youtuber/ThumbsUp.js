import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'
import AntIcons from 'react-native-vector-icons/AntDesign';

export default function ThumbsUp() {

  const [isActivity, setIsActivity] = useState(false)
  return (
    <TouchableOpacity onPress={() => setIsActivity(!isActivity)} style={styles.container}>
      <AntIcons name="heart" size={20} color={isActivity ? Colors.RED_4 : Colors.GRAY_4} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 33,
    height: 33,
    borderRadius: 50,
    padding: 6,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
})