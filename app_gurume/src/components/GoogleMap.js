import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Animated, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

// import dummy data
import { markers } from './dummyMapData'

// import styles
import { CustomMakrer, MarkerContainer, MarkerTitleContainer } from '../styles/GoogleMapStyles'
import { Colors } from '@styles'
import { Text, Button } from '../styles/CommonStyles'
import markerImage from '@images/delivery_128.png'

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 280;
const CARD_WIDTH = width * 0.83;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
// const SPACING_FOR_CARD_INSET = width * 0.1 - 20;

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
    // padding: 10,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,

    // marginLeft: 10,
    // marginRight: 20,
    // marginHorizontal: width * 0.02,
    marginBottom: 5,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    maxWidth: 350,
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

function MarkerSet(props) {
  return (
    props.data.map((value, index) => {
      const { title, youtuberImage } = value
      return (
        <Marker
          key={index}
          onPress={() => props.setToggle(false)}
          coordinate={value.coordinate}
        >
          <CustomMarker region={props.region} youtuberImage={youtuberImage} title={title} />
        </Marker>
      )
    })
  )
}

export default function GoogleMap(props) {
  //TODO Sliding Items on MapView
  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

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

  return (
    <>
      <MapView
        ref={_map}
        style={styles.container}
        initialRegion={initialMapState.region}
        onRegionChange={region => setRegion(region)}
      >
        <MarkerSet region={region} data={initialMapState.markers} setToggle={props.setToggle} />
      </MapView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        // pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        style={styles.scrollView}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
      >
        {
          initialMapState.markers.map((marker, index) => (
            <View style={[styles.cardContainer]} key={index}>
              <View style={{
                display: 'flex',
                flex: 1,
                // padding: 10,
                margin: 5,
                elevation: 3,
                shadowRadius: 10,
                shadowColor: "#000",
                shadowOpacity: 0.3,
                shadowOffset: { x: 2, y: -2 },
                backgroundColor: "#FFF",
                borderRadius: 6,
                overflow: "hidden",
              }}>
                <Image
                  source={marker.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.textContext}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ marginVertical: 6 }} weight={"EXTRA_BOLD"} numberOfLines={1}>{marker.title}</Text>
                    <Text numberOfLines={1}>{marker.description}</Text>
                  </View>
                  <Button style={{}} borderWidth={2}>
                    <Text style={{ color: Colors.RED_3 }} weight={"BOLD"}>상세보기</Text>
                  </Button>
                </View>
              </View>
            </View>
          ))
        }
      </Animated.ScrollView>
    </>
  )
}
