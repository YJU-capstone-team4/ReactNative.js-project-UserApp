import styled from 'styled-components'

// import styles
import { Colors, Typography } from './index'

export const Text = styled.Text`
  color:${Colors.BLACK};
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
  color: black;
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