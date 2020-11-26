import React, { useState } from 'react'
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
import { Container, ToogleContainer } from './MapStyles'
import { Text } from '@styles/CommonStyles'

const MapScreen = ({ navigation }) => {
  const [youtubers, setYoutubers] = useState(mokupYoutuber)

  const handelRemoveYoutuber = (channelName) => {
    console.log(youtubers, channelName)

    setYoutubers(youtubers.filter((e) => (e.ytbChannel !== channelName)))
  }
  const [toggle, setToggle] = useState(false)

  return (
    <Container>
      <GoogleMap setToggle={setToggle} />
      <ToogleContainer onPress={() => setToggle(!toggle)}>
        <Text weight={"BOLD"} style={{ color: Colors.WHITE, marginRight: 4 }}>유튜버 리스트</Text>
        <Text weight={"EXTRA_BOLD"} style={{ color: toggle ? Colors.GREEN_3 : Colors.RED_3 }}>{toggle ? 'ON' : 'OFF'}</Text>
      </ToogleContainer>
      <SearchInput directionTop navigation={navigation} />
      {
        toggle ? <SelectedYoutubers
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
