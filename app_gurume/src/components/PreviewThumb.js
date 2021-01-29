import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from './../styles/CommonStyles';
const { width, height } = Dimensions.get("window");

const PREVIEW_WIDTH = width * 0.95

// import images
import flowThumb_1 from '@images/flowThumb_1.jpg'
import flowThumb_2 from '@images/flowThumb_2.jpg'

export default function PreviewThumb({ data }) {
    return (
        <View style={styles.container}>
            <Image source={data.adminTag.seasonTag === '여름' ? flowThumb_1 : flowThumb_2} style={styles.thumbnailImage} />
            {/* 불투명 Black 배경 */}
            <View style={styles.thumbnailBackground} />
            {/* 썸네일 제목 */}
            <View style={styles.thumbnailTitle}>
                <Text weight="BOLD" numberOfLines={1} style={styles.buttonText, styles.thumbTitleText}>
                    {data.shareTitle}
                </Text>
            </View>
            {/* 썸네일 관련 태그 */}
            <View
                style={styles.hashtagContainer}
            >
                {/* {JSON.stringify(data.userTags)} */}
                <View style={[styles.tagContainer, { backgroundColor: '#F5839A' }]}>
                    <Text weight="BOLD" style={styles.buttonText}>{data.adminTag.regionTag[0]}</Text>
                </View>
                <View style={[styles.tagContainer, { backgroundColor: Colors.YELLOW_6 }]}>
                    <Text weight="BOLD" style={styles.buttonText}>{data.adminTag.seasonTag}</Text>
                </View>
                {data.userTags.map((tag, index) =>
                    <View key={index} style={[styles.tagContainer, { backgroundColor: Colors.GRAY_7 }]}>
                        <Text weight="BOLD" style={styles.buttonText}># {tag}</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 5
    },
    buttonText: {
        color: Colors.WHITE,
        alignSelf: 'center',
    },
    hashtagContainer: {
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
        position: 'absolute',
        bottom: 10,
        flexWrap: 'nowrap',
        maxWidth: 350,
    },
    tagContainer: {
        elevation: 2,
        margin: 4,
        marginRight: 3,
        padding: 10,
        borderRadius: 16,
        minWidth: 50,
        backgroundColor: Colors.PRIMARY,
        alignSelf: 'center',
    },
    thumbnailTitle: {
        position: 'absolute',
        top: 65,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    thumbTitleText: {
        color: Colors.WHITE,
        fontSize: 28,
        paddingBottom: 3,
        borderBottomColor: Colors.WHITE,
        borderBottomWidth: 2
    },
    thumbnailImage: {
        height: 200,
        width: PREVIEW_WIDTH,
        borderRadius: 10
    },
    thumbnailBackground: {
        position: 'absolute',
        // top: 18,
        // flex: 1,
        height: 200,
        width: PREVIEW_WIDTH,
        backgroundColor: 'black',
        opacity: 0.5,
        borderRadius: 10,
    },
})
