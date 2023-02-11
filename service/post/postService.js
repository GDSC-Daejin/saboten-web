import {authApi} from "../apiClient";

export async function postPostData(newPost){
    return authApi.post('/post', newPost);
}
