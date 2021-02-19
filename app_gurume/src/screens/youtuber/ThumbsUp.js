import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

// import styles
import { Colors } from '@styles'
import AntIcons from 'react-native-vector-icons/AntDesign';

const useThumbsUp = (props) => {
  const [isActivity, setIsActivity] = useState(false)

  const ThumbsUp = (props) => {
    return (
      <TouchableOpacity onPress={() => setIsActivity(!isActivity)} style={[styles.container, props.isSmallVersion && styles.smallVersion]}>
        <AntIcons name="heart" size={props.isSmallVersion ? 16 : 20} color={isActivity ? Colors.RED_4 : Colors.GRAY_4} />
      </TouchableOpacity>
    )
  }

  return [ThumbsUp, isActivity, setIsActivity]
}

export default useThumbsUp

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
    zIndex: -1
  },
  smallVersion: {
    width: 25,
    height: 25,
    padding: 3
  }
})