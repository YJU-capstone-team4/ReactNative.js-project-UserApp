import React from 'react'
import { StyleSheet, View } from 'react-native'

// import components
import SearchInput from '@components/SearchInput'
import GoogleMap from '@components/GoogleMap'
import Fab from '@components/Fab'

// import screens
import SelectedYoutubers from './SelectedYoutubers'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // marginTop: 30,
    // opacity: 0.7,
  },
})

export default () => {
  return (
    <View style={styles.container}>
      {/* <View style={{ zIndex: 1000000, height: 25, backgroundColor: 'black', opacity: 0.5 }} /> */}
      <SearchInput />
      <SelectedYoutubers />
      <GoogleMap />
      <Fab />
    </View>
  )
}
