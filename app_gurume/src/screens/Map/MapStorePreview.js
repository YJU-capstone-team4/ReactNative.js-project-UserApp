import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

// import dummy data
import { mokupMarkers1 } from '../../model/mokupMap'
import { getStoreInfo, getStoreYoutubers } from '../../utils/api/map/index'

// import styles
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, Button } from '@styles/CommonStyles'
import { Colors } from '@styles'
const { width, height } = Dimensions.get("window")
const CARD_HEIGHT = height * 0.53
const CARD_WIDTH = width
import thumb_4 from '@images/thumbnail_4.jpg'
import thumb_3 from '@images/thumbnail_3.jpg'
import thumb_2 from '@images/thumbnail_2.jpg'
import youtubeVideoDefault from '@images/youtubeVideoDefault.jpg'


// TODO 모듈화 마무리하기.
const MapStorePreview = ({ navigation, storeIndex }) => {
    useEffect(() => {
        console.log("정보가 들어왔어요!", storeIndex)

        // 특정 맛집 id, name, address
        getStoreInfo(storeIndex)
            .then((data) => setStore(data))
            .catch(e => console.log(e))

        // 맛집 방문한 유튜버, 맛집이 나온 영상 썸네일
        getStoreYoutubers(storeIndex)
            .then(({ ytbChannelTb }) => setYoutube(ytbChannelTb))
            .catch(e => console.log(e))
    }, [storeIndex])

    const [store, setStore] = useState(null)
    const [youtube, setYoutube] = useState(null)



    const STORE_YOUTUBE_INFO = mokupMarkers1[0]

    const toggleStoreNavation = () => {
        navigation.navigate('storeMap', {
            storeId: store._id,
            storeName: store.storeName,
        })
    }

    const toggleYoutuberNavigation = (argYoutuberId) => {
        navigation.navigate('Youtuber', {
            youtuberId: argYoutuberId
        })
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardCover}>
                {
                    youtube ?
                        <>
                            <ScrollView horizontal={true} style={styles.youtuberContainer}>
                                {
                                    youtube.map(({ ytbProfile, _id }) =>
                                        <TouchableOpacity key={`youtuber-${_id}`} onPress={() => toggleYoutuberNavigation(_id)}>
                                            <Image source={{ uri: ytbProfile }} style={styles.youtuberImage} />
                                        </TouchableOpacity>
                                    )
                                }
                            </ScrollView>
                            {/* 유튜브 썸네일 */}
                            {
                                youtube[0].ytbThumbnail && youtube[0].ytbThumbnail !== '../images/test.jpg' ?
                                    <Image source={{ uri: youtube[0].ytbThumbnail }} style={styles.cardImage} resizeMode="cover" />
                                    : <Image source={youtubeVideoDefault} style={styles.cardImage} resizeMode="cover" />
                            }
                        </>
                        : null
                }
                {/* 가게 정보 */}
                <View style={styles.textContext}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* 가게 이름 */}
                            <Text style={{ marginVertical: 6 }} weight={"EXTRA_BOLD"} numberOfLines={1}>{store ? store.storeName : null}</Text>
                            {/* 즐겨찾기 버튼 */}
                            <TouchableOpacity style={{ marginTop: 3 }}>
                                {/* TODO 로그인 전에는 전부 비활성화 -> 클릭시 로그인 창으로 Navigation 이용해서 이동 */}
                                <MaterialCommunityIcons style={styles.startIconContainer} name="star" />
                            </TouchableOpacity>
                        </View>
                        {/* 가게 상세정보 */}
                        <Text numberOfLines={1}>{store ? store.storeAddress : null}</Text>
                    </View>
                    {/* navigation -> storeMap ( 가게 상세 정보 이동 ) */}
                    <Button onPress={() => toggleStoreNavation()} style={{ backgroundColor: Colors.RED_3, padding: 10 }}>
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
        width: "96%",
        alignSelf: "center",
        borderWidth: 3,
        borderColor: Colors.RED_3,
        // backgroundColor: Colors.RED_3
    },
    textContext: {
        flex: 1.5,
        padding: 10,
        paddingTop: 6,
    },
    startIconContainer: {
        borderRadius: 50,
        backgroundColor: Colors.GRAY_6,
        color: Colors.YELLOW_3,
        fontSize: 20
    },
    youtuberContainer: {
        paddingHorizontal: 5,
        paddingVertical: 2,
        height: 8,
    },
    youtuberImage: {
        width: 47,
        height: 47,
        borderRadius: 30,
        margin: 5,
        borderColor: Colors.GRAY_2,
        borderWidth: 0.5
    },
})
