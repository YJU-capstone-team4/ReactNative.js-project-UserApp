import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomMarker, MarkerContainer, MarkerTitleContainer } from '@styles/GoogleMapStyles'

// import styles
import { Text } from '@styles/CommonStyles'
import markerImage from '@images/delivery_128.png'

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

export default YoutubeMarker

const styles = StyleSheet.create({})
