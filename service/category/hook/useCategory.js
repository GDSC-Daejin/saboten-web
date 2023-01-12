import {api} from "../../apiClient";
import {useQuery} from "react-query";
import {categoryQueryKey, queryKey} from "../../react-query/queryKey";

//get /category-----------------------------------------------------------------
async function getCategoryData() {
    const {data} = await api.get('/category');
    return data;
}
export const useCategory = () => {
    const fallback = [];
    const {data = fallback} = useQuery(categoryQueryKey.category, () => getCategoryData(), {
        onError: (error) => {
            const title = error instanceof Error ? error.message
                : '서버에 연결 중 오류 발생🥲';
            return alert(title);
        }
    });
    return data;
}
