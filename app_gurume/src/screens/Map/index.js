import React, { useState } from 'react'
import { Platform, StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ToggleSwitch from 'toggle-switch-react-native'
import { Colors, Typography } from '@styles'

StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0.3)");
  StatusBar.setTranslucent(true);
}

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
  topOpacityContainer: {
    position: 'absolute',
    top: 0,
    height: getStatusBarHeight(),
    backgroundColor: Colors.GRAY_9,
    opacity: 0.4,
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
  const [toggle, setToggle] = useState(true)

  return (
    <View style={styles.container}>
      <GoogleMap />
      <View style={styles.topOpacityContainer}>
        <StatusBar barStyle="light-content" />
      </View>
      <TouchableOpacity onPress={() => setToggle(!toggle)} style={styles.toggleContainer}>
        <Text style={styles.toggleText}>유튜버 리스트</Text>
        <Text style={[styles.toggleText, styles.toggleOnText,
        {
          color: toggle ? Colors.GREEN_3 : Colors.RED_3
        }
        ]}>{toggle ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
      <SearchInput directionTop navigation={navigation} />
      {toggle ? <SelectedYoutubers /> : null}
    </View>
  )
}

const SelectBoxSwitch = () => {
  <ToggleSwitch

    isOn={false}
    onColor="green"
    offColor="red"
    label="Example label"
    labelStyle={{ color: "black", fontWeight: "900" }}
    size="large"
    onToggle={isOn => console.log("changed to : ", isOn)}
  />
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
