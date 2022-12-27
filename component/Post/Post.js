import QCard from "../UI/QCard";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styled from "styled-components";
import Profile from "../UI/Profile";

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

const Post = (props) => {
    return (
        <Card>
            <Profile/>
            <h3>{props.post.title}</h3>
            <QCard>{props.post.a}</QCard>
            <QCard>{props.post.b}</QCard>
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
