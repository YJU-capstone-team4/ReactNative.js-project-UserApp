import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native'

// import styles
import { Colors, Typography } from '@styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const renderYoutuber = (item, handelRemoveYoutuber) => {
  // console.log(item)
  return (
    <View
      style={{
        margin: 9,
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => handelRemoveYoutuber(item.ytbChannel)} style={{ top: 9, left: 25, zIndex: 100 }}>
        <MaterialCommunityIcons
          name="close-circle"
          color="black"
          size={19}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {item.ytbChannel === '문복희' ? (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              flex: 1,
              zIndex: 1,
              height: 60,
              opacity: 0.8,
              borderRadius: 50,
            }}
          />
        ) : null}
        <Image
          style={{
            borderRadius: 50,
            width: 60,
            height: 60,
          }}
          source={item.ytbProfile}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={[styles.textType, {width: 60}]}>{item.ytbChannel}</Text>
    </View>
  )
}

export default function SelectedYoutubers(props) {
  return (
    <View
      style={[
        styles.inputContainer,
        {
          position: 'absolute',
          bottom: 0,
          height: 145,
          width: '100%',
          alignItems: 'center',
          marginRight: 10,
        },
      ]}
    >
      <Text
        style={[
          styles.textType,
          { fontFamily: Typography.FONT_FAMILY_BOLD, padding: 15, paddingBottom: 0 },
        ]}
      >
        추가된 유튜버 리스트
      </Text>
      <FlatList
        data={props.youtubers}
        keyExtractor={(item) => item.ytbChannel}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => renderYoutuber(item, props.handelRemoveYoutuber)}
        windowSize={5}
        initialNumToRender={5}
        // keyboardShouldPersistTaps="always"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    elevation: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderWidth: 1,
    borderColor: Colors.GRAY_LIGHT,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.GRAY_9,
    textTransform: 'uppercase',
  },
  textType: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    padding: 7,
  },
})