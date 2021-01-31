const convertRegion = (region) => {
    convertedRegion = region;
    switch (region) {
        case '서울특별시':
            convertedRegion = '서울'
            break;
        case '인천광역시':
            convertedRegion = '인천'
            break;
        case '광주광역시':
            convertedRegion = '광주'
            break;
        case '대구광역시':
            convertedRegion = '대구'
            break;
        case '울산광역시':
            convertedRegion = '울산'
            break;
        case '대전광역시':
            convertedRegion = '대전'
            break;
        case '부산광역시':
            convertedRegion = '부산'
            break;
        case '세종특별자치시':
            convertedRegion = '세종시'
            break;
        case '경기도':
            convertedRegion = '경기'
            break;
        case '강원도':
            convertedRegion = '강원'
            break;
        case '충청남도':
            convertedRegion = '충남'
            break;
        case '충청북도':
            convertedRegion = '충북'
            break;
        case '경상북도':
            convertedRegion = '경북'
            break;
        case '경상남도':
            convertedRegion = '경남'
            break;
        case '전라북도':
            convertedRegion = '전북'
            break;
        case '전라남도':
            convertedRegion = '전남'
            break;
        case '제주특별자치도':
            convertedRegion = '제주'
            break;
        default:
            convertedRegion = '서울'
            break;
    }
    return convertedRegion
}

export default convertRegion