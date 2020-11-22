import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'

// import images
import flowThumb_1 from '@images/flowThumb_1.jpg'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        position: 'absolute',
        bottom: 10,
        flexWrap: 'nowrap',
        maxWidth: 350,
    },
    buttonContainer: {
        elevation: 3,
        margin: 5,
        width: 100,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: Colors.DEEP_BLUE,
        alignSelf: 'center',
    },
    buttonText: {
        color: Colors.WHITE,
        alignSelf: 'center',
        fontFamily: Typography.FONT_FAMILY_BOLD,
    },
    tagContainer: {
        elevation: 3,
        margin: 5,
        paddingVertical: 12,
        paddingHorizontal: 10,
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
        color: 'white', fontSize: 40
    },
    thumbnailImage: {
        // flex: 1,
        height: 200,
        width: 350,
        borderRadius: 10
    },
    thumbnailBackground: {
        position: 'absolute',
        top: 18,
        // flex: 1,
        // alignSelf:'center',
        height: 200,
        width: 350,
        backgroundColor: 'black',
        opacity: 0.6,
        borderRadius: 10,
    },
})


export default function PreviewThumb({ data }) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginVertical: 5 }}>
            <Text>{console.log(data.shareTitle)}</Text>
            <Image source={flowThumb_1} style={styles.thumbnailImage} />
            {/* 불투명 Black 배경 */}
            <View style={styles.thumbnailBackground} />
            {/* 썸네일 제목 */}
            <View style={styles.thumbnailTitle}>
                <Text numberOfLines={1} style={styles.buttonText, styles.thumbTitleText}>
                    {data.shareTitle}
                </Text>
            </View>
            {/* 썸네일 관련 태그 */}
            <View
                style={styles.container}
            >
                {/* {JSON.stringify(data.userTags)} */}
                <View style={[styles.tagContainer, { backgroundColor: Colors.RED_5 }]}>
                    <Text style={styles.buttonText}>{data.adminTag.seasonTag}</Text>
                </View>
                {data.userTags.map((tag, index) =>
                    <View key={index} style={[styles.tagContainer, { backgroundColor: Colors.YELLOW_7 }]}>
                        <Text style={styles.buttonText}>{tag}</Text>
                    </View>
                )}
            </View>
        </View>
    )
}
