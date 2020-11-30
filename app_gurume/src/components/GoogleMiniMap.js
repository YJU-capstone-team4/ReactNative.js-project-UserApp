import React, { useState } from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

// import dummy data
import { sub_markers } from '../model/mokupMap'

// import styles
import { CustomMakrer, MarkerContainer, MarkerTitleContainer } from '../styles/GoogleMapStyles'
import { Colors } from '@styles'
import { Text, Button } from '../styles/CommonStyles'
import touristMarkerImage from '@images/tourist_128.png'
import coffeeMarkerImage from '@images/coffee_128.png'

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        height: height * 0.5,
        // height: 500 
        // ...StyleSheet.absoluteFillObject
    },
})

const CustomMarker = (props) => (
    <MarkerContainer>
        <CustomMakrer source={props.type === 'coffee' ? coffeeMarkerImage : touristMarkerImage} />
        {
            // props.region.latitudeDelta < 0.02 ?
            <MarkerTitleContainer style={{ borderColor: props.type === 'coffee' ? Colors.RED_9 : Colors.BLUE_3 }}>
                <Text style={{ lineHeight: 26, paddingLeft: 5 }} size={16} weight={"BOLD"}>{props.title}</Text>
            </MarkerTitleContainer>
            // : null
        }
    </MarkerContainer>
);

function MarkerSet(props) {
    const { data, region } = props
    return (
        data.map((value, index) => {
            const { title, youtuberImage, type } = value
            return (
                <Marker
                    key={`${title}-${index}`}
                    coordinate={value.coordinate}
                >
                    <CustomMarker region={region} youtuberImage={youtuberImage} title={title} type={type} />
                </Marker>
            )
        })
    )
}

//TODO 1. 해당 좌표 받아 온 후 가게 마커 로딩
//TODO 2  해당 좌표 반경으로 polyline circle 반경 X 미터로 설정
//TODO 3  마커 깜빡이는 문제 수정하기

export default function GoogleMiniMap(props) {
    const [region, setRegion] = useState({
        latitude: 35.86790,
        longitude: 128.59754,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    })

    const initialMapState = {
        sub_markers,
        region: {
            ...region
        },
    };

    const [state, setState] = React.useState(initialMapState)

    // map Settings
    const _mini_map = React.useRef(null)
    const _scrollView = React.useRef(null)

    return (
        <>
            <MapView
                ref={_mini_map}
                style={styles.container}
                initialRegion={state.region}
                onRegionChange={region => setRegion(region)}
                trackViewChanges={false}
                liteMode={true}
            >
                <MarkerSet
                    region={region}
                    data={state.sub_markers}
                />
            </MapView>
        </>
    )
}