import React, { useState } from 'react'
import { Platform, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors, Typography } from '@styles'

import mokupYoutuber from '@components/List/mokupYoutuber'

// import components
import SearchInput from '@components/SearchInput'
import GoogleMap from '@components/GoogleMap'

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
  toggleContainer: {
    position: 'absolute',
    top: 120,
    right: 10,
    backgroundColor: Colors.BLACK,
    width: 120,
    paddingVertical: 10,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  toggleText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.WHITE,
  },
  toggleOnText: {
    fontFamily: Typography.FONT_FAMILY_EXTRA_BOLD,
    paddingLeft: 5
  }
})

const MapScreen = ({ navigation }) => {
  const [youtubers, setYoutubers] = useState(mokupYoutuber)

  const handelRemoveYoutuber = (channelName) => {
    console.log(youtubers, channelName)

    setYoutubers(youtubers.filter((e) => (e.ytbChannel !== channelName)))
  }
  const [toggle, setToggle] = useState(true)

  return (
    <View style={styles.container}>
      <GoogleMap />
      <TouchableOpacity onPress={() => setToggle(!toggle)} style={styles.toggleContainer}>
        <Text style={styles.toggleText}>유튜버 리스트</Text>
        <Text style={[styles.toggleText, styles.toggleOnText,
        {
          color: toggle ? Colors.GREEN_3 : Colors.RED_3
        }
        ]}>{toggle ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
      <SearchInput directionTop navigation={navigation} />
      {toggle ? <SelectedYoutubers
        youtubers={youtubers}
        handelRemoveYoutuber={handelRemoveYoutuber}
      /> : null}
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
