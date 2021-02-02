/**
 * MAP SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

const DEFAULT_YOUTUBER_ID = '5fb73d0e4c2de82830b54834'

// 🎃 API 리스트 🎃

// 처음 로딩시 전체 마커 불러오기
async function getAllMarkers() {
    const response = await instance.get('map')
    console.log(response.data)
    return response.data
}

// 선택한 유튜버의 마커만 불러오기
async function getYoutuberMarkers(ytbChannel_id = DEFAULT_YOUTUBER_ID) {
    const response = await instance.get(`/map/youtuberSearch/youtuber/${ytbChannel_id}`)
    return response.data
}



export { getAllMarkers, getYoutuberMarkers }