import React from 'react'
import { View, StyleSheet } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'

export default function StoreHeader(props) {
    return (
        <View style={[styles.contentWrapper, { paddingTop: 20, paddingBottom: 10, paddingLeft: 5 }]}>
            <Text weight={"BOLD"} style={{ fontSize: 50, color: Colors.GRAY_8 }}>{props.store.storeName}</Text>
            <Text style={{ marginTop: 10, color: Colors.GRAY_9 }} size={22}>{props.store.storeAddress}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        marginHorizontal: 10,
        marginBottom: 13,
    },
})

