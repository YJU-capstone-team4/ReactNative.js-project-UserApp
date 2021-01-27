import { Colors } from '../styles'

const clusterColorPicker = (argMarkerCount) => {
    let outSideColor = Colors.GRAY_3
    let inSideColor = Colors.GRAY_6
    let clusterScale = 0.7

    if (argMarkerCount > 20) {
        outSideColor = Colors.RED_3
        inSideColor = Colors.RED_6
        clusterScale = 1.3
    } else if (argMarkerCount > 10) {
        outSideColor = Colors.ORANGE_3
        inSideColor = Colors.ORANGE_6
        clusterScale = 1.1
    } else if (argMarkerCount > 5) {
        outSideColor = Colors.GREEN_3
        inSideColor = Colors.GREEN_6
        clusterScale = 0.9
    } else if (argMarkerCount > 2) {
        outSideColor = Colors.GREEN_3
        inSideColor = Colors.GREEN_6
        clusterScale = 0.8
    }

    return { outSideColor, inSideColor, clusterScale }
}

export default clusterColorPicker