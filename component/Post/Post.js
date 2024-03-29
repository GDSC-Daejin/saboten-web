import QCard from "../UI/QCard";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styled from "styled-components";
import Profile from "../UI/Profile";
import {Flex} from "../../styles/styledComponentModule";
import Bookmark from "./Bookmark";

const Post = (props) => {
    return (
        <Card>
            <Flex>
                <Profile author={props.post.author} date={props.post.updatedAt}/>
                <Bookmark mark={true}/>
            </Flex>
            <h3>{props.post.text}</h3>
            <QCard>{props.post.votes[0].topic}</QCard>
            <QCard>{props.post.votes[1].topic}</QCard>
            {/*<QCard selected>{props.post.b}</QCard>*/}
            <Container>
            <Tags>
                <Button>음식</Button>
                <Button>취향</Button>
            </Tags>
            <Buttons>
                <Heart src="/asset/image/icons/gray_heart.svg" alt="좋아요"/>
                <Comment src="/asset/image/icons/Comment.svg" alt="댓글"/>
            </Buttons>
            </Container>
        </Card>
    )
}
export default Post

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Tags = styled.div`
  //display: flex;
  //align-items: flex-start;
`
const Buttons = styled.div`
  //display: flex;
  //justify-content: flex-end;
`
const Heart = styled.img`
  margin: 0 10px;
`
const Comment = styled.img`
  margin: 0 10px;
`
