import React from 'react'
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'

// import dummy data
import { mokupMarkers1 } from '../../model/mokupMap'

// import styles
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, Button } from '@styles/CommonStyles'
import { Colors } from '@styles'
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.43;
const CARD_WIDTH = width;


// TODO 모듈화 마무리하기.
const MapStorePreview = ({ navigation, storeIndex }) => {
    const STORE_YOUTUBE_INFO = mokupMarkers1[storeIndex]

    const toggleNavation = () => {
        navigation.navigate('storeMap', {
            storeId: storeIndex, // FIXME storeId 바인딩하기.
            storeName: STORE_YOUTUBE_INFO.title,
        })
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardCover}>
                {/* 유튜브 썸네일 */}
                <Image source={STORE_YOUTUBE_INFO.image} style={styles.cardImage} resizeMode="cover" />
                {/* 가게 정보 */}
                <View style={styles.textContext}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* 가게 이름 */}
                            <Text style={{ marginVertical: 6 }} weight={"EXTRA_BOLD"} numberOfLines={1}>{STORE_YOUTUBE_INFO.title}</Text>
                            {/* 즐겨찾기 버튼 */}
                            <TouchableOpacity style={{ marginTop: 3 }}>
                                {/* TODO 로그인 전에는 전부 비활성화 -> 클릭시 로그인 창으로 Navigation 이용해서 이동 */}
                                <MaterialCommunityIcons style={styles.startIconContainer} name="star" />
                            </TouchableOpacity>
                        </View>
                        {/* 가게 상세정보 */}
                        <Text numberOfLines={1}>{STORE_YOUTUBE_INFO.description}</Text>
                    </View>
                    {/* navigation -> storeMap ( 가게 상세 정보 이동 ) */}
                    <Button onPress={() => toggleNavation()} style={{ backgroundColor: Colors.RED_3, padding: 10 }}>
                        <Text color={Colors.WHITE} weight={"BOLD"}>상세보기</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default MapStorePreview

const styles = StyleSheet.create({
    cardContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        marginBottom: 5,
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        // maxWidth: 350,
    },
    cardCover: {
        display: 'flex',
        flex: 1,
        margin: 5,
        elevation: 3,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        backgroundColor: "#FFF",
        borderRadius: 6,
        overflow: "hidden",
    },
    cardImage: {
        flex: 4,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContext: {
        flex: 1.5,
        padding: 10,
        display: 'flex'
    },
    startIconContainer: {
        borderRadius: 50,
        backgroundColor: Colors.GRAY_6,
        color: Colors.YELLOW_3,
        fontSize: 20
    }
})
