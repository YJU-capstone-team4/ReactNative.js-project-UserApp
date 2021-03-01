import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '@styles';
import { Text } from '@styles/CommonStyles';

export default function HashTagList({ data, onPress, selectedRegionTag }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 10,
        justifyContent: 'center'
      }}
    >
      {
        data ? data.map(item => {
          const isSelected = selectedRegionTag && selectedRegionTag === item || !onPress
          return <TouchableOpacity onPress={() => onPress ? onPress(item) : null} key={item} style={[styles.hashtagContainer, { backgroundColor: isSelected ? Colors.GRAY_7 : Colors.GRAY_3 }]}>
            <Text color={isSelected ? Colors.WHITE : Colors.BLACK} weight="BOLD" size={16}># {item}</Text>
          </TouchableOpacity>
        }) : <>
            <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
              <Text color={Colors.WHITE } weight="BOLD" size={16}># 로딩중...</Text>
            </View>
            <View style={[styles.hashtagContainer, { backgroundColor: Colors.GRAY_7 }]}>
              <Text color={Colors.WHITE } weight="BOLD" size={16}># 로딩중...</Text>
            </View>
          </>

      }
    </View>
  )
}

const styles = StyleSheet.create({
  hashtagContainer: {
    backgroundColor: '#F5839A',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    marginVertical: 6,
    elevation: 1.5,
    minWidth: 60,
    alignItems: 'center',
    marginRight: 4
  },
})