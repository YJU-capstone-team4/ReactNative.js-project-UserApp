import React from 'react'
import { StyleSheet, View } from 'react-native'

// import components
import SearchInput from '@components/SearchInput'
import GoogleMap from '@components/GoogleMap'
import Fab from '@components/Fab'

// import screens
import { Colors } from '@styles'
import SelectedYoutubers from './SelectedYoutubers'

// import styles

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // marginTop: 25,
    // opacity: 0.7,
  },
  topOpacityContainer: {
    position: 'absolute',
    top: 0,
    height: 25,
    width: '100%',
    backgroundColor: Colors.GRAY_9,
    opacity: 0.5,
  },
})

export default () => {
  return (
    <View style={styles.container}>
      <GoogleMap />
      <View style={styles.topOpacityContainer} />
      <SearchInput directionTop />
      <SelectedYoutubers />
      <Fab />
    </View>
  )
}
