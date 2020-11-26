import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, Drawer } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// styles
import { Colors, Typography } from '@styles'
import user_profile from '@images/user_profile.png'

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
    textContainer: {
        textTransform: 'uppercase',
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontSize: Typography.FONT_SIZE_20,
        marginStart: 30
    },
    subTextContainer: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
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

const dummyRoute = [
    {
        routeName: '동선 폴더',
        icon: 'folder-open-outline',
        url: ''
    },
    {
        routeName: '즐겨찾기',
        icon: 'star',
        url: ''
    },
    {
        routeName: '내 정보',
        icon: 'account-box',
        url: ''
    },
    {
        routeName: '이름을 무엇으로할까요',
        icon: 'lock-question',
        url: ''
    },
]

// navigation.goBack()
const folderItem = dummyRoute.map((data, index) =>
    <TouchableOpacity style={styles.container, styles.folderItemContainer} key={index}>
        <MaterialCommunityIcons name={data.icon} color="black" size={18} />
        <Text style={[styles.textContainer, { color: Colors.GRAY_7 }]}>{data.routeName}</Text>
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
                            <Text style={[styles.textContainer, { marginStart: 20 }]}>코코하세요 님</Text>
                            <Text style={[styles.subTextContainer, { marginStart: 20 }]}>kokohaseyo</Text>
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
                    <Text style={[styles.textContainer, { color: Colors.GRAY_7 }]}>로그아웃</Text>
                </TouchableOpacity >
            </View>
        </DrawerContentScrollView>
    );
}