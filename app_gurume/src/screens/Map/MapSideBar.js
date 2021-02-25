import React, { useState, useEffect, useContext } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStatusBarHeight } from "react-native-status-bar-height";

// components
import useSelectBox from '@components/SelectBox'
import { Text } from '../../styles/CommonStyles'

// styles
import { Colors } from '@styles'
import user_profile from '@images/user_profile.png'
import MapFlows from './MapFlows';

// import apis
import { getFlowListItems } from '../../utils/api/flow';
import TestContext from "../../context/TestContext"

// navigation.goBack()

export default function MapSideBar(props) {
    const [userFlow, setUserFlow] = useState(null)
    const [showFlows, setShowFlows] = useState(false)
    const [SelectBox, itemValue, setItemValue] = useSelectBox()

    const { state, actions } = useContext(TestContext)

    useEffect(() => {
        if (!itemValue) return

        /**
         * 폴더 변경 요청에 따른 초기화 함수
         * @param {폴더 아이디} argFolderId 
         */
        async function init(argFolderId) {
            const data = await getFlowListItems(argFolderId)
            setUserFlow(data)
        }
        // 폴더 데이터 초기화
        init(itemValue.key)

        // 전역 변수의 폴더 선택값 반영 folderId
        actions.setInitValue({
            ...state.initValue,
            selectedFolderId: itemValue.key
        })
    }, [itemValue])

    /**
     * 유저 데이터 반환 컴포넌트
     * @param {유저 데이터} data 
     */
    const UserSet = (data) => {
        return <View style={[styles.container, {
            flexDirection: 'row',
            marginTop: 25,
        }]}>
            <Image style={styles.imageProfile} source={user_profile} />
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text weight={"BOLD"} size={20} style={{ marginStart: 20 }}>코코하세요 님</Text>
                <Text weight={"BOLD"} size={20} style={{ marginStart: 20 }}>kokohaseyo</Text>
            </View>
        </View>
    }

    const SubHeader = () => {
        return <View style={styles.subHeaberContainer}>
            <MaterialCommunityIcons onPress={() => setShowFlows(false)} name="arrow-left" color="black" size={24} />
            <Text style={{ marginTop: 5, marginStart: 10 }} size={20}>동선 폴더</Text>
        </View>
    }

    return (
        <View style={{ flex: 1 }}>
            {/* 동선 페이지로 이동했는가 ? */}
            { showFlows ? <SubHeader /> : null}
            {/* 메뉴 리스트 나열 */}
            <DrawerContentScrollView {...props}>
                {showFlows && userFlow ?
                    // *** 동선 폴더 접근 ***
                    (
                        <View style={[styles.folderWrapper, { marginTop: -40 }]}>
                            <View style={{ flex: 1, zIndex: 100 }}>
                                <SelectBox />
                            </View>
                            <MapFlows data={userFlow} navi={props.navigation} />
                        </View>
                    ) :
                    // *** 일반 매뉴 접근 ***
                    <View style={styles.folderWrapper}>
                        <View style={{ flex: 1 }}>
                            <UserSet />
                            <View style={styles.folderContainer}>
                                <TouchableOpacity
                                    onPress={() => setShowFlows(true)}
                                    style={styles.container, styles.folderItemContainer}
                                >
                                    <MaterialCommunityIcons name={'account-box'} color="black" size={18} />
                                    <Text size={20} style={styles.folderText}>동선 폴더</Text>
                                </TouchableOpacity >
                                <TouchableOpacity
                                    onPress={() => setShowFlows(true)}
                                    style={styles.container, styles.folderItemContainer}
                                >
                                    <MaterialCommunityIcons name={'star'} color="black" size={18} />
                                    <Text size={20} style={styles.folderText}>유튜버 즐겨찾기</Text>
                                </TouchableOpacity >
                                <TouchableOpacity
                                    onPress={() => setShowFlows(true)}
                                    style={styles.container, styles.folderItemContainer}
                                >
                                    <MaterialCommunityIcons name={'star'} color="black" size={18} />
                                    <Text size={20} style={styles.folderText}>관심있는 유저동선</Text>
                                </TouchableOpacity >
                                <TouchableOpacity
                                    onPress={() => setShowFlows(true)}
                                    style={styles.container, styles.folderItemContainer}
                                >
                                    <MaterialCommunityIcons name={'account-box'} color="black" size={18} />
                                    <Text size={20} style={styles.folderText}>내 정보</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                        {/* 로그아웃 메뉴 */}
                        <TouchableOpacity style={[styles.container, styles.folderItemContainer, {
                            borderColor: Colors.GRAY_2, borderTopWidth: 1
                        }]}>
                            <MaterialCommunityIcons name='exit-to-app' color="black" size={18} />
                            <Text size={20} style={styles.folderText}>로그아웃</Text>
                        </TouchableOpacity >
                    </View>
                }
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    imageProfile: {
        width: 70,
        height: 70,
        borderRadius: 80,
    },
    subHeaberContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: getStatusBarHeight(),
        height: 48,
        borderColor: Colors.GRAY_3,
        borderBottomWidth: 1,
        padding: 10,
    },
    folderText: {
        color: Colors.GRAY_7,
        marginStart: 30,
        marginTop: 1
    },
    folderContainer: {
        marginVertical: 20,
    },
    folderItemContainer: {
        alignItems: 'flex-start',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    folderWrapper: {
        display: 'flex',
        paddingHorizontal: 20
    }
})