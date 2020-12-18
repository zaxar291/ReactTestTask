import axios from 'axios'
import {ApiBaseUrl} from "../App/Consts";
import {ACCESS_TOKEN} from "../Redux/ActionTypes/Actions";

const defaultConfig = {
    baseURL: ApiBaseUrl
}

const HttpManager = axios.create(defaultConfig)

HttpManager.interceptors.request.use((config) => {
    if (config.method === "post") {
        config.headers = {...config.headers, Authorization: 'Bearer ' + ACCESS_TOKEN, 'Content-type': 'application/json'}
    }
    return config
})

HttpManager.interceptors.response.use(( response ) => {
    response = (response.data.data !== undefined) ? response.data.data : response.data
    return response
})

export default HttpManager
