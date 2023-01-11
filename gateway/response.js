// import { Nullable } from ‘@lib/utils’
// /**
//  * API 응답 상태.
//  */
// export enum ResponseStatus {
//     /** 성공. */
//     SUCCESS,
//     /** 정상적으로 실패. */
//     FAILURE,
//     /** 비정상적으로 실패. */
//     SERVER_ERROR,
//     /** 요청 실패. */
//     CLIENT_ERROR,
// }
// /**
//  * API 응답 래퍼 클래스.
//  *
//  * 응답 상태--성공/실패/서버 오류/클라이언트 오류--를 구분해서 제공한다.
//  * @template Ok 성공 응답 타입.
//  * @template Err 실패 응답 타입. 기본값 `unknown`.
//  */
// export class APIResponse<Ok, Err = string> {
//     /**
//      * 성공일 경우 `onSuccess`, 실패일 경우 `onError`를 각각 `Data`와 `Error`로 호출한다.
//      */
//     public fork<E, A>(
//         onError: (err: Err, statusCode: number, status: ResponseStatus) => E,
//         onSuccess: (data: Ok) => A,
//     ): E | A {
//         if (this.Success) {
//             return onSuccess(this.Data)
//         } else {
//             return onError(this.Error!, this.StatusCode || 500, this.Status)
//         }
//     }
//     /**
//      * 성공일 경우 데이터에 맵핑 함수를 적용한 새로운 `APIResponse`를 반환한다.
//      *
//      * {@link Array.map}
//      */
//     public map<R>(f: (a: Ok) => R): APIResponse<R, Err> {
//         if (this.Success) {
//             return new APIResponse<R, Err>(f(this.Data), this.StatusCode, this.Status, this.Headers)
//         }
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         return this as any
//     }
//     /**
//      * 성공 가정: 데이터를 `T`로 취급해서 반환함.
//      *
//      * @example
//      * declare const resp: APIResponse<number>
//      * if (resp.status === ResponseStatus.SUCCESS) {
//      *   console.log(resp.Data * 2)
//      * }
//      */
//     public get Data(): Ok {
//         return this.data as Ok
//     }
//     /**
//      * 실패 가정: 데이터를 `E`로 취급해서 반환함.
//      *
//      * 서버/클라이언트 오류인 경우 데이터가 존재하지 않음.
//      *
//      * @example
//      * declare const resp: APIResponse<unknown>
//      * if (resp.status === ResponseStatus.SERVER_ERROR) {
//      *   console.log(resp.Error)
//      * }
//      */
//     public get Error(): Nullable<Err> {
//         return this.data as Nullable<Err>
//     }
//     public get Headers(): Record<string, string> {
//         return this.headers
//     }
//     /** 응답 종류: 성공/실패/서버 오류/클라이언트 오류. */
//     public get Status(): ResponseStatus {
//         return this.status
//     }
//     /** 성공 여부. */
//     public get Success(): boolean {
//         return this.status === ResponseStatus.SUCCESS
//     }
//     /**
//      * HTTP 상태 응답 코드.
//      *
//      * 클라이언트 오류인 경우 상태응답코드가 존재하지 않음.
//      */
//     public get StatusCode(): Nullable<number> {
//         return this.statusCode
//     }
//     /**
//      * @param data 성공 응답 또는 실패 응답. 오류 상황에서는 `null`.
//      * @param statusCode HTTP 상태 응답 코드.
//      * @param status `ResponseStatus` 열거형,
//      */
//     constructor(
//         data: Nullable<Ok | Err>,
//         statusCode: Nullable<number>,
//         status: ResponseStatus,
//         headers?: Record<string, string>,
//     ) {
//         this.data = data
//         this.headers = headers || {}
//         this.status = status
//         this.statusCode = statusCode
//     }
//     private readonly data: Nullable<Ok | Err>
//     private readonly headers: Record<string, string>
//     private readonly status: ResponseStatus
//     private readonly statusCode: Nullable<number>
// }
