import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Feather'

// import styles
import { Colors, Typography } from '@styles'

const convertFolderList = (data) => {
  const items = []
  // 타이틀, id 만 가져오기
  data.map(v => {
    items.push(
      {
        label: v.folderTitle,
        value: v._id,
        icon: () => <Icon name="hash" size={18} color="#900" />,
      }
    )
  })

  console.log(items)
  return items;
}

const SelectBox = (props) => {
  const [userFlow, setUserFlow] = useState(props.userFlow)
  const [itemValue, setItemValue] = useState(null)
  // console.log('test💚',userFlow)

  return (
    <>
      {
        props.userFlow ?
            <DropDownPicker
              items={convertFolderList(userFlow)}
              containerStyle={{ height: 50 }}
              zIndex={50000}
              max={4}
              style={{ backgroundColor: Colors.WHITE, borderColor: Colors.GRAY_LIGHT }}
              itemStyle={{
                justifyContent: 'flex-start',
                paddingVertical: 15,
              }}
              labelStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR }}
              dropDownStyle={{ backgroundColor: Colors.WHITE }}
              onChangeItem={(item) => setItemValue(item.value)}
              defaultValue={userFlow[0].value}
            /> : null
      }
    </>
  )
}

export default SelectBox