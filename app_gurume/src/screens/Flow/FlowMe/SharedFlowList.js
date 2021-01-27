import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Text } from '@styles/CommonStyles'
import { Colors } from '@styles'

const SharedFlowList = () => {
    // TODO SharedFlowList 배치 UI 정의.
    return (
        <View style={styles.container}>
            <Text>SharedFlowList 입니다</Text>
        </View>
    )
}

export default SharedFlowList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1
    }
})
