import styled from 'styled-components'

// import styles
import { Colors, Typography } from './index'

export const Container = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const StyledToogleButton = styled.TouchableOpacity`
    position: absolute;
    top: 120;
    right: 10;
    background-color: ${Colors.BLACK};
    width: 120;
    padding: 10 0;
    border-radius: 12;
    display: flex;
    justify-content: center;
    flex-direction: row;
`

const StyledToogleText = styled.Text`
    font-family: ${Typography.FONT_FAMILY_BOLD};
    font-size: ${Typography.FONT_SIZE_16};
    color: ${Colors.WHITE};
`

// toggleText: {
//     fontFamily: Typography.FONT_FAMILY_BOLD,
//         fontSize: Typography.FONT_SIZE_16,
//             color: Colors.WHITE,
//   },
// toggleOnText: {
//     fontFamily: Typography.FONT_FAMILY_EXTRA_BOLD,
//         paddingLeft: 5
// }

export const ToogleButton = ({ children, ...props }) => {
    <StyledToogleButton {...props}>
        <StyledToogleText>{children}</StyledToogleText>
    </StyledToogleButton>
}