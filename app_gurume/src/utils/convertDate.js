const format_YYYYMMDD = (date) => {
    date = new Date(date)
    const year = date.getFullYear()
    let month = (1 + date.getMonth())
    month = month >= 10 ? month : '0' + month
    let day = date.getDate()
    day = day >= 10 ? day : '0' + day
    return year + '년 ' + month + '월 ' + day + '일'
}

export { format_YYYYMMDD }