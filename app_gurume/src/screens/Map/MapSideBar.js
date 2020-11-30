import React from 'react'
import { View, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, Drawer } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// components
import SelectBox from '@components/SelectBox'
import { Button, Text } from '../../styles/CommonStyles'
import { mokupSideRoute } from '../../model/mokupSideRoute'

// styles
import { Colors, Typography } from '@styles'
import user_profile from '@images/user_profile.png'
import under_arrow from '@images/under_arrow.png'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    imageProfile: {
        width: 70,
        height: 70,
        borderRadius: 80,
    },
    flowBtnContainer: {
        borderRadius: 6,
        elevation: 6,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
    },
    subHeaberContainer: {
        // position: 'absolute',
        // width: '200%',
        // flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 48,
        borderColor: Colors.GRAY_3,
        borderBottomWidth: 1,
        padding: 10,
    },
    arrowContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    arrowImage: {
        width: 20,
        height: 20,
    },
    folderText: {
        color: Colors.GRAY_7,
        marginStart: 30,
        marginTop: 1
    },
    folderContainer: {
        marginVertical: 20,
    },
    folderItemContainer: {
        alignItems: 'flex-start',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row'
    }
})

// navigation.goBack()
const folderItem = mokupSideRoute.map((data, index) =>
    <TouchableOpacity style={styles.container, styles.folderItemContainer} key={index}>
        <MaterialCommunityIcons name={data.icon} color="black" size={18} />
        <Text size={20} style={styles.folderText}>{data.routeName}</Text>
    </TouchableOpacity >
)

export default function MapSideBar(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ display: 'flex', paddingHorizontal: 20 }}>
                <View style={{ flex: 1 }}>
                    <View style={[styles.container, {
                        flexDirection: 'row',
                        marginTop: 25,
                    }]}>
                        <Image style={styles.imageProfile} source={user_profile} />
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Text weight={"BOLD"} size={20} style={{ marginStart: 20 }}>코코하세요 님</Text>
                            <Text weight={"BOLD"} size={20} style={{ marginStart: 20 }}>kokohaseyo</Text>
                        </View>
                    </View>
                    <View style={styles.folderContainer}>
                        {folderItem}
                    </View>
                </View>
                <TouchableOpacity style={[styles.container, styles.folderItemContainer, {
                    borderColor: Colors.GRAY_2, borderTopWidth: 1
                }]}>
                    <MaterialCommunityIcons name='exit-to-app' color="black" size={18} />
                    <Text size={20} style={styles.folderText}>로그아웃</Text>
                </TouchableOpacity >
            </View>
            <View style={styles.subHeaberContainer}>
                <MaterialCommunityIcons name="arrow-left" color="black" size={24} />
                <Text style={{ marginTop: 3, marginStart: 10 }} size={22}>동선 폴더</Text>
            </View>
            <View style={{ display: 'flex', paddingHorizontal: 20 }}>
                <SelectBox />
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>기사식당 돼지불백</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>퍼즈 X 베이커리</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>핸즈커피 반석점</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>토스트엔후르츠</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>오늘은 떡볶이집</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>상세보기</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>오늘은 떡볶이집</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>상세보기</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>오늘은 떡볶이집</Text>
                </Button>
                <View style={styles.arrowContainer}>
                    <Image style={styles.arrowImage} source={under_arrow} />
                </View>
                <Button style={styles.flowBtnContainer} backgroundColor={Colors.RED_3} borderColor={Colors.RED_3}>
                    <Text style={{ paddingVertical: 7 }} size={18} color={Colors.WHITE}>상세보기</Text>
                </Button>
            </View>
        </DrawerContentScrollView>
    )
}