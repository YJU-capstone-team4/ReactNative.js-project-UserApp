import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import MapView from "react-native-map-clustering"
import { Marker } from 'react-native-maps'

// import components
import YoutubeMarker from './YoutubeMarker';

// import styles
import { Colors } from '@styles'
import { Text } from '../styles/CommonStyles'
import { clusterColorPicker } from '../utils'
import markerImage from '@images/delivery_128.png'

const GoogleMap = (props) => {
  const [region, setRegion] = useState({
    latitude: 36.86990,
    longitude: 127.89554,
    latitudeDelta: 4, // 0.009
    longitudeDelta: 4,
  })

  const initialMapState = {
    // markers,
    region: {
      ...region
    },
  };

  const [state, setState] = useState(initialMapState)

  // map Settings
  const _map = React.useRef(null)

  return (
    <>
      <MapView
        ref={_map}
        style={styles.container}
        initialRegion={state.region}
        onPress={() => props.setStoreToggle((prevStatus) => false)}
        tracksViewChanges={false}
        minZoomLevel={6}
        radius={60}
        minPoints={1}
        showsCompass={false}
        renderCluster={cluster => {
          const { id, geometry, onPress, properties } = cluster;
          const points = properties.point_count;
          const { inSideColor, outSideColor, clusterScale } = clusterColorPicker(points)

          let outSideWidth = 60 * clusterScale
          let inSideWidth = 45 * clusterScale

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
              <View style={[styles.clusterWrapper, { width: outSideWidth, height: outSideWidth, backgroundColor: outSideColor }]}>
                <View style={[styles.clusterWrapper, { width: inSideWidth, height: inSideWidth, backgroundColor: inSideColor }]}>
                  <Text weight={"BOLD"} color={Colors.WHITE} style={{ opacity: 1, fontSize: 22 }}>{points}+</Text>
                </View>
              </View>
            </Marker>
          );
        }}
      >
        {
          // 마커 생성
          props.data ? props.data.ytbStoreTb.map((value, index) => {
            const { _id, storeName, location } = value

            return (
              <Marker
                key={`marker-${index}`}
                onPress={React.useCallback(() => {
                  props.setStoreIndex(_id)
                  props.setStoreToggle((prevStatus) => !prevStatus ? true : prevStatus)
                }, [_id])}
                tracksViewChanges={false}
                coordinate={{ latitude: location.lat, longitude: location.lng }}
                showCallout={false}
              >
                <YoutubeMarker markerImage={markerImage} title={storeName} />
              </Marker>
            )
          }) : null
        }
      </MapView>
    </>
  )
}

// React.memo 를 이용하여 핵심 props 가 바뀌지 않는 이상 렌더링 방지
export default React.memo(GoogleMap)

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
  clusterWrapper: {
    borderRadius: 250,
    justifyContent: 'center',
    alignItems: 'center'
  }
})