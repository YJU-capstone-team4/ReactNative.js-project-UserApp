/**
 * YOUTUBE SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

const DEFAULT_YOUTUBER_ID = '5fb73d0e4c2de82830b54834'

// 🎃 API 리스트 🎃

// 전체 유튜버 목록
async function getAllYoutubersInfo() {
    const response = await instance.get('map/youtuber')
    return response.data
}

// 사용자가 입력한 유튜버 검색
async function getYoutuberInfo(argYoutuberId = DEFAULT_YOUTUBER_ID) {
    const response = await instance.get(`map/youtuberSearch/youtuber/${argYoutuberId}`)
    return response.data
}