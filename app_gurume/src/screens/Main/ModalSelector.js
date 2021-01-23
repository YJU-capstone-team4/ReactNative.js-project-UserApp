import React from 'react'
import { View, Text } from 'react-native'

import ModalSelector from 'react-native-modal-selector'
import { Typography } from '../../styles';

const LocationSelector = (props) => {
    const handleSetRegion = (option) => {
        props.setRegion(option.label)

        return alert(`${option.label} (${option.key}) 사용자가 선택한 값입니다!!`)
    }

    return (
        <ModalSelector
            data={props.data}
            visible={props.modalOpen}
            cancelText={"취소"}
            touchableStyle={{ display: 'none' }}
            optionTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR }}
            cancelTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR }}
            onChange={(option) => { handleSetRegion(option) }} />
    )
}

export default LocationSelector
