import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Modal from 'react-native-modal-selector'
import { Typography } from '@styles';

const useModalSelector = (props) => {
    const [visible, setVisible] = useState(false)

    const ModalSelector = (props) => {
        console.log("모달이 로딩되었습니다 !")
        return <Modal
            data={props.data}
            visible={visible}
            cancelText={props.calcelText ? props.calcelText : "닫기"}
            touchableStyle={{ display: 'none' }}
            optionContainerStyle={{ height: 380 }}
            optionTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR, paddingVertical: 10 }}
            cancelTextStyle={{ fontFamily: Typography.FONT_FAMILY_REGULAR, paddingVertical: 10 }}
            onChange={(option) => {
                props.onChange(option)
                setVisible(false)
            }}
            onModalClose={() => setVisible(false)}
            overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', height: Dimensions.get('window').height }}
            touchableActiveOpacity={0.5}
        />
    }

    return [ModalSelector, visible, setVisible]
}

export default useModalSelector