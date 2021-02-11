import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from "prop-types"

// import modules
import MapView, { Marker, Polyline } from 'react-native-maps'
import { markers, tempMarkers } from '../model/mokupMap'

const PolygonMap = () => {
    const [region, setRegion] = useState({
        latitude: 36.86990,
        longitude: 127.89554,
        latitudeDelta: 3.5, // 0.009
        longitudeDelta: 3.5,
    })

    const mapRef = React.useRef()

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.fitToSuppliedMarkers(tempMarkers.map(({ _id }) => _id))
        }
    }, [tempMarkers])

    return (
        <View>
            <MapView
                style={styles.mapContainer}
                initialRegion={region}
                minZoomLevel={6}
                showsCompass={false}
                // moveOnMarkerPress={false}   // 마커 클릭 이벤트 제어
                // scrollEnabled={false}
                ref={mapRef}
            >
                {
                    tempMarkers.map((marker, index) => {
                        console.log(marker)
                        return <Marker key={`marker-${index}`} coordinate={marker} />
                    })
                }
                <Polyline
                    coordinates={tempMarkers}
                    strokeWidth={5}
                    lineCap="round"
                    lineDashPhase={10}
                    strokeColor="#000"
                    fillColor="rgba(255,0,0,0.5)"
                    lineDashPattern={[20, 20]}
                />
            </MapView>
        </View>
    )
}

PolygonMap.defaultProps = {
    markers: [],
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
    }
})
