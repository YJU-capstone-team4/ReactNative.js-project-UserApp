import React from 'react'
import { View, StyleSheet } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'

export default function StoreRecommend(props) {
    return (
        <View style={styles.contentWrapper}>
            <Text weight={"BOLD"} style={{ marginTop: 10, marginLeft: 3 }} size={22}>🏆 {props.route.params.storeName} 를 포함한 Top3 동선</Text>
            <View style={[styles.contentWrapper, { marginBottom: 4 }]}>
                <Text size={20} style={{ marginTop: 20 }}>
                    <Text size={22} weight={"EXTRA_BOLD"} style={{ color: Colors.RED_4 }}>1</Text>
              . 킹크랩이 땡기는 날에는 바로 여기!
            </Text>
                <Text size={20} style={{ marginTop: 20 }}>
                    <Text size={22} weight={"EXTRA_BOLD"} style={{ color: Colors.RED_4 }}>2</Text>
              . 킹크랩이 땡기는 날에는 바로 여기!
            </Text>
                <Text size={20} style={{ marginTop: 20 }}>
                    <Text size={22} weight={"EXTRA_BOLD"} style={{ color: Colors.RED_4 }}>3</Text>
              . 킹크랩이 땡기는 날에는 바로 여기!
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        marginHorizontal: 10,
        marginBottom: 13,
    },
})
