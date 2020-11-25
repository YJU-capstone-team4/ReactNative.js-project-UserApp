import React, { useEffect, useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

// import dummy data
import { markers } from './dummyMapData'

// import styles
import { CustomMakrer, MarkerContainer, MarkerTitleContainer } from '../styles/GoogleMapStyles'
import { Text } from '../styles/CommonStyles'
import markerImage from '@images/delivery_128.png'
import youtuberThumb from '@images/thumbnail_5.jpg'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  videoConatiner: {
    width: 23,
    height: 23,
    borderRadius: 10,
  },
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
  const _map = React.useRef(null);
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
    <MapView
      ref={_map}
      style={styles.container}
      initialRegion={initialMapState.region}
      onRegionChange={region => setRegion(region)}
    >
      <MarkerSet region={region} data={initialMapState.markers} setToggle={props.setToggle} />
    </MapView>
  )
}
