import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Typography } from '@styles';

const plusInput = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textContainer} placeholder="해시태그를 추가해보세요 !" />
            {/* 검색 아이콘 */}
            <TouchableOpacity
                style={{ position: 'absolute', right: 20 }}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <MaterialCommunityIcons name="magnify-plus-outline" size={24} />
            </TouchableOpacity>
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
