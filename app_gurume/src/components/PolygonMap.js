import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from './../styles/CommonStyles';
import PropTypes from "prop-types"

// import modules
import MapView, { Marker, Polyline } from 'react-native-maps'
import { Colors } from '@styles';
import { markers } from '../model/mokupMap';

const PolygonMap = (props) => {
    const [region, setRegion] = useState({
        latitude: 36.86990,
        longitude: 127.89554,
        latitudeDelta: 3.5, // 0.009
        longitudeDelta: 3.5,
    })
    const [mapReady, setMapReady] = useState(false)

    const mapRef = React.useRef()

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.fitToSuppliedMarkers(props.data.map(({ _id }) => _id), { edgePadding: { top: 70, right: 70, bottom: 70, left: 70 } })
        }
    }, [mapReady, props.data])
    // TODO coordinate 전용 배열 만들기.

    return (
        <View>
            <MapView
                style={styles.mapContainer}
                initialRegion={region}
                minZoomLevel={5}
                showsCompass={false}
                moveOnMarkerPress={false}   // 마커 클릭 이벤트 제어
                scrollEnabled={false}
                zoomTapEnabled={false}
                liteMode={true}
                ref={mapRef}
                onMapReady={() => setMapReady(true)}
            >
                {
                    props.data ? props.data.map((marker, index) =>
                        <Marker
                            key={`marker-${index}`}
                            coordinate={marker}
                            tracksViewChanges={false}
                            anchor={{
                                x: 0.5,
                                y: 0.5
                            }}
                        >
                            <View style={styles.markerWrapper}>
                                <Text weight="BOLD" size={22}>{index + 1}</Text>
                            </View>
                        </Marker>
                    ) : null
                }
                {
                    props.data ? <Polyline
                        coordinates={props.data}
                        strokeWidth={5}
                        lineCap="round"
                        lineDashPhase={10}
                        strokeColor="#000"
                        fillColor="rgba(255,0,0,0.5)"
                        lineDashPattern={[20, 20]}
                    /> : null
                }
            </MapView>
        </View >
    )
}

PolygonMap.defaultProps = {
    markers: [],
    temp: PropTypes.array,
}

PolygonMap.propTypes = {
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
            name: PropTypes.string,
        })
    ),
}

export default PolygonMap

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        height: 300
    },
    markerWrapper: {
        backgroundColor: Colors.YELLOW_5,
        borderRadius: 50,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.GRAY_8,
        borderWidth: 2
    }
})
