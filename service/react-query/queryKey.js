export const postQueryKey = {
    Totalpost: 'Totalpost',
    categoryPost: 'categoryPost',
    debatePost: 'debatePost'
}
export const categoryQueryKey = {
    category: 'category',
}
//따로 queryKey 상수파일을 만든 이유는?
//모든 호출에서 쿼리 키가 일관적이도록 처리하기 위해
//이렇게 하면 프로퍼티 입력시 문자열에서 오타를 내도 컴파일러와 랜더가 알려줌
