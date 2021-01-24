import styled from 'styled-components'

// import styles
import { Colors } from '@styles'

export const Container = styled.View`
    display: flex;
    flex: 1;
`

export const ToggleContainer = styled.TouchableOpacity`
    position: absolute;
    top: 120px;
    right: 10px;
    background-color: ${Colors.BLACK};
    width: 120px;
    padding: 10px 0px;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    flex-direction: row;
`