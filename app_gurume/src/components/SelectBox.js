import React, { useState } from 'react'
import { View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Feather'

// import styles
import { Colors, Typography } from '@styles'

export default function SelectBox() {
  const [itemValue, setItemValue] = useState('usa')

  return (
    <View style={{ marginVertical: 10 }}>
      <DropDownPicker
        items={[
          {
            label: '대구 여행 코스',
            value: 'usa',
            icon: () => <Icon name="flag" size={18} color="#900" />,
            hidden: true,
          },
          {
            label: '부산 여행 코스',
            value: 'uk',
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: '서울 홍대 맛집 코스',
            value: 'france',
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
          {
            label: '전주 맛집 코스',
            value: 'junju',
            icon: () => <Icon name="flag" size={18} color="#900" />,
          },
        ]}
        defaultValue={itemValue}
        containerStyle={{ height: 50 }}
        zIndex={5000}
        max={5}
        style={{ backgroundColor: Colors.WHITE, borderColor: Colors.GRAY_LIGHT }}
        itemStyle={{
          justifyContent: 'flex-start',
          paddingVertical: 15,
        }}
        labelStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR }}
        dropDownStyle={{ backgroundColor: Colors.WHITE }}
        onChangeItem={(item) => setItemValue(item.value)}
      />
    </View>
  )
}
