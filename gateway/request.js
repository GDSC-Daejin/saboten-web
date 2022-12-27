// import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
//
// import { APIResponse, ResponseStatus } from './response'
// import { HTTPRequestParams, HTTPRequestParamsBodyless, IHTTPRequester } from './types'
//
// export class GatewayRequester implements IHTTPRequester {
//     public async delete<T>(path: string, params?: HTTPRequestParamsBodyless): Promise<APIResponse<T, string>> {
//         try {
//             const response = await this.axios.request({
//                 ...GatewayRequester.axiosifyParams(params),
//                 method: 'delete',
//                 url: path,
//             })
//             return new APIResponse<T, string>(response.data, response.status, ResponseStatus.SUCCESS, response.headers)
//         } catch (error) {
//             return GatewayRequester.handleError(error)
//         }
//     }
//
//     public async get<T>(path: string, params?: HTTPRequestParamsBodyless): Promise<APIResponse<T, string>> {
//         try {
//             const response = await this.axios.request({
//                 ...GatewayRequester.axiosifyParams(params),
//                 method: 'get',
//                 url: path,
//             })
//             return new APIResponse<T, string>(response.data, response.status, ResponseStatus.SUCCESS, response.headers)
//         } catch (error) {
//             return GatewayRequester.handleError(error)
//         }
//     }
//
//     public async patch<T>(path: string, params?: HTTPRequestParams): Promise<APIResponse<T, string>> {
//         try {
//             const response = await this.axios.request({
//                 ...GatewayRequester.axiosifyParams(params),
//                 method: 'patch',
//                 url: path,
//             })
//             return new APIResponse<T, string>(response.data, response.status, ResponseStatus.SUCCESS, response.headers)
//         } catch (error) {
//             return GatewayRequester.handleError(error)
//         }
//     }
//
//     public async post<T>(path: string, params?: HTTPRequestParams): Promise<APIResponse<T, string>> {
//         try {
//             const response = await this.axios.request({
//                 ...GatewayRequester.axiosifyParams(params),
//                 method: 'post',
//                 url: path,
//             })
//             return new APIResponse<T, string>(response.data, response.status, ResponseStatus.SUCCESS, response.headers)
//         } catch (error) {
//             return GatewayRequester.handleError(error)
//         }
//     }
//
//     public async put<T>(path: string, params?: HTTPRequestParams): Promise<APIResponse<T, string>> {
//         try {
//             const response = await this.axios.request({
//                 ...GatewayRequester.axiosifyParams(params),
//                 method: 'put',
//                 url: path,
//             })
//             return new APIResponse<T, string>(response.data, response.status, ResponseStatus.SUCCESS, response.headers)
//         } catch (error) {
//             return GatewayRequester.handleError(error)
//         }
//     }
//
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     private static axiosifyParams(params?: HTTPRequestParams<any, any, any>): AxiosRequestConfig | undefined {
//         if (!params) return
//
//         const result: AxiosRequestConfig = {}
//
//         if (params.body) result.data = params.body
//         if (params.headers) result.headers = params.headers
//         if (params.query) result.params = params.query
//
//         return result
//     }
//
//     private static handleError<T>(e: unknown): APIResponse<T, string> {
//         if (!('isAxiosError' in (e as AxiosError))) {
//             return new APIResponse<T, string>(null, null, ResponseStatus.CLIENT_ERROR)
//         }
//
//         const error = e as AxiosError
//         if (!error.response) {
//             return new APIResponse<T, string>(null, null, ResponseStatus.CLIENT_ERROR)
//         }
//
//         return new APIResponse<T, string>(
//             error.response.data as string,
//             error.response.status,
//             ResponseStatus.FAILURE,
//             error.response.headers,
//     )
//     }
//
//     /**
//      * @example
//      * new GatewayRequester(process.env.MOBILE_URL, '/shop') // '{process.env.MOBILE_URL}/shop'
//      */
//     constructor(host: string, basePath = '') {
//         this.axios = axios.create({
//             baseURL: `${host}/${basePath}`,
//             timeout: 10000,
//         })
//     }
//
//     private readonly axios: AxiosInstance
// }
