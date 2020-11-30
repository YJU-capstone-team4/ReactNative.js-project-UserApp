import styled from 'styled-components'

// import styles
import { Colors, Typography } from './index'

export const Text = styled.Text`
  font-size: ${({ size }) => {
        switch (size) {
            case 12:
                return parseInt(Number(Typography.FONT_SIZE_12))
            case 14:
                return parseInt(Number(Typography.FONT_SIZE_14))
            case 18:
                return parseInt(Number(Typography.FONT_SIZE_18))
            case 20:
                return parseInt(Number(Typography.FONT_SIZE_20))
            case 22:
                return parseInt(Number(Typography.FONT_SIZE_22))
            case 16:
            default:
                return parseInt(Number(Typography.FONT_SIZE_16))
        }
    }}px;
  color:  ${({ color }) => color ? color : Colors.BLACK};
  font-family: ${({ weight }) => {
        switch (weight) {
            case 'BOLD':
                return Typography.FONT_FAMILY_EXTRA_BOLD
            case 'EXTRA_BOLD':
                return Typography.FONT_FAMILY_EXTRA_BOLD
            case 'LIGHT':
                return Typography.FONT_FAMILY_LIGHT
            case 'REGULAR':
            default:
                return Typography.FONT_FAMILY_REGULAR
        }
    }};
`

export const Button = styled.TouchableOpacity`
    /* width: '100%'; */
    padding: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border-width: ${({ borderWidth }) => borderWidth ? borderWidth : 1}px;
    border-color: ${({ borderColor }) => borderColor ? borderColor : Colors.RED_3};
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : Colors.WHITE};
`