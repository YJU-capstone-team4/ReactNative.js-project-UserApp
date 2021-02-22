import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

// import styles
import { Text } from '@styles/CommonStyles';
import markerImage from '@images/delivery_128.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '@styles'

// import apis
import { setRefreshFlowIndex } from '../../../utils/api/flow'

const NUM_ITEMS = 10

function DraggableFlowList(props) {
    const renderItem = useCallback(({ item, index, drag, isActive }) => {
        /**
         * 1. 아이템의 종류에 따라서 기본 마커가 달라진다 ( 맛집, 관광지, 카페 )
         * 2. index 처음과 끝은 하이라이팅 지원.
         */
        return (
            <TouchableOpacity
                style={[styles.wrapperContainer]}
                onLongPress={drag}
                activeOpacity={0.7}
            >
                <Image style={styles.iconWrapper} source={markerImage} />
                <MaterialCommunityIcons style={styles.horizontalDots} color={
                    index === 0 || index === props.data.length - 1 ? Colors.YELLOW_6 : Colors.GRAY_2
                } name='dots-horizontal-circle' />
                <Text style={styles.textContainer}>{item.ytbStoreTbId.storeInfo.storeName}</Text>
                { index !== props.data.length - 1 ?
                    <MaterialCommunityIcons style={styles.verticalDots} color={Colors.GRAY_7} size={20} name='dots-vertical' /> : null
                }
            </TouchableOpacity>
            // <TouchableOpacity
            //     style={[styles.wrapperContainer]}
            //     onLongPress={drag}
            //     activeOpacity={0.7}
            // >
            //     <Image style={styles.iconWrapper} source={markerImage} />
            //     <MaterialCommunityIcons style={styles.horizontalDots} color={
            //         index === 0 || index === props.data.length - 1 ? Colors.YELLOW_6 : Colors.GRAY_2
            //     } name='dots-horizontal-circle' />
            //     <Text style={styles.textContainer}>{item.storeName}</Text>
            //     { index !== props.data.length - 1 ?
            //         <MaterialCommunityIcons style={styles.verticalDots} color={Colors.GRAY_7} size={20} name='dots-vertical' /> : null
            //     }
            // </TouchableOpacity>
        );
    }, [])

    const handleDragEnd = async (e) => {
        const { to, from, data } = await e
        console.log('Index to :', to, '=> from :', from)
        // 같은 자리에 놓을때는 이벤트 종료
        if (to === from) {
            return;
        } else {
            const storeIds = await data.map(v => v.storeId)

            let arrayChangedIndexes = {
                folderId: props.folderValue.key,
                storeIds
            }

            await props.setMarkers(data)
            const result = await setRefreshFlowIndex(arrayChangedIndexes)
            console.log('스토어 순서 변경 결과는?', result)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <DraggableFlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `draggable-item-${index}`}
                onDragEnd={(e) => handleDragEnd(e)}
            />
        </SafeAreaView>
    );
}

export default DraggableFlowList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 30,
        marginBottom: 20
    },
    wrapperContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        marginVertical: 5
    },
    textContainer: {
        // color: 'white',
        fontSize: 18,
    },
    iconWrapper: {
        width: 16,
        height: 16,
    },
    horizontalDots: {
        marginHorizontal: 15
    },
    verticalDots: {
        position: 'absolute',
        left: 27,
        bottom: -14
    }
})