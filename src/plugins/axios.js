/*
 * @Description: 全局路由
 * @Date: 2020-03-19 15:20:13
 */
import Vue from 'vue';
import axios from 'axios';
// import { Loading } from 'element-ui';
// import store from '../store';
import qs from 'qs';
const localStore = require('store');

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// let loadingInstance;
const config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000 // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
    function(config) {
        config.headers = config.headers || {};

        // 处理请求地址 这里正式变了 不需要这个处理了
        // if (/^\/wx/.test(config.url)) {
        //     // 正式环境
        //     if (window.APPCONF.env === 'prod') {
        //         config.url = config.url.replace(/^\/wx/, '');
        //     }
        // }

        // 加密部分参数
        if (config.method === 'post') {
            const params = Object.keys(config.data || {});
            const verifyField = params.find(key => ['commandId', 'centreCommandId'].includes(key) && config.data[key]);
            const xcode = localStore.get('xcode');
            if (verifyField && xcode) {
                // config.headers['X-CODE'] = md5(`${config.data[verifyField]}:${xcode}`);
            }
        }

        // Do something before request is sent
        if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
            config.data = qs.stringify(config.data); // post请求格式化数据
        }

        // 请求头
        // config.headers.userId = (store.state.session.mem || {}).userId;
        if (localStore.get('auth_token')) {
            config.headers.Auth = `Bearer ${localStore.get('auth_token')}`;
        }

        // 加载动画
        // loadingInstance = Loading.service({
        //     text: '玩命加载中...',
        //     background: 'rgba(255, 255, 255, 0.6)'
        // });
        // store.commit('CHANGE_LOADING_ARR', store.getters.loadingArr + 1); // 动画加载个数加1
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    response => {
        if ((response.data.status === 'fail' || response.data.success === false) && response.data.msg && !response.config.dotMessage) {
            Vue.prototype.$message('error', response.data.msg);
        }
        if (response.data.code === 401) {
            Vue.prototype.$gotologin(response.data.msg.redirectUrl);
        }
        return response.data;
    },
    function(error) {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求';
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = '请求错误，未找到该资源';
                    break;
                case 405:
                    error.message = '请求方法未允许';
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务端出错';
                    break;
                case 501:
                    error.message = '网络未实现';
                    break;
                case 502:
                    error.message = '网络错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网络超时';
                    break;
                case 505:
                    error.message = 'http版本不支持该请求';
                    break;
                default:
                    error.message = `连接错误${error.response.status}`;
            }
        } else {
            error.message = '连接服务器失败';
        }
        // Do something with response error
        return Promise.reject(error);
    }
);

const Plugin = {};

Plugin.install = function(Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};

Vue.use(Plugin);

export default Plugin;
