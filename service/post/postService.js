import {authApi} from "../apiClient";

export async function getPostData(newPost){
    return authApi.post('/post', newPost);
}
