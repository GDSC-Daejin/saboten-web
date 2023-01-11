import { useQuery, UseQueryOptions } from "react-query";
import {queryKey} from "../../react-query/queryKey";
import {api} from "../../apiClient";

export async function getPost() {
    const {data} = await api.get('/post');
    console.log(data);
    return data;
}

export const usePost = () => {
    const fallback = []; //데이터가 아직 안가져왔을때 대신 반환
    const {data = fallback} = useQuery(queryKey.Totalpost,getPost,{
        onError: (error) => {
            const title = error instanceof Error ? error.message
                : '서버에 연결 중 오류 발생🥲';
            return alert(title);
        }});
    return data;
}
