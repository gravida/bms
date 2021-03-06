// http.ts
import  { AxiosStatic, AxiosResponse, AxiosRequestConfig } from 'axios';
import  axios from 'axios';

export default class Http {
    private get ip() {
        return this.localIp
    }
    private isDevelopment: boolean = true
    private localIp = 'http://localhost:54321'
    private serverIp = 'http://xxxx.xxx.xxx'

    Get(apiUrl: string, query?: any, option?: AxiosRequestConfig) {
        return axios.get(this.ip + apiUrl, { params: query, timeout: 5000 }).then(res => this.handelResponse(res)).then(result => this.handleError(result));
    }
    Post(apiUrl: string, body: any, query?: any, option?: AxiosRequestConfig) {
        return axios.post(this.ip + apiUrl, body, { params: query, timeout: 5000 }).then(res => this.handelResponse(res)).then(result => this.handleError(result));
    }
    Put(apiUrl: string, body?: any, query?: any, option?: AxiosRequestConfig) {
        return axios.put(this.ip + apiUrl, body, { timeout: 5000, params: query }).then(res => this.handelResponse(res)).then(result => this.handleError(result));
    }
    Delete(apiUrl: string, query?: any, option?: AxiosRequestConfig) {
        return axios.delete(this.ip + apiUrl, { params: query, timeout: 5000 }).then(res => this.handelResponse(res)).then(result => this.handleError(result));
    }
    /**
     * Http 状态码 参考文档
     *  http://www.runoob.com/http/http-status-codes.html
     * 
     */
    handelResponse(res: AxiosResponse): { ok: boolean, data: any } {
        switch (res.status) {
            case 200:
                return { ok: true, data: res.data};
            case 302:
                return { ok: false, data: `重定向到` + res.data }
            case 400:
                // 如果服务器返回错误信息,就显示服务器的信息,否则显示请求错误
                return { ok: false, data: res.data ? res.data : '请求错误' }
            case 401:
                return { ok: false, data: res.data ? res.data : '请求要求用户的身份认证' }
            case 404:
                return { ok: false, data: res.data ? res.data : '不存在的资源' }
            case 413:
                return { ok: false, data: res.data ? res.data : '上传的资源体积过大' }
            case 500:
                return { ok: false, data: res.data ? res.data : '服务器内部错误，无法完成请求' }
            case 501:
                return { ok: false, data: res.data ? res.data : '服务器不支持请求的功能，无法完成请求' }
            default:
                return { ok: false, data: res.data ? res.data : '未分类的错误,status' + res.status }
        }
    }
    handleError(result: { ok: boolean, data: any }) {
        if (result.ok) {
            return result.data
        } else {
            this.showError(result.data)
            return false;
        }
    }
    /**
     * 显示错误的方法
     * 可以自定义,结合 weui, framework7 ,onsenui, ionic 等模态框
     *  
     * 在线上环境下打印错误,或者ajax发送错误日志
     * 
      */
    showError(msg: string) {
        if (this.isDevelopment) {
            // alert(msg)
            console.log(msg);
        } else {
            console.log(msg);
        }
    }
}




// import axios from 'axios';
// // import config from '@src/config';

// class LocalAxios {
// 	public axios: any;
// 	constructor() {
// 		this.axios = axios.create({
// 			// baseURL: 'https://api.xiazizhou.cn/',
// 			baseURL: 'http://localhost:54321/',
// 			timeout: 5000,
// 			withCredentials: true,
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Cache-Control': 'no-cache'
// 			}
// 		});
// 		this.onRequest();
// 		this.onResponse();
// 	}
// 	private onRequest() {
// 		this.axios.interceptors.request.use((config: any) => {
// 			config.startTime = new Date().getTime();
// 			console.log('拦截器生效', config);
// 			return config;
// 		});
// 	}
// 	private onResponse() {
// 		this.axios.interceptors.response.use(
// 			(response: any) => {
// 				console.log(
// 					`路由${
// 						response.config.url
// 					}请求成功，耗时${new Date().getTime() -
// 						response.config.startTime}ms`
// 				);
// 				return response.data;
// 			},
// 			(err: any) => {
// 				console.log(`错误信息 ${err.message}`);
// 				err.data = {
// 					code: -10000,
// 					data: '网络出错'
// 				};
// 				console.log(
// 					`路由${err.config.url}请求失败，耗时${new Date().getTime() -
// 						err.config.startTime}ms`
// 				);
// 				return Promise.resolve(err.data);
// 			}
// 		);
// 	}
// }

// export default LocalAxios;