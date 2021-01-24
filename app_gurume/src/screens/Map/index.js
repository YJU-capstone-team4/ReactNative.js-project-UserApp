import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import mokupYoutuber from '../../model/mokupYoutuber'

// import components
import SearchInput from '@components/SearchInput'
import GoogleMap from '@components/GoogleMap'

// import screens
import SelectedYoutubers from './SelectedYoutubers'
import MapSideBar from './MapSideBar'

// import styles
import { Colors } from '@styles'
import { Container, ToggleContainer } from './MapStyles'
import { Text } from '@styles/CommonStyles'

const MapScreen = ({ navigation }) => {
  const [youtubers, setYoutubers] = useState(mokupYoutuber)

  const handelRemoveYoutuber = (channelName) => {
    console.log(youtubers, channelName)

    setYoutubers(youtubers.filter((e) => (e.ytbChannel !== channelName)))
  }

  const [youtuberToggle, setYoutuberToggle] = useState(false)
  const [storeToggle, setStoreToggle] = useState(false)

  useEffect(() => {
    if (youtuberToggle) {
      setStoreToggle(false)
    }
  }, [youtuberToggle])

  useEffect(() => {
    if (storeToggle) {
      setYoutuberToggle(false)
    }
  }, [storeToggle])

  return (
    <Container>
      <GoogleMap navigation={navigation} storeToggle={storeToggle} setStoreToggle={setStoreToggle} setYoutuberToggle={setYoutuberToggle} />
      <ToggleContainer activeOpacity={0.6} onPress={() => setYoutuberToggle(!youtuberToggle)}>
        <Text weight={"BOLD"} style={styles.textTitle}>유튜버 리스트</Text>
        <Text weight={"EXTRA_BOLD"} style={{
          color: youtuberToggle ? Colors.GREEN_3 : Colors.RED_3,
          width: 33.5,
          textAlign: 'left'
        }}>
          {youtuberToggle ? 'ON' : 'OFF'}
        </Text>
      </ToggleContainer>
      <ToggleContainer activeOpacity={0.6} style={styles.firstToggle} onPress={() => setStoreToggle(!storeToggle)}>
        <Text weight={"BOLD"} style={styles.textTitle}>가게정보</Text>
        <Text weight={"EXTRA_BOLD"} style={{
          color: storeToggle ? Colors.GREEN_3 : Colors.RED_3,
          width: 35,
          textAlign: 'left'
        }}>
          {storeToggle ? 'ON' : 'OFF'}
        </Text>
      </ToggleContainer>
      <SearchInput directionTop navigation={navigation} />
      {
        youtuberToggle ? <SelectedYoutubers
          youtubers={youtubers}
          handelRemoveYoutuber={handelRemoveYoutuber}
        /> : null
      }
    </Container >
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

const styles = StyleSheet.create({
  textTitle: {
    flex: 1,
    color: Colors.WHITE,
    textAlign: 'right',
    marginRight: 5
  },
  firstToggle: {
    right: 135,
    width: 100
  },
})
