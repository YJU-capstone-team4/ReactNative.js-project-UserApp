import defaultAxios from 'axios'

// TODO 배포시 URL 변경
const API_URL = 'http://192.168.0.4:3000/'

// 엑시오스 초기화 함수
const createInstance = () => {
    return defaultAxios.create({
        baseURL: API_URL,
    });
}

// 인증된 유저 url 설정 값
function createInstanceWithAuth(url) {
    const instance = defaultAxios.create({
        baseURL: `${API_URL}${url}`,
    });
    return setInterceptors(instance)
}

function setInterceptors(instance) {
    instance.interceptors.request.use(
        function (config) {
            // TODO 해더에 토큰 실어서 보내기.
            // 여기서 토큰은 Redux에 state에서 꺼내기.
            // config.headers.Authorization = `${}`
            return config;
        },
        function (error) {
            return Promise.reject(error)
        },
    );

    instance.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            return Promise.reject(error)
        },
    );
    return instance;
}

export const instance = createInstance()
export const afterAuth = createInstanceWithAuth('')
// export const reportAuth = createInstanceWithAuth('user')
// export const reviewAuth = createInstanceWithAuth('review')