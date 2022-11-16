import PostService from "../PostService";

// 실질적으로 api 당겨오는 로직을 처리하는 훅
export async function useGetAllPosts() {
    console.log('우리꺼');
    const res = await PostService.getALLPostData();
    //res가 status 200/ok 인지 확인하기!
    console.log(res);
    // return res.data;
}

export async function useTmpPosts() {
    console.log('Tmp');
    const res = await PostService.getTmpData();
    console.log(res);
}
