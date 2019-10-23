import apis from '@/fetch'
// import wsApis from '@/fetch/ws.js'
// import wsApis from '@/fetch/wss.js'
import { handleActions, combineActions } from 'redux-actions'
import createActionsHandler from './actions'

const httpConfig = 'http://s.funcoin.info/'

export const lang = localStorage.lang || ((navigator.browserLanguage || navigator.language).indexOf('zh') > -1 ? 'zh' : 'ko') || 'en'
localStorage.lang = lang

const actions = createActionsHandler(apis)
const {
    setLang,
    changeTheme,
    getUserAuth,
    clearUserAuth,
    changeLeverage,
    clearWebsocketParams,
    setWs,
    setWsStatus,
    sendWs,
    closeWs,
    setWsData,
    clearWsData,
    getContractData,
    getUsdkData,
    saveSessionId,
    savePriceData,
    passDeepPrice,
    getSwith,
    sendFundComponent,
    saveLever,
    saveUdeskLoad,
    savePoints,
    saveCoinimg,
} = actions
// 初始化状态
const initialState = {
    lang: localStorage.lang,
    apis,
    websocketParams: null,
    wsObj: null,
    swith: false,
    lever: null,
    wsConnet: false,
    // wsTranObj: null,
    wsData: {},
    // wsBondData: {},
    // theme: localStorage.theme || Object.keys(window.themeUrl)[0],
    theme: 'night', // 取消主题切换，写死黑版
    userAuth: null,
    leverage: 1,
    contractData: null,
    asynchronous: null,
    usdkData: null,
    sessionId: null,
    priceData: null,
    tradePrice: null,
    udeskLoaded: false,
    points: null,
    headerFundComponent: null,
    httpConfig,
    coinImg: null,
    helpcenter: 'https://support.fota.com/hc/',
    ...actions
}

const rootReducer = handleActions({
    [combineActions(
        setLang,
        getUserAuth,
        clearUserAuth,
        getContractData,
        savePriceData,
        saveSessionId,
        getUsdkData,
        passDeepPrice,
        changeTheme,
        changeLeverage,
        setWs,
        setWsStatus,
        sendWs,
        closeWs,
        clearWsData,
        getSwith,
        saveLever,
        saveUdeskLoad,
        savePoints,
        saveCoinimg,
        clearWebsocketParams,
        // sendWsbond,
        // closeWsbond,
        // clearWsbondData,
        sendFundComponent,
    )]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [combineActions(setWsData)]: (state, { payload }) => ({
        ...state,
        wsData: {
            ...state.wsData,
            ...payload.wsData
        }
    })
    // [combineActions(setWsbondData)]: (state, { payload }) => ({
    //     ...state,
    //     wsBondData: {
    //         ...state.wsBondData,
    //         ...payload.wsBondData
    //     }
    // })
}, initialState)
export default rootReducer
