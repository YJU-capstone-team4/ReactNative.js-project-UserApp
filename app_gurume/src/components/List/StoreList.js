import React from 'react'
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Text } from '@styles/CommonStyles'
const { width: deviceWidth, height } = Dimensions.get("window");

// import styles
import { Colors } from '@styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function StoreList({ data }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.InfoImageContainer}
                // source={data.ytbThumbnail}
                source={{
                    uri: data.ytbThumbnail,
                }}

            />
            <View style={[styles.infoContainer, { flex: 1, justifyContent: 'space-between', paddingTop: 10 }]}>
                <Text weight={"BOLD"} size={18}>{data.ytbVideoName}</Text>
                <TouchableOpacity
                    hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }} //터치영역을 확장
                    activeOpacity={0.5}
                >
                    <MaterialCommunityIcons style={styles.infoIconWarp} name="chevron-right" size={20} />
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <MaterialCommunityIcons style={styles.markerIconWarp} name="map-marker" />
                <Text style={styles.distanceText}>11.55km</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: -7,
        width: deviceWidth * 0.5,
        paddingHorizontal: 10
    },
    InfoImageContainer: {
        width: deviceWidth * 0.48, 
        height: 130, 
        alignSelf: 'center', 
        borderRadius: 10
    },
    distanceText: {
        paddingTop: 5,
        paddingLeft: 3,
        color: Colors.GRAY_6,
    },
    infoContainer: {
        flexDirection: 'row'
    },
    infoIconWarp: {
        marginTop: -2
    },
    markerIconWarp: {
        marginTop: 4
    }
})