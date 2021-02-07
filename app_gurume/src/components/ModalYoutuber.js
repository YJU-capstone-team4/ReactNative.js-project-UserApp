import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
const Hangul = require('hangul-js');

// import styles
import { Colors, Typography } from '@styles';
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Text } from './../styles/CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");

// import apis
import { useAsync } from '../utils/hooks'
import { getAllYoutubersInfo, getYoutuberInfo } from '../utils/api/youtuber/index'

// import dummy Data
import thumb from '@images/thumbnail_7.jpg'

const YoutuberContainer = ({ item, onClick }) => (
    <TouchableOpacity onPress={() => onClick(item._id, item.ytbChannel)} key={item._id} style={styles.wrapperContainer}>
        <Image style={styles.youtuberImage} source={{ uri: item.ytbProfile }} />
        <View style={{ paddingLeft: 20 }}>
            <Text style={{ paddingTop: 30 }} size={22}>{item.ytbChannel}</Text>
            <Text style={{ paddingVertical: 10 }}>구독자 200K</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>다녀간 맛집 정보 </Text>
                <Text color={Colors.RED_4} size={20}>30</Text>
                <Text> 건</Text>
            </View>
        </View>
    </TouchableOpacity>
)


const ModalYoutuber = (props) => {
    // 전체 유튜버 리스트 로딩
    const [state, refetch] = useAsync(getAllYoutubersInfo, [])
    const { loading: youtubersLoading, data: allYoutubers, error: youtubersError } = state
    const [youtubers, setYoutubers] = useState(null)

    // 검색 유튜버 리스트 로딩
    // const [a, b] = useAsync(getYoutuberInfo(props.searchYoutuber), [props.searchYoutuber], true)
    // const { loading: searchYoutuberLoading, data: searchedYoutuber, error: searchedYoutuberError } = a

    // 검색 초기화시 리로딩 로직
    useEffect(() => {
        if (props.searchYoutuber === '') {
            refetch()
        }
    }, [props.searchYoutuber])

    // 리로딩 신호 받아 들인 후 값 저장
    useEffect(() => {
        if (youtubersLoading === false && allYoutubers) {
            setYoutubers(allYoutubers)
        }
    }, [youtubersLoading])

    // 검색 결과 찾기
    const handleOnChangeText = async (text) => {
        props.setSearchYoutuber(text)
        if (text.length !== 0) {
            let tempYoutuberList =
                await allYoutubers.ytbChannelTb.filter(youtuber => !Hangul.search(youtuber.ytbChannel, props.searchYoutuber))
            setYoutubers({ count: tempYoutuberList.length, ytbChannelTb: tempYoutuberList })
            console.log(`${text} 검색 시작됨`, tempYoutuberList)
        }
    }

    // 해당 유튜버 마커 조회 후 지도 반환
    const handleYoutuberClick = async (argYoutuberId, argYoutuberName) => {
        console.log(argYoutuberId)
        const { YtbChannelTb } = await getYoutuberInfo(argYoutuberId)
        // console.log('서버로 부터 받은 데이터는? ', YtbChannelTb)
        
        let convertedMarkerArray = YtbChannelTb.map(({ ytbStoreTbId }) => {
            let tempObj = new Object()
            tempObj._id = ytbStoreTbId._id
            tempObj.storeName = ytbStoreTbId.storeInfo.storeName
            tempObj.location = ytbStoreTbId.storeInfo.location
            
            return tempObj
        })
        // TODO 서버로 부터 받은 커스텀 데이터 지도에 반환.
        // const youtuberStoreList = docs[0].video
        console.log(convertedMarkerArray)

        // FIXME 이걸 수정하자!!!! 얘가 렌더링의 문제다. 진짜 아아오ㅗ오오오오
        // await props.setMarkers({
        //     count: convertedMarkerArray.length,
        //     ytbStoreTb: convertedMarkerArray
        // })
        await props.setSearchYoutuber(argYoutuberName)
        toggleBackButton()
    }

    /**
     * props lists
     * 1. Modal Visible
     * 2. Searched Youtuber Name
     * 3. return data function
     */
    const toggleBackButton = () => {
        props.setSearchYoutuber(null)
        props.setVisibleToggle(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* 뒤로가기 버튼 */}
                <TouchableOpacity
                    onPress={() => toggleBackButton()}
                    hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    style={styles.backBtnContainer}
                >
                    <MaterialCommunityIcons name="arrow-left-circle" size={24} />
                </TouchableOpacity>
                {/* Top Header */}
                <Text size={22} weight="BOLD">검색결과</Text>
            </View>
            {/* 검색 결과 리스트 */}
            <ScrollView style={{ flex: 1 }} stickyHeaderIndices={[1]}>
                {/* 검색 컴포넌트  */}
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchText}
                        placeholder="유튜버 정보가 궁금해?"
                        onChangeText={(text) => handleOnChangeText(text)}
                        value={props.searchYoutuber}
                    />
                    {/* 검색 아이콘 */}
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 20 }}
                        hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    // onPress={() => handleOnChangeText()}
                    >
                        <MaterialCommunityIcons name="magnify" size={24} />
                    </TouchableOpacity>
                </View>
                {/* 검색 결과 반영 */}
                <View>
                    <View style={[styles.wrapperContainer, styles.stickyWrapper]}>
                        {
                            props.searchYoutuber === '' ?
                                <Text>전체 유튜버 데이터가 {!youtubersLoading && youtubers ? youtubers.count : 0}건 있습니다.</Text> :
                                <>
                                    <Text weight="BOLD">{props.searchYoutuber}</Text>
                                    <Text> 관련 데이터가 {!youtubersLoading && youtubers ? youtubers.count : 0}건 있습니다.</Text>
                                </>

                        }
                    </View>
                </View>
                {/* 유튜버 리스트 나열 */}
                {
                    !youtubersLoading && youtubers ? youtubers.ytbChannelTb.map(item =>
                        <YoutuberContainer item={item} onClick={handleYoutuberClick} />
                    ) : null
                }
            </ScrollView>
        </View>
    )
}

export default ModalYoutuber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.WHITE,
        zIndex: 10000000000,
    },
    headerContainer: {
        marginTop: getStatusBarHeight(),
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    wrapperContainer: {
        flexDirection: 'row',
        margin: 5,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    searchContainer: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.GRAY_8,
        borderRadius: 50,
    },
    searchText: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
    backBtnContainer: {
        position: 'absolute',
        left: 20,
        top: 22
    },
    youtuberImage: {
        width: width * 0.33,
        height: width * 0.33,
        borderRadius: 100,
        borderColor: Colors.GRAY_7,
        borderWidth: 0.1
    },
    stickyWrapper: {
        justifyContent: 'center',
        borderWidth: 0,
        marginTop: 0,
        paddingTop: 10,
        backgroundColor: Colors.WHITE,
    }

})
