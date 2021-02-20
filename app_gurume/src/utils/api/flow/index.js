/**
 * MAIN SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

// 🎃 API 리스트 🎃

// adminTag-regionTag 반환
// async function getAllRegionTags() {
//     const response = await instance.get('region')
//     console.log('adminTag-regionTag 반환 : ', response.data.adminTagTbs[0].adminTag)
//     return response.data.adminTagTbs[0].adminTag
// }

// 유저가 추가한 동선 리스트
async function getFlowList() {
    const { data } = await instance.get('userFlow')

    return data
}


// 동선 좋아요 추가 / 삭제
async function setFlowLike(argType, argFlowId) {
    let data = null
    const idSet = {
        shareFlow_id: argFlowId
    }

    data = argType ? await instance.post('shareFlow/like', idSet) : await instance.delete('shareFlow/like', idSet)

    return data
}

export { setFlowLike, getFlowList }


