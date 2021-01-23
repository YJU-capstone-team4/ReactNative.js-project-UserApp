import React from 'react'
import { StyleSheet } from 'react-native'

import { Text, Image } from '@styles/CommonStyles'
import { CustomMarker, MarkerContainer, MarkerTitleContainer } from '@styles/GoogleMapStyles'

import markerImage from '@images/delivery_128.png'

const styles = StyleSheet.create({
    videoConatiner: {
        width: 23,
        height: 23,
        borderRadius: 10,
    },
})

export default function YoutubeMarker(props) {
    return (
        <MarkerContainer>
            <CustomMarker source={markerImage} />
            {
                props.region.latitudeDelta < 0.02 ?
                    <MarkerTitleContainer>
                        <Image source={props.youtuberImage} style={styles.videoConatiner} />
                        <Text style={{ lineHeight: 26, paddingLeft: 5 }} size={16} weight={"BOLD"}>{props.title}</Text>
                    </MarkerTitleContainer>
                    : null
            }
        </MarkerContainer>
    )
}
