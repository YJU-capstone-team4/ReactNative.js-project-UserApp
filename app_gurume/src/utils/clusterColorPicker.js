import { Colors } from '../styles'

const clusterColorPicker = (argMarkerCount) => {
    let outSideColor = Colors.GRAY_6 + '80'
    let inSideColor = Colors.GRAY_6
    let clusterScale = 0.7

    if (argMarkerCount > 20) {
        // outSideColor = Colors.RED_3
        outSideColor = '#F9758380'
        inSideColor = '#DB4453'
        // inSideColor = Colors.RED_6
        clusterScale = 1.3
    } else if (argMarkerCount > 10) {
        // outSideColor = Colors.ORANGE_3
        outSideColor = '#F5983280'
        // inSideColor = Colors.ORANGE_5
        inSideColor = '#F5BE0A'
        clusterScale = 1.1
    } else if (argMarkerCount > 5) {
        // outSideColor = Colors.GREEN_3
        inSideColor = '#2EA2DB'
        // inSideColor = Colors.GREEN_6
        outSideColor = '#256C8F80'
        clusterScale = 0.9
    } else if (argMarkerCount > 2) {
        // outSideColor = Colors.GREEN_3
        outSideColor = '#4F8F5E80'
        // inSideColor = Colors.GREEN_6
        inSideColor = '#7ADB91'
        clusterScale = 0.8
    }

    return { outSideColor, inSideColor, clusterScale }
}

export default clusterColorPicker