import React from 'react'
import { View, StyleSheet } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'

export default function StoreHeader(props) {
    return (
        <View style={[styles.contentWrapper, { paddingTop: 20, paddingBottom: 10, paddingLeft: 5 }]}>
            <Text weight={"BOLD"} style={{ fontSize: 50, color: Colors.GRAY_8 }}>{props.route.params.storeName}</Text>
            <Text style={{ marginTop: 10, color: Colors.GRAY_9 }} size={22}>대구광역시 북구 복현동 동북로 55길 13-6</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        marginHorizontal: 10,
        marginBottom: 13,
    },
})

