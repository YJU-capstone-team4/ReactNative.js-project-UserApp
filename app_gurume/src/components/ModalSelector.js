import React from 'react'
import { Dimensions } from 'react-native'
import Modal from 'react-native-modal-selector'
import { Typography } from '@styles';

const ModalSelector = (props) => {
    return (
        <Modal
            data={props.data}
            visible={props.modalOpen}
            cancelText={"닫기"}
            touchableStyle={{ display: 'none' }}
            optionTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR, paddingVertical: 10 }}
            cancelTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR, paddingVertical: 10 }}
            onChange={(option) => { props.onChange(option) }}
            onModalClose={() => props.setModalOpen(false)}
            overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.85)', height: Dimensions.get('window').height }}
            // style={{ height: Dimensions.get('window').height + 20}}
        />
    )
}

export default ModalSelector