import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Animated, View, Dimensions, TouchableOpacity } from 'react-native'
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps'

// import dummy data
import { markers, mokupMarkers } from '../model/mokupMap'

// import styles
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomMarker, MarkerContainer, MarkerTitleContainer } from '../styles/GoogleMapStyles'
import { Colors } from '@styles'
import { Text, Button } from '../styles/CommonStyles'
import markerImage from '@images/delivery_128.png'
import clusterColorPicker from '../utils/clusterColorPicker';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 320;
// const CARD_WIDTH = width * 0.83;
const CARD_WIDTH = width;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const YoutubeMarker = (props) => (
  <MarkerContainer>
    <CustomMarker source={markerImage} />
    {
      // props.region.latitudeDelta < 0.02 ?
      //   <MarkerTitleContainer>
      //     <Image source={props.youtuberImage} style={styles.videoConatiner} />
      //     <Text style={{ lineHeight: 26, paddingLeft: 5 }} size={16} weight={"BOLD"}>{props.title}</Text>
      //   </MarkerTitleContainer>
      //   : null
    }
  </MarkerContainer>
);

const StoreInfo = ({ navigation, storeIndex }) => {
  const STORE_YOUTUBE_INFO = markers[storeIndex]
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardCover}>
        {/* 유튜브 썸네일 */}
        <Image source={STORE_YOUTUBE_INFO.image} style={styles.cardImage} resizeMode="cover" />
        {/* 가게 정보 */}
        <View style={styles.textContext}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {/* 가게 이름 */}
              <Text style={{ marginVertical: 6 }} weight={"EXTRA_BOLD"} numberOfLines={1}>{STORE_YOUTUBE_INFO.title}</Text>
              {/* 즐겨찾기 버튼 */}
              <TouchableOpacity style={{ marginTop: 3 }}>
                {/* TODO 로그인 전에는 전부 비활성화 -> 클릭시 로그인 창으로 Navigation 이용해서 이동 */}
                <MaterialCommunityIcons style={{ borderRadius: 50, backgroundColor: Colors.GRAY_6 }} name="star" color={Colors.YELLOW_3} size={20} />
              </TouchableOpacity>
            </View>
            {/* 가게 상세정보 */}
            <Text numberOfLines={1}>{STORE_YOUTUBE_INFO.description}</Text>
          </View>
          {/* navigation -> storeMap ( 가게 상세 정보 이동 ) */}
          <Button onPress={() => navigation.navigate('storeMap', {
            storeId: storeIndex, // FIXME storeId 바인딩하기.
            storeName: STORE_YOUTUBE_INFO.title,
          })} style={{ backgroundColor: Colors.RED_3, padding: 10 }}>
            <Text color={Colors.WHITE} weight={"BOLD"}>상세보기</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default function GoogleMap(props) {
  const [region, setRegion] = useState({
    latitude: 35.86990,
    longitude: 128.59554,
    latitudeDelta: 0.2, // 0.009
    longitudeDelta: 0.2,
  })

  const initialMapState = {
    // markers,
    region: {
      ...region
    },
  };

  const [state, setState] = useState(initialMapState)
  const [storeIndex, setStoreIndex] = useState(0)

  // map Settings
  const _map = React.useRef(null)
  const _scrollView = React.useRef(null)

  return (
    <>
      <MapView
        ref={_map}
        style={styles.container}
        initialRegion={state.region}
        // onRegionChange={React.useCallback((region) => setRegion(region))}
        tracksViewChanges={false}
        minZoomLevel={6}
        radius={60}
        minPoints={1}
        showsCompass={false}
        renderCluster={cluster => {
          const { id, geometry, onPress, properties } = cluster;
          const points = properties.point_count;
          const { inSideColor, outSideColor, clusterScale } = clusterColorPicker(points)

          let inSideWidth = 60 * clusterScale
          let outSideWidth = 40 * clusterScale

          return (
            <Marker
              key={`cluster-${id}`}
              coordinate={{
                longitude: geometry.coordinates[0],
                latitude: geometry.coordinates[1]
              }}
              onPress={onPress}
              tracksViewChanges={false}
            >
              <View style={{ width: inSideWidth, height: inSideWidth, backgroundColor: outSideColor, borderRadius: 200, opacity: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: outSideWidth, height: outSideWidth, backgroundColor: inSideColor, borderRadius: 250, justifyContent: 'center', alignItems: 'center' }}>
                  <Text weight={"BOLD"} color={Colors.WHITE} style={{ opacity: 1, fontSize: 22 }}>{points}+</Text>
                </View>
              </View>
            </Marker>
          );
        }}
      >
        {
          // TODO 커스텀 마커 이미지 적용하기.
          mokupMarkers.map((value, index) => {
            const { title, youtuberImage } = value
            console.log('🔥 ' + index + "번째 마커 생성!")
            return (
              <Marker
                key={`marker-${index}`}
                // onPress={React.useCallback(() => {
                //   props.setYoutuberToggle(false)

                //   // React.useCallback((index) => setStoreIndex(index), [])
                //   // React.useCallback((index) => setStoreIndex(index), [])
                //   props.setStoreToggle((prevStatus) => !prevStatus ? true : prevStatus)
                // }, [])}
                tracksViewChanges={false}
                coordinate={value}
              >
                {/* <YoutubeMarker youtuberImage={youtuberImage} title={title} /> */}
              </Marker>
            )
          })
        }
      </MapView>
      {/* {
        props.storeToggle ?
          <StoreInfo storeIndex={storeIndex} navigation={props.navigation} />
          : null
      } */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  videoConatiner: {
    width: 23,
    height: 23,
    borderRadius: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  cardContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 5,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    // maxWidth: 350,
  },
  cardCover: {
    display: 'flex',
    flex: 1,
    margin: 5,
    elevation: 3,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    backgroundColor: "#FFF",
    borderRadius: 6,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContext: {
    flex: 1.5,
    padding: 10,
    display: 'flex'
  }
})

// backup

// let mapIndex = 0
// let mapAnimation = new Animated.Value(0)

// useEffect(() => {
//   mapAnimation.addListener(({ value }) => {
//     let index = Math.floor(value / CARD_WIDTH + 0.05)  // 30 % 넘어 갈 경우 다음 번 인덱스로 넘기기
//     console.log('test : ', value)
//     console.log('index : ', index)

//     if (index >= state.markers.length) {
//       index = state.markers.length - 1
//     }

//     if (index <= 0) {
//       index = 0
//     }

//     clearTimeout(regionTimeout)

//     const regionTimeout = setTimeout(() => {
//       if (mapIndex !== index) {
//         mapIndex = index
//         const { coordinate } = state.markers[index]
//         _map.current.animateToRegion(
//           {
//             ...coordinate,
//             latitudeDelta: state.region.latitudeDelta,
//             longitudeDelta: state.region.longitudeDelta
//           },
//           350
//         )
//       }
//     }, 5)
//   })
// })

// {
//   props.storeToggle ?
//   <Animated.ScrollView
//     ref={_scrollView}
//     horizontal
//     scrollEventThrottle={1}
//     showsHorizontalScrollIndicator={false}
//     snapToInterval={CARD_WIDTH}
//     decelerationRate="fast"
//     style={styles.scrollView}
//     snapToAlignment="center"
//     contentInset={{
//       top: 0, left: SPACING_FOR_CARD_INSET,
//       bottom: 0, right: SPACING_FOR_CARD_INSET
//     }}
//     contentContainerStyle={{
//       paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
//     }}
//     onScroll={Animated.event(
//       [{ nativeEvent: { contentOffset: { x: mapAnimation, } } }],
//       { useNativeDriver: true }
//     )}
//   >
//     {
//       state.markers.map((marker, index) => (
//         <View style={styles.cardContainer} key={index}>
//           <View style={styles.cardCover}>
//             <Image
//               source={marker.image}
//               style={styles.cardImage}
//               resizeMode="cover"
//             />
//             <View style={styles.textContext}>
//               <View style={{ flex: 1 }}>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text style={{ marginVertical: 6 }} weight={"EXTRA_BOLD"} numberOfLines={1}>{marker.title}</Text>
//                   <TouchableOpacity style={{ marginTop: 3 }}>
//                     {/* TODO 로그인 전에는 전부 비활성화 -> 클릭시 로그인 창으로 Navigation 이용해서 이동 */}
//                     <MaterialCommunityIcons style={{ borderRadius: 50, backgroundColor: Colors.GRAY_6 }} name="star" color={Colors.YELLOW_3} size={20} />
//                   </TouchableOpacity>
//                 </View>
//                 <Text numberOfLines={1}>{marker.description}</Text>
//               </View>
//               <Button onPress={() => props.navigation.navigate('storeMap', {
//                 storeId: index,
//                 storeName: marker.title,
//               })} style={{ backgroundColor: Colors.RED_3 }} borderWidth={2}>
//                 <Text style={{ color: Colors.WHITE }} weight={"BOLD"}>상세보기</Text>
//               </Button>
//             </View>
//           </View>
//         </View>
//       ))
//     }
//   </Animated.ScrollView> : null
// }