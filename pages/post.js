import Seo from "../component/common/Seo";
import styled from "styled-components";
import GrayCard from "../component/UI/GrayCard";
import {Flex} from "../styles/styledComponentModule";
import CircleIcon from "../component/UI/CircleIcon";
import {useState} from "react";
import {useCategory} from "../service/category/hook/useCategory";
import {postPostData} from "../service/post/postService";
import Modal from "../component/Post/Modal";
import {Loading} from "../component/common/Loading";
import {useRouter} from "next/router";

const Post = () => {
    const categoryies = useCategory();
    const router = useRouter();
    const [filter, setFilter] = useState(null);
    const [submit, setSubmit] = useState(true);
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
        console.log(i);
        let copiedContent = content;
        copiedContent.categoryIds=[i];
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
            setSubmit(false);
            postPostData(createdPost).then(r => console.log(r));
            setSubmit(false);
            router.back();
        }
    }
    if(submit === false) return <Loading title="고민거리를 등록 중이에요!"
                                         msg="업로드된 게시글을 선인장에서 확인하세요."/>
    return (
        <Main>
            <Seo title='Post'/>
            <Modal/>
            <Container>
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
                <Text>카테고리 선택</Text>
                <Category>
                    {categoryies.data?.map((category, i)=>{
                        return filter===i+1 ? <CurrCategoryBtn key={i+1}>{category.name}</CurrCategoryBtn>
                            :  <CategoryBtn onClick={()=>categoryHandler(i+1)} key={i+1}>{category.name}</CategoryBtn>
                    })}
                </Category>
            </Container>
            <SubmitBtn onClick={submitHandler}>등록하기</SubmitBtn>
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
  margin: 0 auto 0 auto;
  padding-bottom: 30px;
  @media (max-width: 380px) {
    margin-top: 0;
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
  font-size: 20px;
  font-weight: bold;
  border: none;
  padding: 20px;
  width: 100%;
  margin: 15px auto auto 0;
  position: fixed;
  bottom: 0;
  max-width: 768px;
  &:active{
    background-color: var(--saboten-green-700);
  }
`
const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 17px;
  margin-top: 15px;
  background-color: var(--saboten-background);
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
  background-color: var(--saboten-background);
  &::placeholder{
    color: var(--saboten-gray-500);
    text-align: center;
  }
`
