import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import AntIcons from 'react-native-vector-icons/AntDesign';
import { Colors } from '@styles';
import { Text } from '@styles/CommonStyles'

// import components
import PolygonMap from '@components/PolygonMap'

// import apis
import { getFlowListItems, setYourFlowCountUp } from '../../../utils/api/flow'

const ShowFlowLIst = (props) => {
    // TODO shareFolderId 맵핑시키기.
    const [markers, setMarkers] = useState(null)
    const [stores, setStores] = useState(null)
    const [isActivity, setIsActivity] = useState(false)

    useEffect(() => {
        const { params } = props.route
        async function init(argFolderId, argShareFlowId) {
            // 폴더 아이디로 해당 값 불러오기
            // setYourFlowCountUp(argShar)
            const data = await getFlowListItems(argFolderId)
            let tempConvertedArr = data.map(item => (
                {
                    latitude: item.location.lat,
                    longitude: item.location.lng
                }
            ))

            // 데이터 반환
            setStores(data)
            setMarkers(tempConvertedArr)
        }
        init(params.folderId, params.shareFlowId)
    }, [props.route])

    if (!stores || !markers) {
        return <View style={styles.container}>
            <Text>로딩중 ...</Text>
        </View>
    }

    return (
        <>
            <TouchableOpacity onPress={() => setIsActivity(!isActivity)} style={styles.likeWrapper}>
                <AntIcons name="heart" size={20} color={isActivity ? Colors.RED_4 : Colors.GRAY_4} />
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {
                    markers && markers.length > 0 && <View style={{ borderColor: Colors.GRAY_5, borderWidth: 2 }}>
                        <PolygonMap data={markers} />
                    </View>
                }
                {
                    stores.map((item, index) => (
                        <View style={styles.storeWrapper} key={index}>
                            <View style={styles.indexContainer}>
                                <Text weight="BOLD" size={18}>{index + 1}</Text>
                            </View>
                            <View>
                                <Text weight="BOLD" style={{ paddingBottom: 5 }}>{`<${item.typeStore}>`} {item.storeName}</Text>
                                <Text style={{ flex: 1 }}>{item.storeAddress}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </>
    )
}

export default ShowFlowLIst

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        // height: '100%',
        paddingHorizontal: 15,
        paddingTop: 8
    },
    storeWrapper: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    indexContainer: {
        // padding: 10,
        width: 35,
        height: 35,
        // marginLeft: 5,
        marginRight: 20,
        backgroundColor: Colors.YELLOW_4,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3
    },
    likeWrapper: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 33,
        height: 33,
        borderRadius: 50,
        padding: 6,
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        right: 25,
        top: -42,
        zIndex: 1000000
    }
})
