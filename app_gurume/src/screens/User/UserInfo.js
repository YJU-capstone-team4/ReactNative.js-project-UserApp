import React, { useEffect, useContext } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

// import styles
import { Text } from '../../styles/CommonStyles'
import { Colors } from '@styles'

import TestContext from "../../context/TestContext";

export default function UserInfo(props) {
    const handleGoPage = (argPageName) => {
        props.navi.navigate(argPageName)
    }

    const { state } = useContext(TestContext)
    useEffect(() => {
        console.log(state.initValue)
    }, [])

    return (
        <View style={styles.container}>

            <Image style={styles.imageProfile} source={state.initValue.photoUrl } />
            <Text weight="BOLD" style={{ marginTop: 10 }}>{state.initValue.nickName}</Text>
            {/* <Text>닉네임 변경 아이콘</Text> */}
            <Text>{state.initValue.userEmail}</Text>
            <View style={styles.selectItemWrapper}>
                <Text style={styles.itemWrapper} size={18}>{state.initValue.nickName}님의 공유 동선은 <Text weight="BOLD" size={22}>8개</Text> 입니다.</Text>
                <Text style={styles.itemWrapper} size={18}>즐겨찾기 추가된 유튜버 <Text weight="BOLD" size={22}>10명</Text> 입니다.</Text>
                <Text style={styles.itemWrapper} size={18}>유튜버 데이터 신청 내역은 <Text weight="BOLD" size={22}>3건</Text> 입니다.</Text>
            </View>
            <TouchableOpacity onPress={() => handleGoPage('ModifyFolder')} style={styles.folderWrapper}>
                <Text color={Colors.WHITE} size={18}>동선 폴더 관리</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGoPage('ModifyName')} style={styles.folderWrapper}>
                <Text color={Colors.WHITE} size={18}>닉네임 변경하기</Text>
            </TouchableOpacity>
            {/* <View style={styles.folderWrapper}>
                <Text color={Colors.WHITE} size={18}>회원탈퇴</Text>
            </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 45
    }, imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 80,
    }, selectItemWrapper: {
        width: "90%",
        marginTop: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
    }, folderWrapper: {
        backgroundColor: Colors.GRAY_9,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        marginVertical: 5,
        width: "83%",
    },
    itemWrapper: {
        paddingHorizontal: 10,
        marginBottom: 30
    }
})