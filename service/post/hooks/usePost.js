import { useQuery } from "react-query";
import {postQueryKey, queryKey} from "../../react-query/queryKey";
import {api} from "../../apiClient";

//get /post-----------------------------------------------------------------
async function getPostData() {
    const {data} = await api.get('/post');
    return data;
}

export const usePost = () => {
    const fallback = ['아직']; //데이터가 아직 안가져왔을때 대신 반환
    const {data = fallback} = useQuery(postQueryKey.Totalpost, ()=> getPostData(),{
        onError: (error) => {
            const title = error instanceof Error ? error.message
                : '서버에 연결 중 오류 발생🥲';
            return alert(title);
        }, onSuccess: (data)=>data});
    return data;
}

//get /Category별 post-----------------------------------------------------------------
async function getCategoryPostData(id) {
    const {data} = await api.get('/post',{params:{categoryId : id}});
    return data;
}

export const useCategoryPost = (id) => {
    const fallback = []; //데이터가 아직 안가져왔을때 대신 반환
    const {data = fallback} = useQuery(postQueryKey.categoryPost, ()=> getCategoryPostData(id),{
        onError: (error) => {
            const title = error instanceof Error ? error.message
                : '서버에 연결 중 오류 발생🥲';
            return alert(title);
        }});
    return data;
}
