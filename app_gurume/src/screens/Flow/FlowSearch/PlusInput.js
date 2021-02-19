import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import useModalSelector from '@utils/hooks/useModalSelector'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

const plusInput = (props) => {
    const items = [
        { key: -1, section: true, label: '검색 옵션' },
        { key: 0, label: '해시태그' },
        { key: 1, label: '닉네임' },
        { key: 2, label: '제목' },
    ]
    const [ModalSelector, visible, setVisible] = useModalSelector()

    return (
        <View style={styles.container}>
            {/* 메뉴선택 아이콘 */}
            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={{ position: 'absolute', left: 20, backgroundColor: Colors.GRAY_8, justifyContent: 'center', alignItems: 'center', padding: 4, borderRadius: 50 }}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <MaterialCommunityIcons name="menu" size={24} color={Colors.WHITE} />
            </TouchableOpacity>
            <TextInput
                style={styles.textContainer}
                placeholder={`궁금한 ${props.itemValue.label}${props.itemValue.label === '해시태그' ? '를' : '을'} 입력해보세요 !`}
                onChangeText={(text) => props.onChangeText(text)}
                value={props.text}
            />
            {/* 검색 아이콘 */}
            <TouchableOpacity
                onPress={() => props.onPress(true)}
                style={{ position: 'absolute', right: 20 }}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <MaterialCommunityIcons name="magnify-plus-outline" size={24} />
            </TouchableOpacity>
            {
                visible ?
                    <ModalSelector
                        data={items}
                        onChange={props.setItemValue}
                    />
                    : null
            }
        </View>
    )
}

export default plusInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // marginTop: 20,
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
        fontSize: 15,
        fontFamily: Typography.FONT_FAMILY_REGULAR
    },
})
