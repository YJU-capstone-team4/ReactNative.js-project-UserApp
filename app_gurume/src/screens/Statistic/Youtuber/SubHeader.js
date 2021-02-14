import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import { Text } from '@styles/CommonStyles'

const SubHeader = (props) => {
    const handleOnPress = (argIndex) => {
        let tempArr = props.menuInfo.map((item, index) => {
            let tempObj = new Object()
            tempObj.label = item.label
            tempObj.onPress = index === argIndex

            return tempObj
        })

        props.setMenuInfo(tempArr)
    }

    return (
        <View style={styles.menuWrapper}>
            {
                props.menuInfo.map((item, index) =>
                    <TouchableOpacity
                        key={`menu-${index}`}
                        style={[styles.buttonContainer, item.onPress ? styles.onPressButton : null]}
                        onPress={() => handleOnPress(index)}
                    >
                        <Text
                            weight={item.onPress ? "BOLD" : null}
                            size={18}
                            style={[styles.buttonText]}
                        >
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default SubHeader

const styles = StyleSheet.create({
    menuWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 17,
        paddingBottom: 20,
        alignSelf: 'center',
    },
    onPressButton: {
        borderBottomWidth: 3,
        borderColor: Colors.BLACK,
    },
    buttonText: {
        alignSelf: 'center',
    },
})
