import Card from "../UI/Card";
import styled from "styled-components";
import CategoryQCard from "../UI/CategoryQCard";
import Profile from "../UI/Profile";
import Bookmark from "../Post/Bookmark";
import {Flex} from "../../styles/styledComponentModule";

const Question = (props) => {
    return (
        <Card>
            <Flex>
                <Profile/>
                <Bookmark/>
            </Flex>
            <h3>{props.question.title}</h3>
            <CategoryQCard>{props.question.a}</CategoryQCard>
            <CategoryQCard>{props.question.b}</CategoryQCard>
            <Container>
            </Container>
        </Card>
    )
}
export default Question

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
