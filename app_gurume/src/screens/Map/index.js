import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

// import apis
import { useAsync } from '../../utils/hooks'
import { getAllMarkers, getYoutuberMarkers } from '../../utils/api/map'


// import dummy data
import mokupYoutuber from '../../model/mokupYoutuber'
import { mokupMarkers1, mokupMarkers2 } from '../../model/mokupMap'

// import components
import GoogleMap from '@components/GoogleMap'

// import screens
import MapHeader from './MapHeader'
import MapStorePreview from './MapStorePreview';
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
  const [state, refetch] = useAsync(getAllMarkers, [])
  const { loading : markerLoading, data: markers, error } = state                                   // 메인지도 전체 마커

  // const [youtubeMarkers, setYoutubeMarkers] = useState(mokupMarkers1)             // 지도 메인 마커 데이터 셋
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

  if (markerLoading) return <View><Text>로딩중..</Text></View>
  if (error) return <View><Text>에러가 발생했습니다</Text></View>
  if (!markers) return null

  return (
    <Container>
      {/* Header */}
      {/* 구글 메인 Map Component */}
      <GoogleMap
        // navigation={navigation}
        data={markers}
        setStoreIndex={setStoreIndex}
        setStoreToggle={setStoreToggle}
        setYoutuberToggle={setYoutuberToggle}
      />
      {/* 새로고침 토글 */}
      <View style={styles.refreshIconWrapper}>
        <Text weight={"BOLD"} color={Colors.GREEN_3}>🎃  마커 초기화</Text>
      </View>

      {/* 가게 정보 토글 */}
      <ToggleContainer
        activeOpacity={0.6}
        style={styles.firstToggle}
        onPress={() => setStoreToggle(!storeToggle)}
      >
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
      {/* <SearchInput
        text={searchYoutuber}
        setText={setSearchYoutuber}
        onPress={setSearchToggle}
        directionTop
        navigation={navigation}
      /> */}
      <MapHeader
        navigation={navigation}
        onPress={setSearchToggle}
      />
      {/* 가게 정보 미리보기 모달 */}
      {storeToggle ? <MapStorePreview storeIndex={storeIndex} navigation={navigation} /> : null}
      {/* FIXME ( 제거 ) 유튜버 리스트 모달 */}
      {/* {youtuberToggle ? <SelectedYoutubers youtubers={youtubers} handleRemoveYoutuber={handleRemoveYoutuber} /> : null} */}
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
    // right: 135,
    top: 90,
    width: 100
  },
  refreshIconWrapper: {
    position: 'absolute',
    top: 90,
    right: 115,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.BLACK,
  }
})
