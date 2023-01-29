import Seo from "../component/common/Seo";
import styled from "styled-components";
import Card from "../component/UI/Card";
import GrayCard from "../component/UI/GrayCard";
import {Flex} from "../styles/styledComponentModule";
import Profile from "../component/UI/Profile";
import CircleIcon from "../component/UI/CircleIcon";
import {useRef, useState} from "react";
import {useCategory} from "../service/category/hook/useCategory";
import {getPostData} from "../service/post/postService";

const Post = () => {
    const [filter, setFilter] = useState(null);
    const categoryies = useCategory();
    const [content, setContent] = useState({
        "categoryIds": [
            null
        ],
        "text": null,
    })
    const [vote, setVote] = useState({
        "voteTopics": [
            {
                "color": "BLACK",
                "topic": null
            },
            {
                "color": "BLACK",
                "topic": null
            }
        ]
    })
    const getValue = e => {
        const { name, value } = e.target;
        setContent({
            ...content,
            [name]: value
        })
    };
    const getVoteValue = e => {
        const {name, value} = e.target;
        let copiedVote = vote;
        copiedVote.voteTopics[name].topic = value;
        setVote(copiedVote);
    }
    const categoryHandler = (i) => {
        setFilter(i);
        let copiedContent = content;
        copiedContent.categoryIds=i;
        setContent(copiedContent);
    }
    const submitHandler = () => {
        if(filter===null) alert("카테고리를 선택해주세요");
        else if(content.text===null) alert("제목을 입력해주세요");
        else if(vote.voteTopics[0].topic===null) alert("A선택지를 입력해주세요");
        else if(vote.voteTopics[1].topic===null) alert("B선택지를 입력해주세요");
        else{
            let createdPost = content;
            Object.assign(createdPost,vote);
            // getPostData(createdPost);
            // getPostData(createdPost).then(r => console.log(r));
            console.log(createdPost);
        }
    }
    return (
        <Main>
            <Seo title='Post'/>
            <Container>
                <Text>카테고리를 선택하세요</Text>
                <Category>
                    {categoryies.data?.map((category, i)=>{
                        return filter===i ? <CurrCategoryBtn>{category.name}</CurrCategoryBtn>
                            :  <CategoryBtn onClick={()=>categoryHandler(i)}>{category.name}</CategoryBtn>
                    })}
                </Category>
                <Card>
                    <Profile author={{nickname: "임시이름"}}/>
                    <Input type='text' placeholder='제목을 입력하세요'
                           onChange={getValue} name='text'/>
                    <GrayCard>
                        <CircleIcon text="A"/>
                        <Textarea placeholder="A 선택지를 입력하세요" onChange={getVoteValue} name="0"></Textarea>
                    </GrayCard>
                    <GrayCard>
                        <CircleIcon text="B"/>
                        <Textarea placeholder="B 선택지를 입력하세요" onChange={getVoteValue} name="1"></Textarea>
                    </GrayCard>
                </Card>
                <SubmitBtn onClick={submitHandler}>고민올리기</SubmitBtn>
            </Container>
        </Main>
    );
};
export default Post;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;
const Container = styled.div`
  width: 90%;
  margin-top: 20px;
  padding-bottom: 30px;
  @media (max-width: 380px) {
    margin-top: 150px;
  }
`;
const Text = styled.p`
  font-size: 17px;
  color: var(--saboten-gray-500);
`;
const Category = styled(Flex)`
  overflow: auto;
  width: 100%;
  margin: 0 5px;
`;
const CurrCategoryBtn = styled.button`
  background-color: var(--saboten-green-500);
  width: 74px;
  height: 30px;
  color: var(--saboten-white);
  font-weight: bold;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  white-space : nowrap;
  margin: 0 5px;
  padding: 0 10px;
`
const CategoryBtn = styled(CurrCategoryBtn)`
  background-color: transparent;
  color: var(--saboten-gray-600);
  border: 1px solid var(--saboten-gray-600);
  font-weight: normal;
  &:active{
    background-color: var(--saboten-gray-300);
    color: black;
  }
`
const SubmitBtn = styled.button`
  background-color: var(--saboten-green-500);
  color: var(--saboten-white);
  font-size: 17px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  width: 100%;
  &:active{
    background-color: var(--saboten-green-700);
  }
`
const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 17px;
  margin-top: 15px;
  &::placeholder{
    color: var(--saboten-gray-500);
  }
`
const Textarea = styled.textarea`
  border: none;
  font-size: 17px;
  width: 100%;
  margin-top: 15px;
  text-align: center;
  &::placeholder{
    color: var(--saboten-gray-500);
    text-align: center;
  }
`
