import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

// import styles
import { Colors } from '@styles'
import { Button, Text } from '@styles/CommonStyles'
import Icon from 'react-native-vector-icons/Feather'

const MapFlows = (props) => {
    return (
        <View style={styles.container}>
            {
                props.data.length !== 0 && props.data.map((item, index) =>
                    <>
                        <Text style={styles.textContainer} size={18} color={Colors.GRAY_9}>{item.ytbStoreTbId.storeInfo.storeName}</Text>
                        {
                            props.data.length - 1 !== index &&
                            <View style={styles.arrowContainer}>
                                <Icon name="chevrons-down" size={20} color={Colors.RED_3} />
                            </View>
                        }
                    </>
                )
            }
            <Button
                activeOpacity={0.8}
                style={[styles.flowBtnContainer, { marginVertical: 20 }]}
                backgroundColor={Colors.GRAY_7}
                borderColor={Colors.BLACK}
                onPress={() => props.navi.navigate('flowMe', {})}
            // TODO 네비게이션에 해당 폴더 index 번호 넘겨줘서 루프테이지 - 내 동선 - 해당 인덱스 번호까지 연결해줘야 함.
            >
                <Text style={{ paddingVertical: 15 }} size={18} color={Colors.WHITE}>🌸 동선 관리 페이지로 이동하기</Text>
            </Button>
        </View>
    )
}

export default MapFlows

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center'
    },
    arrowContainer: {
        alignItems: 'center',
        marginVertical: 5,
    },
    textContainer: {
        marginHorizontal: 15,
        paddingVertical: 16,
        textAlign: 'center',
        borderColor: Colors.GRAY_9,
        borderWidth: 1,
        borderRadius: 50,
        borderStyle: 'dashed'
    },
    flowBtnContainer: {
        borderRadius: 6,
        elevation: 6,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
    },
})