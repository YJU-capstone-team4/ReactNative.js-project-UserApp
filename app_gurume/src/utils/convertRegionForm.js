const convertRegionForm = (regions) => {
    let tempRegions = []
    tempRegions.push({ key: -1, section: true, label: '지역선택' })
    regions.map((item, index) => {
        return tempRegions.push({ key: index, label: item })
    })

    return tempRegions
}

export default convertRegionForm 