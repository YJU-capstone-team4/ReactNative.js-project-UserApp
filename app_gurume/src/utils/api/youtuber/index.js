/**
 * YOUTUBE SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

const DEFAULT_YOUTUBER_ID = '5fb73d0e4c2de82830b54834'

// 🎃 API 리스트 🎃

// 전체 유튜버 목록
async function getAllYoutubersInfo() {
    const { data } = await instance.get('map/youtuber')
    // console.log('받아온 데이터는?', response.data)
    return data
}

// 유튜버 이름으로 검색
async function searchYoutuberByName(argYoutuberName) {
    const { data } = await instance.get(`/youtuberSearch/${argYoutuberName}`)
    return data
}

// 사용자가 입력한 유튜버 검색
async function getYoutuberInfo(argYoutuberId = DEFAULT_YOUTUBER_ID) {
    const { data } = await instance.get(`map/youtuberSearch/youtuber/${argYoutuberId}`)
    return data
}

// 유튜버 조회수 top5 영상
async function getYoutuberVideoInfo(argYoutuberId = DEFAULT_YOUTUBER_ID) {
    const { data } = await instance.get(`/youtuber/video/${argYoutuberId}`)
    return data
}

// 유튜버에 관한 해시태그 반환
async function getYoutuberHashtags(argYoutuberId = DEFAULT_YOUTUBER_ID) {
    const { data } = await instance.get(`/youtuber/userTag/${argYoutuberId}`)
    return data
}

// 유튜버가 방문한 지역 태그 반환
async function getYoutuberRegionInfo(argYoutuberId = DEFAULT_YOUTUBER_ID) {
    const { data } = await instance.get(`/youtuber/region/${argYoutuberId}`)
    return data
}

/**
 * 유튜버가 방문한 지역별 영상
 * @param {string} argYoutuberId 
 * @param {array} argRegionTags 
 */
async function getYoutuberRegionVideo(argYoutuberId = DEFAULT_YOUTUBER_ID, argRegionTags) {
    const { data } = await instance.post(`/youtuber/localVideo`, {
        ytb_id: argYoutuberId,
        regionTags: argRegionTags
    })
    return data
}

// 유튜버 정보 가져오기
async function getFindOneYoutuberInfo(argYoutuberId = DEFAULT_YOUTUBER_ID) {
    const { data } = await instance.get(`youtuber/${argYoutuberId}`)
    return data
}

// 유튜버 좋아요 활성화
async function setYoutuberLike(argYoutuberId = DEFAULT_YOUTUBER_ID) {
    const { data } = await instance.post(`youtuber/like`, { ytb_id: argYoutuberId })

    return data
}

// 서버에 없는 유튜버 신청하기
async function setYoutuberRequest(argYoutuberName) {
    const { data } = await instance.post('youtuber/request', {
        ytbChannel: argYoutuberName
    })

    return data
}


export {
    getAllYoutubersInfo,
    getYoutuberInfo,
    getYoutuberVideoInfo,
    getYoutuberRegionInfo,
    getFindOneYoutuberInfo,
    setYoutuberLike,
    searchYoutuberByName,
    getYoutuberHashtags,
    setYoutuberRequest,
    getYoutuberRegionVideo
}