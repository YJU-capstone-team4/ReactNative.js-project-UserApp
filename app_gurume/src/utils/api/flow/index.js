/**
 * MAIN SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

// 🎃 API 리스트 🎃

// 유저가 추가한 동선 폴더 상세조회
async function getFlowListItems(argFolderId) {
    const { data } = await instance.get(`userFlow/folder/${argFolderId}`)
    return data
}

// 유저 동선 폴더에 있는 가게 순서 변경
async function setRefreshFlowIndex(argData) {
    const { data } = await instance.put('/userFlow/folder', argData)

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

// 동선 공유
async function setUserFlowShare(argData) {
    try {
        const { data } = await instance.post('shareFlow/folder', argData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return data
    } catch (e) {
        console.log('에러에러', e)
        return (e)
    }

    // return data
}

export { setFlowLike, getFlowListItems, setRefreshFlowIndex, setUserFlowShare }


