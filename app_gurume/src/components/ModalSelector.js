import React from 'react'

import Modal from 'react-native-modal-selector'
import { Typography, Colors, StyleSheet } from '@styles';

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
            overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
            cancelContainerStyle={{}}
        />
    )
}

export default ModalSelector