import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import user_profile from '@images/user_profile.png'

/**
 * 컨텍스트를 만들어 줍니다. 인자로 defaultValue 넣어줄 수 있습니다.
 * @type {React.Context<string>}
 */
const TestContext = createContext("");

/**
 * 프로바이더 컴포넌트를 만들어서 프로바이더로 감싸고 안에 children 을 넣어줍니다.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const TestContextProvider = ({ children }) => {

    // 여기서 사용할 상태들을 useState로 생성합니다.
    const [initValue, setInitValue] = useState({
        isLogin: true,
        nickName: 'Kokohaseyo',
        userEmail: 'c0305sh@naver.com',
        photoUrl: user_profile,
        selectedFolderId: '60336da678a46f2a7fa8ccc6'
    })

    // 프로바이더에 value 프로퍼티로 삽입해줄 객체를 생성하는데, 여기서는 상태와 셋 함수를 state와 actions로 설정.
    const value = {
        state: { initValue },
        actions: { setInitValue }
    }

    // value에 위에서 생성한 객체 넣어준다.
    return (
        <TestContext.Provider value={value}>
            {children}
        </TestContext.Provider>
    )
}

// 사용하기 쉽게 하기위해 변수명을 새로 지어줬다.
const { Consumer: TestContextConsumer } = TestContext
// === const TestContextConsumer = TestContext.Consumer 와 같음 객체에서 여러개를 재할당 할 때 쉽게 할 수 있음.

// 내보내준다.
export {
    TestContextProvider,
    TestContextConsumer
};
export default TestContext;