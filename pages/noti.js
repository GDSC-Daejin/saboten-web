import Seo from "../component/common/Seo";
import styled from "styled-components";
import Link from "next/link";
import {MainSize} from "../styles/styledComponentModule";
import Notification from "../component/noti/notification";


const Noti = () => {
    return (
        <Main>
            <Seo title='Post'/>
                <Notify>
                    <Text>최근열람</Text>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                    <Notification/>
                </Notify>
            <Hr/>
                <Notify>
                    <Text>이번 주 열람</Text>
                    <Notification/>
                    <Notification/>
                </Notify>
        </Main>
    );
};
export default Noti;

const Main = styled(MainSize)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 100%;
  overflow: auto;
  background-color: var(--saboten-background);
  padding-bottom: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Text = styled.p`
  margin: 30px 15px 15px 15px;
  color: var(--saboten-gray-600);
  font-size: 19px;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 13px;
    margin: 15px 15px 15px 15px;
  }
`
const Notify = styled.div`
  margin-bottom: 30px;
`
const Hr = styled.hr`
  width: 100%;
  border: 1px solid var(--saboten-gray-300);
`
