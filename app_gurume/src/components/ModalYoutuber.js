import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'

// import styles
import { Colors, Typography } from '@styles';
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Text } from './../styles/CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get("window");

// import dummy Data
import thumb from '@images/thumbnail_7.jpg'


const ModalYoutuber = (props) => {
    /**
     * props lists
     * 1. Modal Visible
     * 2. Searched Youtuber Name
     * 3. return data function
     */

    const toggleBackButton = () => {
        props.setVisibleToggle(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => toggleBackButton()}
                    hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    style={styles.backBtnContainer}
                >
                    <MaterialCommunityIcons name="arrow-left-circle" size={24} />
                </TouchableOpacity>
                <Text size={22} weight="BOLD">검색결과</Text>
            </View>
            <ScrollView style={{ flex: 1 }} stickyHeaderIndices={[1]}>
                {/* 검색 컴포넌트 */}
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchText} placeholder="맛집 정보가 궁금해?" />
                    {/* 검색 아이콘 */}
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 20 }}
                        hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        <MaterialCommunityIcons name="magnify" size={24} />
                    </TouchableOpacity>
                </View>
                {/* 검색 결과 반영 */}
                <View>
                    <View style={[styles.wrapperContainer, styles.stickyWrapper]}>
                        <Text weight="BOLD">야식이</Text>
                        <Text> 관련 데이터가 3건 있습니다.</Text>
                    </View>
                </View>
                {/* 유튜버 리스트 나열 */}
                <View style={styles.wrapperContainer}>
                    <Image style={styles.youtuberImage} source={thumb} />
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ paddingTop: 30 }} size={22}>문복희 Eat with Boki</Text>
                        <Text style={{ paddingVertical: 10 }}>구독자 200K</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>다녀간 맛집 정보 </Text>
                            <Text color={Colors.RED_4} size={20}>30</Text>
                            <Text> 건</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapperContainer}>
                    <Image style={styles.youtuberImage} source={thumb} />
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ paddingTop: 30 }} size={22}>문복희 Eat with Boki</Text>
                        <Text style={{ paddingVertical: 10 }}>구독자 200K</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>다녀간 맛집 정보 </Text>
                            <Text color={Colors.RED_4} size={20}>30</Text>
                            <Text> 건</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapperContainer}>
                    <Image style={styles.youtuberImage} source={thumb} />
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ paddingTop: 30 }} size={22}>문복희 Eat with Boki</Text>
                        <Text style={{ paddingVertical: 10 }}>구독자 200K</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>다녀간 맛집 정보 </Text>
                            <Text color={Colors.RED_4} size={20}>30</Text>
                            <Text> 건</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapperContainer}>
                    <Image style={styles.youtuberImage} source={thumb} />
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ paddingTop: 30 }} size={22}>문복희 Eat with Boki</Text>
                        <Text style={{ paddingVertical: 10 }}>구독자 200K</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>다녀간 맛집 정보 </Text>
                            <Text color={Colors.RED_4} size={20}>30</Text>
                            <Text> 건</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapperContainer}>
                    <Image style={styles.youtuberImage} source={thumb} />
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ paddingTop: 30 }} size={22}>문복희 Eat with Boki</Text>
                        <Text style={{ paddingVertical: 10 }}>구독자 200K</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>다녀간 맛집 정보 </Text>
                            <Text color={Colors.RED_4} size={20}>30</Text>
                            <Text> 건</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapperContainer}>
                    <Image style={styles.youtuberImage} source={thumb} />
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ paddingTop: 30 }} size={22}>문복희 Eat with Boki</Text>
                        <Text style={{ paddingVertical: 10 }}>구독자 200K</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>다녀간 맛집 정보 </Text>
                            <Text color={Colors.RED_4} size={20}>30</Text>
                            <Text> 건</Text>
                        </View>
                    </View>
                </View>
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
