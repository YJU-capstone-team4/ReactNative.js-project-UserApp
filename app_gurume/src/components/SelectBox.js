import React, { useState } from 'react'
import { View, Text } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Feather'

export default function SelectBox() {
  const [itemValue, setItemValue] = useState('usa')

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
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
        ]}
        defaultValue={itemValue}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => setItemValue(item.value)}
      />
    </View>
  )
}
