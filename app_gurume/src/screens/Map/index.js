import React from 'react'
import { StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from '@styles'

// import components
import SearchInput from '@components/SearchInput'
import GoogleMap from '@components/GoogleMap'
import Fab from '@components/Fab'

// import screens
import SelectedYoutubers from './SelectedYoutubers'
import MapSideBar from './MapSideBar'

// import styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  topOpacityContainer: {
    position: 'absolute',
    top: 0,
    height: getStatusBarHeight(),
    width: '100%',
    backgroundColor: Colors.GRAY_9,
    opacity: 0.3,
  },
})

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GoogleMap />
      <View style={styles.topOpacityContainer} />
      <SearchInput directionTop navigation={navigation} />
      <SelectedYoutubers />
      <Fab />
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MapSideBar {...props} />}
      initialRouteName="Map">
      <Drawer.Screen name="Map" component={MapScreen} />
    </Drawer.Navigator>
  )
}
