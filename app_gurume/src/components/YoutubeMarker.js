import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomMarker, MarkerContainer, MarkerTitleContainer } from '@styles/GoogleMapStyles'

// import styles
import { Text } from '@styles/CommonStyles'
import markerImage from '@images/delivery_128.png'

const YoutubeMarker = (props) => (
    <MarkerContainer MarkerContainer >
        <CustomMarker source={props.markerImage} />
        <MarkerTitleContainer>
            <Text style={{ lineHeight: 26 }} size={16} weight={"BOLD"}>{props.title}</Text>
        </MarkerTitleContainer>
    </MarkerContainer>
)


export default YoutubeMarker

const styles = StyleSheet.create({})
