import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'

// import modules
const Hangul = require('hangul-js')                                                     // 한글 초성으로 검색 지원 라이브러리.

// import styles
import { Colors, Typography } from '@styles'
import { getStatusBarHeight } from "react-native-status-bar-height"
import { Text } from './../styles/CommonStyles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { width, height } = Dimensions.get("window")

// import apis
import { useAsync } from '../utils/hooks'
import { getAllYoutubersInfo, getYoutuberInfo } from '../utils/api/youtuber/index'

const YoutuberContainer = ({ item, onClick }) => (
    <TouchableOpacity onPress={() => onClick(item._id, item.ytbChannel)} style={styles.wrapperContainer}>
        <Image style={styles.youtuberImage} source={{ uri: item.ytbProfile }} />
        <View style={{ paddingLeft: 20 }}>
            <Text style={{ paddingTop: 30 }} size={22}>{item.ytbChannel}</Text>
            <Text style={{ paddingVertical: 10 }}>구독자 {item.ytbSubscribe / 10000}K</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>다녀간 맛집 정보 </Text>
                <Text color={Colors.RED_4} size={20}>{item.storeCount}</Text>
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

    // 유튜버 input text
    const [youtuberName, setYoutuberName] = useState(null)

    // 리로딩 신호 받아 들인 후 값 저장
    useEffect(() => {
        if (youtubersLoading === false && allYoutubers && !youtubers) {
            console.log("유튜버 목록 새로 받아옴@!!!")
            setYoutubers(allYoutubers)
        }
    }, [youtubersLoading])

    // 검색 결과 찾기
    const handleOnChangeText = async (text) => {
        setYoutuberName(text)

        console.log(text)

        if (text && text.length > 0) {
            let tempYoutuberList =
                await allYoutubers.ytbChannelTb.filter(youtuber => !Hangul.search(youtuber.ytbChannel, text))
            setYoutubers({ count: tempYoutuberList.length, ytbChannelTb: tempYoutuberList })
        } else {
            console.log("초기화 로직 발동!")
            setYoutubers(null)
            setYoutuberName(null)
            refetch()
        }
    }

    // 해당 유튜버 마커 조회 후 지도 반환
    const handleYoutuberClick = async (argYoutuberId, argYoutuberName) => {
        try {
            console.log(argYoutuberId, argYoutuberName)

            // 유저가 선택한 유튜버  마커 정보, 이름 반환과 동시에 모달 종료.
            props.setSearchYoutuber({
                _id: argYoutuberId,
                label: argYoutuberName
            })

            toggleBackButton()
        } catch (e) {
            console.log(e)
        }
    }

    const toggleBackButton = () => {
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
                        value={youtuberName}
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
                            !youtuberName ?
                                <Text>전체 유튜버 데이터가 {!youtubersLoading && youtubers ? youtubers.count : 0}건 있습니다.</Text>
                                :
                                <>
                                    <Text weight="BOLD">{youtuberName}</Text>
                                    <Text> 관련 데이터가 {!youtubersLoading && youtubers ? youtubers.count : 0}건 있습니다.</Text>
                                </>
                        }
                    </View>
                </View>
                {/* 유튜버 리스트 나열 */}
                {
                    !youtubersLoading && youtubers && youtubers.ytbChannelTb
                        ? youtubers.ytbChannelTb.map((item, index) =>
                            <YoutuberContainer
                                key={`youtuber-${item._id}-${index}`}
                                item={item}
                                onClick={handleYoutuberClick}
                            />
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
