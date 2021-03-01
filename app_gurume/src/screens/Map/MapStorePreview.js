import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

// import dummy data
import { getStoreInfo, getStoreYoutubers, setStoreFavorite } from '../../utils/api/map/index'

// import styles
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, Button } from '@styles/CommonStyles'
import { Colors } from '@styles'
const { width, height } = Dimensions.get("window")
const CARD_HEIGHT = height * 0.54
const CARD_WIDTH = width
import youtubeVideoDefault from '@images/youtubeVideoDefault.jpg'

import TestContext from "../../context/TestContext"

const MapStorePreview = ({ navigation, storeIndex }) => {

    const [store, setStore] = useState(null)
    const [youtube, setYoutube] = useState(null)

    const { state, userFolderInit } = useContext(TestContext)

    useEffect(() => {
        async function init(argStoreIndex, argFolderId) {
            // 맛집 방문한 유튜버, 맛집이 나온 영상 썸네일
            const { video } = await getStoreYoutubers(argStoreIndex)
            setYoutube(video)

            // TODO 특정 맛집 id, name, address
            const storeData = await getStoreInfo(argStoreIndex, argFolderId)
            setStore(storeData)
        }

        init(storeIndex, state.initValue.selectedFolderId)
    }, [storeIndex])

    /**
     * 클릭 시 해당 폴더에 추가.
     * @param {해당 가게 바뀐 좋아요 값} argLikeValue 
     */
    const toggleLikeStore = async () => {
        try {
            await setStoreFavorite(!store.storeLike, store._id, state.initValue.selectedFolderId)
            userFolderInit()
            setStore({
                ...store,
                storeLike: !store.storeLike
            })
        } catch (e) {
            console.log(e)
        }
        console.log("변경완료")
    }


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
                            {/* 유튜브 썸네일 */}
                            {
                                youtube[0].ytbThumbnail && youtube[0].ytbThumbnail !== '../images/test.jpg' ?
                                    <Image source={{ uri: youtube[0].ytbThumbnail }} style={styles.cardImage} resizeMode="cover" />
                                    : <Image source={youtubeVideoDefault} style={styles.cardImage} resizeMode="cover" />
                            }
                            <ScrollView horizontal={true} style={styles.youtuberContainer}>
                                {
                                    youtube.map(({ ytbProfile, _id }) =>
                                        <TouchableOpacity key={`youtuber-${_id}`} onPress={() => toggleYoutuberNavigation(_id)}>
                                            <Image source={{ uri: ytbProfile }} style={styles.youtuberImage} />
                                        </TouchableOpacity>
                                    )
                                }
                            </ScrollView>
                        </> : <Image source={youtubeVideoDefault} style={styles.cardImage} resizeMode="cover" />
                }
                {/* 가게 정보 */}
                <View style={styles.textContext}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {/* 가게 이름 */}
                            <Text size={18} style={{ marginVertical: 6 }} weight={"EXTRA_BOLD"} numberOfLines={1}>{store ? store.storeName : null}</Text>
                            {/* 즐겨찾기 버튼 */}
                            <TouchableOpacity
                                onPress={() => toggleLikeStore()}
                                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                style={{ marginTop: 3 }}
                            >
                                {/* TODO 로그인 전에는 전부 비활성화 -> 클릭시 로그인 창으로 Navigation 이용해서 이동 */}
                                <MaterialCommunityIcons style={styles.startIconContainer} color={store && store.storeLike ? Colors.YELLOW_3 : Colors.GRAY_2} name="star" />
                            </TouchableOpacity>
                        </View>
                        {/* 가게 상세정보 */}
                        <Text numberOfLines={1}>{store ? store.storeAddress : null}</Text>
                    </View>
                    {/* navigation -> storeMap ( 가게 상세 정보 이동 ) */}
                    <Button onPress={() => toggleStoreNavation()} style={{ backgroundColor: Colors.RED_3 }}>
                        <Text style={{ paddingVertical: 2 }} color={Colors.WHITE} weight={"BOLD"}>상세보기</Text>
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
        borderWidth: 1.5,
        borderColor: Colors.RED_4,
        borderRadius: 3,
        marginTop: 8,
    },
    textContext: {
        flex: 1.5,
        padding: 10,
        paddingTop: 0,
    },
    startIconContainer: {
        padding: 1,
        borderRadius: 50,
        backgroundColor: Colors.GRAY_6,
        fontSize: 20
    },
    youtuberContainer: {
        paddingHorizontal: 5,
        paddingTop: 2,
        paddingBottom: 1,
        height: 3,
    },
    youtuberImage: {
        width: 47,
        height: 47,
        borderRadius: 30,
        margin: 5,
        borderColor: Colors.GRAY_4,
        borderWidth: 0.5
    },
})
