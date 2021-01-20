import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Animated, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import MapView from "react-native-map-clustering";
import { Marker } from 'react-native-maps'

// import dummy data
import { markers } from '../model/mokupMap'

// import styles
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomMakrer, MarkerContainer, MarkerTitleContainer } from '../styles/GoogleMapStyles'
import { Colors } from '@styles'
import { Text, Button } from '../styles/CommonStyles'
import markerImage from '@images/delivery_128.png'

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 280;
const CARD_WIDTH = width * 0.83;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const CustomMarker = (props) => (
  <MarkerContainer>
    <CustomMakrer source={markerImage} />
    {
      props.region.latitudeDelta < 0.02 ?
        <MarkerTitleContainer>
          <Image source={props.youtuberImage} style={styles.videoConatiner} />
          <Text style={{ lineHeight: 26, paddingLeft: 5 }} size={16} weight={"BOLD"}>{props.title}</Text>
        </MarkerTitleContainer>
        : null
    }
  </MarkerContainer>
);

const MarkerSet = (props) => {
  const { data, region, setYoutuberToggle, setStoreToggle } = props
  return (
    data.map((value, index) => {
      const { title, youtuberImage } = value
      return (
        <Marker
          key={index}
          onPress={() => {
            setYoutuberToggle(false)
            setStoreToggle((prevStatus) => !prevStatus ? true : prevStatus)
          }}
          coordinate={value.coordinate}
        >
          <CustomMarker region={region} youtuberImage={youtuberImage} title={title} />
        </Marker>
      )
    })
  )
}

export default function GoogleMap(props) {
  const [region, setRegion] = useState({
    latitude: 35.86990,
    longitude: 128.59554,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  })

  const initialMapState = {
    markers,
    region: {
      ...region
    },
  };

  const [state, setState] = React.useState(initialMapState)

  // map Settings
  const _map = React.useRef(null)
  const _scrollView = React.useRef(null)

  let mapIndex = 0
  let mapAnimation = new Animated.Value(0)

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.05)  // 30 % 넘어 갈 경우 다음 번 인덱스로 넘기기
      console.log('test : ', value)
      console.log('index : ', index)

      if (index >= state.markers.length) {
        index = state.markers.length - 1
      }

      if (index <= 0) {
        index = 0
      }

      clearTimeout(regionTimeout)

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index
          const { coordinate } = state.markers[index]
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta
            },
            350
          )
        }
      }, 5)
    })
  })

  return (
    <>
      <MapView
        ref={_map}
        style={styles.container}
        initialRegion={state.region}
        onRegionChange={region => setRegion(region)}
      >
        {
          state.markers.map((value, index) => {
            const { title, youtuberImage } = value
            return (
              <Marker
                key={index}
                onPress={() => {
                  props.setYoutuberToggle(false)
                  props.setStoreToggle((prevStatus) => !prevStatus ? true : prevStatus)
                }}
                coordinate={value.coordinate}
              >
                <CustomMarker region={region} youtuberImage={youtuberImage} title={title} />
              </Marker>
            )
          })
        }
        {/* <MarkerSet
          region={region}
          data={state.markers}
          setYoutuberToggle={props.setYoutuberToggle}
          setStoreToggle={props.setStoreToggle}
        /> */}
        {/* <Marker
          coordinate={{
            latitude: 35.86990,
            longitude: 128.59554,
          }}
        >
          <CustomMarker region={region} title='할매국밥원조' />
        </Marker>
        <Marker coordinate={{
          latitude: 35.84190,
          longitude: 128.59754,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.86570,
          longitude: 128.59054,
        }} >
          <CustomMarker region={region} title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.86390,
          longitude: 128.59154,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.86190,
          longitude: 128.59054,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.85190,
          longitude: 128.59054,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.85990,
          longitude: 128.5554,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.86470,
          longitude: 128.59854,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.86990,
          longitude: 128.59954,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.86790,
          longitude: 128.59654,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker>
        <Marker coordinate={{
          latitude: 35.85290,
          longitude: 128.59354,
        }} >
          <CustomMarker region={region}  title={'칼국수맛집'} />
        </Marker> */}
      </MapView>
      {props.storeToggle ?
        <Animated.ScrollView
          ref={_scrollView}
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          decelerationRate="fast"
          style={styles.scrollView}
          snapToAlignment="center"
          contentInset={{
            top: 0, left: SPACING_FOR_CARD_INSET,
            bottom: 0, right: SPACING_FOR_CARD_INSET
          }}
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: mapAnimation, } } }],
            { useNativeDriver: true }
          )}
        >
          {
            state.markers.map((marker, index) => (
              <View style={styles.cardContainer} key={index}>
                <View style={styles.cardCover}>
                  <Image
                    source={marker.image}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  <View style={styles.textContext}>
                    <View style={{ flex: 1 }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginVertical: 6 }} weight={"EXTRA_BOLD"} numberOfLines={1}>{marker.title}</Text>
                        <TouchableOpacity style={{ marginTop: 3 }}>
                          <MaterialCommunityIcons style={{ borderRadius: 50, backgroundColor: Colors.GRAY_6 }} name="star" color={Colors.YELLOW_3} size={20} />
                        </TouchableOpacity>
                      </View>
                      <Text numberOfLines={1}>{marker.description}</Text>
                    </View>
                    <Button onPress={() => props.navigation.navigate('storeMap', {
                      storeId: index,
                      storeName: marker.title,
                    })} style={{ backgroundColor: Colors.RED_3 }} borderWidth={2}>
                      <Text style={{ color: Colors.WHITE }} weight={"BOLD"}>상세보기</Text>
                    </Button>
                  </View>
                </View>
              </View>
            ))
          }
        </Animated.ScrollView> : null}
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
    marginBottom: 5,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    maxWidth: 350,
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