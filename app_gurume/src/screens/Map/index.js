import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

// import apis
import { useAsync } from '../../utils/hooks'
import { getAllMarkers, getYoutuberMarkers } from '../../utils/api/map'

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
  const [searchYoutuber, setSearchYoutuber] = useState({ _id: null, label: null })                              // 유튜버 검색 text
  // -->>

  //******** 토글 제어 ********

  //******** 지도 제어 ********

  // 모든 유튜버가 다녀간 마커 관리 배열
  const [markers, setMarkers] = useState(null)
  // const [isMarkerRefresh, setIsMarkerRefresh] = useState(false)

  // 사용자 선택에 따른 마커 라이프사이클 변경 로직
  useEffect(() => {
    console.log("start useEffect ....")
    setMarkers(null)
    async function init() {
      try {
        const data = await getAllMarkers()

        setMarkers(data)
      } catch (e) {
        // 전체 마커 refresh 메서드 실행
      }
    }

    async function refresh(argYoutuberId) {
      try {
        const data = await getYoutuberMarkers(argYoutuberId)
        // 데이터셋 변환
        let convertedMarkerArray = await data.map(({ ytbStoreTbId }) => {
          let tempObj = new Object()
          tempObj._id = ytbStoreTbId._id
          tempObj.storeName = ytbStoreTbId.storeInfo.storeName
          tempObj.location = ytbStoreTbId.storeInfo.location

          return tempObj
        })
        
        setMarkers({ count: convertedMarkerArray.length, ytbStoreTb: convertedMarkerArray })
      } catch (e) {
        // 전체 마커 refresh 메서드 실행
      }
    }

    if (!searchYoutuber._id || searchYoutuber._id === '') {
      init()
    }

    else if (searchYoutuber._id) {
      refresh(searchYoutuber._id)
    }
  }, [searchYoutuber])

  // 수동적 초기화 로직 실행
  const toggleRefreshBtn = () => {
    setStoreToggle(false)
    setSearchYoutuber({ _id: '', label: '' })
  }

  //******** 지도 제어 ********

  return (
    <Container>
      {/* 구글 메인 Map Component */}
      {
        markers ?
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
        searchYoutuber={searchYoutuber}
      />
      {/* 가게 정보 미리보기 모달 */}
      {markers && storeToggle ? <MapStorePreview storeIndex={storeIndex} navigation={navigation} /> : null}
      {/* 유튜버 검색 리스트 모달 */}
      {markers && searchToggle ?
        <ModalYoutuber
          searchYoutuber={searchYoutuber}
          setSearchYoutuber={setSearchYoutuber}
          setVisibleToggle={setSearchToggle}
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
