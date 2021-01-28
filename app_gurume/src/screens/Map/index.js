import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';


// import dummy data
import mokupYoutuber from '../../model/mokupYoutuber'
import { mokupMarkers1, mokupMarkers2 } from '../../model/mokupMap'

// import components
import SearchInput from '@components/SearchInput'
import GoogleMap from '@components/GoogleMap'

// import screens
import MapStorePreview from './MapStorePreview';
import SelectedYoutubers from './SelectedYoutubers'
import MapSideBar from './MapSideBar'
import ModalYoutuber from './../../components/ModalYoutuber';

// import styles
import { Colors } from '@styles'
import { Container, ToggleContainer } from './MapStyles'
import { Text } from '@styles/CommonStyles'

const MapScreen = ({ navigation }) => {


  // ******** 토글 제어 ********

  // <<-- 유튜버 토글
  const [youtuberToggle, setYoutuberToggle] = useState(false)
  const [youtubers, setYoutubers] = useState(mokupYoutuber)

  const handleRemoveYoutuber = (channelName) => {
    console.log(youtubers, channelName)

    setYoutubers(youtubers.filter((e) => (e.ytbChannel !== channelName)))
  }

  // -->>

  // <<-- 가게 토글
  const [storeIndex, setStoreIndex] = useState(0)
  const [storeToggle, setStoreToggle] = useState(false)
  // -->>
  
  // <<-- 유튜버 검색 결과 토글
  const [searchToggle, setSearchToggle] = useState(false)

  //******** 토글 제어 ********

  //******** 지도 제어 ********
  const [youtubeMarkers, setYoutubeMarkers] = useState(mokupMarkers1)             // 지도 메인 마커 데이터 셋
  const [searchYoutuber, setSearchYoutuber] = useState('')                        // 유튜버 검색 text
  // TODO 유튜버 검색 -> 현재 사용중인 마커 변경 알고리즘 작성.
  //******** 지도 제어 ********

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
      {/* 구글 메인 Map Component */}
      <GoogleMap
        // navigation={navigation}
        data={youtubeMarkers}
        setStoreIndex={setStoreIndex}
        setStoreToggle={setStoreToggle}
        setYoutuberToggle={setYoutuberToggle}
      />
      {/* 유튜버 리스트 토글 */}
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
      {/* 가게 정보 토글 */}
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
      {/* 검색 인풋박스 */}
      <SearchInput
        text={searchYoutuber}
        setText={setSearchYoutuber}
        onPress={setSearchToggle}
        directionTop navigation={navigation}
      />
      {/* 유튜버 리스트 모달 */}
      {youtuberToggle ? <SelectedYoutubers youtubers={youtubers} handleRemoveYoutuber={handleRemoveYoutuber} /> : null}
      {/* 가게 정보 미리보기 모달 */}
      {storeToggle ? <MapStorePreview storeIndex={storeIndex} navigation={navigation} /> : null}
      {/* 유튜버 검색 리스트 모달 */}
      {searchToggle ? <ModalYoutuber searchYoutuber={searchYoutuber} setVisibleToggle={setSearchToggle} /> : null}
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
