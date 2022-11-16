import {PostInstance, TmpInstance} from "./APIInstance";

class PostService{
    //모든 선물 불러오기
    getALLPostData = () => {
        // console.log( PostInstance.get(`/api/v1/post`));
        // return PostInstance.get(`/posts`);
        return PostInstance.get(`/api/v1/post`);
    };
    getTmpData = () => {
        return TmpInstance.get(`/posts`);
    };

    //TODO: 필요한 API들 다 적어보기

}
export default new PostService();
