const convertRegion = (region) => {
    convertedRegion = region;
    switch (region) {
        case '서울':
            convertedRegion = '서울특별시'
            break;
        case '인천':
            convertedRegion = '인천광역시'
            break;
        case '광주':
            convertedRegion = '광주광역시'
            break;
        case '대구':
            convertedRegion = '대구광역시'
            break;
        case '울산':
            convertedRegion = '울산광역시'
            break;
        case '부산':
            convertedRegion = '부산광역시'
            break;
        case '세종시':
            convertedRegion = '세종특별자치시'
            break;
        case '경기':
            convertedRegion = '경기도'
            break;
        case '강원':
            convertedRegion = '강원도'
            break;
        case '충남':
            convertedRegion = '충청남도'
            break;
        case '충북':
            convertedRegion = '충청북도'
            break;
        case '경북':
            convertedRegion = '경상북도'
            break;
        case '경남':
            convertedRegion = '경상남도'
            break;
        case '전북':
            convertedRegion = '전라북도'
            break;
        case '전남':
            convertedRegion = '전라남도'
            break;
        case '제주특별자치도':
            convertedRegion = '제주특별자치도'
            break;
        default:
            convertedRegion = '서울특별시'
            break;
    }
    return convertedRegion
}

export default convertRegion