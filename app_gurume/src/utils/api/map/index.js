/**
 * MAP SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

const DEFAULT_YOUTUBER_ID = '5fb73d0e4c2de82830b54834'

// 🎃 API 리스트 🎃

// 처음 로딩시 전체 마커 불러오기
async function getAllMarkers() {
    const { data } = await instance.get('map')
    console.log("전체 마커 로딩중!!!!!!!!!!!")
    return data
}

// 선택한 유튜버의 마커만 불러오기
async function getYoutuberMarkers(argYtbChannelId = DEFAULT_YOUTUBER_ID) {
    const { data } = await instance.get(`/map/youtuberSearch/youtuber/${argYtbChannelId}`)
    // console.log(response.data.YtbChannelTb)
    return data.YtbChannelTb
}

// 특정 맛집 id, name, address
async function getStoreInfo(argStoreId) {
    const { data } = await instance.get(`/map/store/${argStoreId}`)
    // console.log(data.ytbStoreTb)
    return data
}

// 맛집 방문한 유튜버, 맛집이 나온 영상 썸네일
async function getStoreYoutubers(argStoreId) {
    const { data } = await instance.get(`/storeYoutuber/${argStoreId}`)
    // console.log(data.ytbStoreTb)
    return data
}

export { getAllMarkers, getYoutuberMarkers, getStoreInfo, getStoreYoutubers }