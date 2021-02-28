import React, { useState } from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Text } from './../../styles/CommonStyles'
import { Colors } from '@styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const FavoriteYoutuber = (props) => {
    const [youtubers, setYoutubers] = useState([
        {
            "_id": "5fb73d0e4c2de82830b54834",
            "ytbChannel": "야식이",
            "ytbProfile": "https://yt3.ggpht.com/ytc/AAUvwngNwBPcF4-7aP0YO3FDUdqMOT-fqmqS3u3rhMs8Wg=s176-c-k-c0x00ffffff-no-rj",
            "ytbSubscribe": 1030000,
            "storeCount": 5
        },
        {
            "_id": "5fb742d6f6d4a92664929801",
            "ytbChannel": "광마니",
            "ytbProfile": "https://yt3.ggpht.com/ytc/AAUvwnjyRCeCzrquC0zZ34bcb7aEmKm25ypLB_t1g1U4=s176-c-k-c0x00ffffff-no-rj-mo",
            "ytbSubscribe": 219000,
            "storeCount": 5
        },
        {
            "_id": "5fb747ab6a3b2135d86471f5",
            "ytbChannel": "하얀트리",
            "ytbProfile": "https://yt3.ggpht.com/ytc/AAUvwngHcyDP53J5M-J7BDPuWrcB92N3YbpnPT1BdqDX=s176-c-k-c0x00ffffff-no-rj-mo",
            "ytbSubscribe": 673000,
            "storeCount": 5
        },
        {
            "_id": "5fb752961c1e4e027c7d70cf",
            "ytbChannel": "버거형",
            "ytbProfile": "https://yt3.ggpht.com/ytc/AAUvwnhPuYn_uM58464BOOZl8PeDwaNHQhduVWfwSGQw=s176-c-k-c0x00ffffff-no-rj-mo",
            "ytbSubscribe": 138000,
            "storeCount": 5
        },
        {
            "_id": "5fb75c810ffedb24b0af0519",
            "ytbChannel": "김사원세끼",
            "ytbProfile": "https://yt3.ggpht.com/ytc/AAUvwniDhnzaG7W8fSWckraTyQLpMZJ8_tlCIYp3z9OR=s176-c-k-c0x00ffffff-no-rj-mo",
            "ytbSubscribe": 300000,
            "storeCount": 5
        },
        {
            "_id": "5fb763e6e7efd476f4873b5d",
            "ytbChannel": "츄릅켠",
            "ytbProfile": "https://yt3.ggpht.com/ytc/AAUvwngNwBPcF4-7aP0YO3FDUdqMOT-fqmqS3u3rhMs8Wg=s176-c-k-c0x00ffffff-no-rj",
            "ytbSubscribe": 121000,
            "storeCount": 5
        }
    ]
    )

    /**
     * 클릭시 유튜버 페이지로 이동
     * @param {유튜버 아이디} argYoutuberId 
     * @param {유튜버 채널이름} argYoutubeChannel
     */
    const handleOnPressYoutuber = (argYoutuberId, argYoutubeChannel) => {
        props.navigation.navigate('Youtuber', {
            youtuberId: argYoutuberId,
            youtubeChannel: argYoutubeChannel
        })
    }

    return (
        <ScrollView style={styles.container}>
            {
                youtubers.map(item =>
                    <TouchableOpacity onPress={() => handleOnPressYoutuber(item._id, item.ytbChannel)} style={styles.youtuberWrapper} key={item.id}>
                        <Image
                            style={{ width: 170, height: 170, borderRadius: 500 }}
                            source={{ uri: item.ytbProfile }}
                        />
                        {/* 구독자 수 */}
                        <View style={styles.subscribeTextWrapper}>
                            <Text size={20} weight={'BOLD'} style={styles.subscribeText}>{item.ytbSubscribe / 10000}K</Text>
                        </View>
                        <View style={{ top: -12, alignItems: 'center' }} >
                            {/* 채널명 */}
                            <Text size={20} weight={'BOLD'}>{item.ytbChannel}</Text>
                            {/* 영상 개수 */}
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                <MaterialCommunityIcons name="youtube" color={Colors.RED_4} size={16} />
                                <Text style={{ color: Colors.GRAY_8, marginVertical: 3, marginLeft: 3 }}>방문맛집 {item.storeCount}</Text>
                            </View>
                        </View>
                    </TouchableOpacity >
                )
            }
        </ScrollView >
    )
}

export default FavoriteYoutuber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        // height: '100%',
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    youtuberWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    subscribeTextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        bottom: 23,
        left: 62
    },
    subscribeText: {
        minWidth: 45,
        backgroundColor: Colors.RED_4,
        padding: 3,
        color: Colors.WHITE,
        letterSpacing: -1,
        textAlign: 'center'
    }
})
