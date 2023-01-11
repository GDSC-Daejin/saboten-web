import {QueryClient} from "react-query";
export const queryClient = new QueryClient();

//따로 queryClient 파일로 분리한 이유는?
//독자적인 에러 핸들러를 확보해 에러 핸들러 및 기타 추가할 초기값들이
//이 독립적인 파일에서 있게해서
//실제로 QueryClient를 사용하게 될 app 파일을 오염시키지 않도록 하기 위함
