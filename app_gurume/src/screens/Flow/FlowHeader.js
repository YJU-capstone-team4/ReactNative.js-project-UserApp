import React from 'react'
import { StyleSheet, View } from 'react-native'

// import styles
import { Text } from '@styles/CommonStyles'
import { getStatusBarHeight } from "react-native-status-bar-height"

const FlowHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.textWrapper}>
                <Text style={{ fontSize: 23 }}>현재 동선 공유개수는 </Text>
                <Text weight="BOLD" style={{ fontSize: 27 }}>8</Text>
                <Text style={{ fontSize: 23 }}>개 입니다.</Text>
            </View>
            <Text style={{ fontSize: 15, marginTop: 5 }}>동선 공유를 통해 더 많은 해택을 누려보세요!</Text>
        </View>
    )
}

export default FlowHeader

const styles = StyleSheet.create({
    headerContainer: {
        height: getStatusBarHeight() + 80,
        paddingTop: getStatusBarHeight() + 30,
        paddingLeft: 20
    },
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})
