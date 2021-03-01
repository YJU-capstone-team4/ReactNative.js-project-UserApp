/**
 * MAIN SCREEN 관련 API 리스트 입니다.
 */

// import modules
import { instance, afterAuth } from '../index'

// 🎃 API 리스트 🎃

// 폴더 조회
async function getUserFolders() {
    const { data } = await instance.get('userFlow')
    return data
}

// 폴더 생성
async function setUserFolder(argFolderTitle) {
    const { data } = await instance.post('userFlow', {
        folderTitle: argFolderTitle
    })

    console.log('폴더 생성 결과 반환 : ', data)
    return data
}

// 폴더 삭제
async function deleteUserFolder(argFolderId) {
    const { data } = await instance.delete('userFlow', {
        params: {
            folder_id: argFolderId
        }
    })
    return data
}

export { getUserFolders, setUserFolder, deleteUserFolder }
