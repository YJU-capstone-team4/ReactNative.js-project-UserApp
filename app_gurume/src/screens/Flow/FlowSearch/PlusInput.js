import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import useModalSelector from '@utils/hooks/useModalSelector'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Colors, Typography } from '@styles'

// import apis
import { getSharedUserFlow } from '../../../utils/api/flow'

const plusInput = (props) => {
    const items = [
        { key: -1, section: true, label: '검색 옵션' },
        { key: 0, label: '해시태그', option: 'tag' },
        { key: 1, label: '닉네임', option: 'nickname' },
        { key: 2, label: '제목', option: 'title' },
    ]
    const [ModalSelector, visible, setVisible] = useModalSelector()

    /**
     * 선택 itemValue 옵션 확인 후 검색 API 가동
     * @param {유저가 입력한 input box 값} argText 
     */
    const handleSearch = async (argText) => {
        if (props.itemValue.option !== 'tag') {
            const sendData = {
                regionTag: [],
                seasonTag: [],
                userTag: [],
                shareTitle: argText,
                nickname: argText,
                option: props.itemValue.option
            }
            const userFlows = await getSharedUserFlow(sendData)
            props.setFlowsData(userFlows)
        }

        props.onPress(false)
    }

    return (
        <View style={styles.container}>
            {/* 메뉴선택 아이콘 */}
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{ position: 'absolute', left: 20, justifyContent: 'center', alignItems: 'center' }}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                {/* <MaterialCommunityIcons name="menu" size={24} color={Colors.WHITE} /> */}
                <Feather name="list" size={24} color={Colors.GRAY_8} />
            </TouchableOpacity>
            <TextInput
                style={styles.textContainer}
                placeholder={`궁금한 ${props.itemValue.label}${props.itemValue.label === '해시태그' ? '를' : '을'} 입력해보세요 !`}
                onChangeText={(text) => { props.onChangeText(text) }}
                value={props.text}
            />
            {/* 검색 아이콘 */}
            <TouchableOpacity
                onPress={() => handleSearch(props.text)}
                style={{ position: 'absolute', right: 20 }}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <MaterialCommunityIcons name="magnify-plus-outline" size={32} />
            </TouchableOpacity>
            {
                visible && <ModalSelector data={items} onChange={props.setItemValue} />
            }
        </View>
    )
}

export default plusInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.GRAY_8,
        borderRadius: 50,
    },
    textContainer: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
})
