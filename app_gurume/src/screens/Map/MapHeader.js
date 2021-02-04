import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Text } from '@styles/CommonStyles'
import { getStatusBarHeight } from "react-native-status-bar-height"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MapHeader = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.openDrawer()}
                style={styles.menuIconWrapper}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <MaterialCommunityIcons name="menu" size={24} />
            </TouchableOpacity>
            <View style={styles.titleWrapper} >
                <MaterialCommunityIcons style={{ right: 3 }} color={Colors.RED_4} name="youtube" size={24} />
                <Text size={22}>문복희 Eat with Boki</Text>
            </View>
            {/* <Text>초기화 버튼</Text> */}
            {/* <MaterialCommunityIcons name="dots-vertical"/> */}
            <TouchableOpacity
                onPress={() => props.onPress(true)}
                style={styles.searchIconWrapper}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <MaterialCommunityIcons name="magnify" size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(MapHeader)

const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight() - 2,
        backgroundColor: Colors.WHITE,
        flex: 1,
        position: 'absolute',
        height: getStatusBarHeight() + 43,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: Colors.GRAY_1,
        borderBottomWidth: 2.5
    },
    titleWrapper: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
        // marginTop: 2,
        // paddingVertical: 10
    },
    searchIconWrapper: {
        top: 1,
        right: 16,
    },
    menuIconWrapper: {
        left: 16
    }
})
