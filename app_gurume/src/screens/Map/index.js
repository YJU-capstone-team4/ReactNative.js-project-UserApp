import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

// import apis
import { useAsync } from '../../utils/hooks'
import { getAllMarkers } from '../../utils/api/map'

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

  // <<-- 가게 토글
  const [storeIndex, setStoreIndex] = useState(0)
  const [storeToggle, setStoreToggle] = useState(false)
  // -->>

  // <<-- 유튜버 검색 결과 토글
  const [searchToggle, setSearchToggle] = useState(false)
  const [searchYoutuber, setSearchYoutuber] = useState('')                              // 유튜버 검색 text
  // -->>

  //******** 토글 제어 ********

  //******** 지도 제어 ********
  const [markers, setMarkers] = useState(null)                                          // 메인지도 마커 관리 배열

  // <<-- 모든 마커 불러오기
  const [state, refetch] = useAsync(getAllMarkers, [])
  const [refreshMarker, setRefreshMarker] = useState(true)
  const { loading: markerLoading, data: allMarkers, error } = state
  // -->>

  useEffect(() => {
    if (!markerLoading && allMarkers) {
      setRefreshMarker(false)
      console.log("마커 초기화!")
      setMarkers(allMarkers)
    }
  }, [allMarkers])

  useEffect(() => {
    if (!refreshMarker) {
      console.log("마커 초기화!")
      setMarkers(allMarkers)
      setRefreshMarker(true)
    }
  }, [refreshMarker])

  const toggleRefreshBtn = () => {
    refetch()
    setRefreshMarker(true)
  }

  // TODO 유튜버 검색 -> 현재 사용중인 마커 변경 알고리즘 작성.
  //******** 지도 제어 ********

  // if (markerLoading) return <View><Text>aaa</Text></View>

  return (
    <Container>
      {/* 구글 메인 Map Component */}
      {
        !markerLoading && markers ?
          <GoogleMap
            data={markers}
            setStoreIndex={setStoreIndex}
            setStoreToggle={setStoreToggle}
          /> : null
      }
      {/* 새로고침 토글 */}
      <TouchableOpacity onPress={() => toggleRefreshBtn()} style={styles.refreshIconWrapper}>
        <Text weight={"BOLD"} color={Colors.GREEN_3}>🎃  마커 초기화</Text>
      </TouchableOpacity>

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
      {/* main header */}
      <MapHeader
        navigation={navigation}
        onPress={setSearchToggle}
        youtuber={searchYoutuber}
      />
      {/* 가게 정보 미리보기 모달 */}
      {!markerLoading && storeToggle ? <MapStorePreview storeIndex={storeIndex} navigation={navigation} /> : null}
      {/* 유튜버 검색 리스트 모달 */}
      {!markerLoading && searchToggle ?
        <ModalYoutuber
          searchYoutuber={searchYoutuber}
          setSearchYoutuber={setSearchYoutuber}
          setVisibleToggle={setSearchToggle}
          setMarkers={setMarkers}
        /> : null}
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
