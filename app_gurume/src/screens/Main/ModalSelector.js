import React from 'react'

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
            optionTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR, paddingVertical: 10 }}
            cancelTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR, paddingVertical: 10 }}
            onChange={(option) => { handleSetRegion(option) }}
            onModalClose={() => props.setModalOpen(!props.modalOpen)}
        />
    )
}

export default LocationSelector
