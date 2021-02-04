/**
 * MAIN SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

// 🎃 API 리스트 🎃

// adminTag-regionTag 반환
async function getAllRegionTags() {
    const response = await instance.get('region')
    console.log('adminTag-regionTag 반환 : ', response.data.adminTagTbs[0].adminTag)
    return response.data.adminTagTbs[0].adminTag
}

//입력받은 지역을 방문한 유튜버 이름, 썸네일
async function getRegionYoutubers(argRegion) {
    const response = await instance.get(`/regionYtb/region/${argRegion}`)
    console.log('입력받은 지역을 방문한 유튜버 : ', response.data)
    return response.data
}

// 입력받은 지역이 포함되어 있는 동선
async function getRegionFlows(argRegion) {
    const response = await instance.get(`/regionFlow/region/${argRegion}`)
    console.log('입력받은 지역이 포함되어 있는 동선 : ', response.data)
    return response.data
}


export { getAllRegionTags, getRegionYoutubers, getRegionFlows }