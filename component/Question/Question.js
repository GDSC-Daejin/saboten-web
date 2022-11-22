import QCard from "../UI/QCard";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styled from "styled-components";
import CategoryQCard from "../UI/CategoryQCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
// const CategotyQCard = styled(QCard)`
//   border: 2px solid var(--saboten-gray-200);
// `

const Questtion = (props) => {
    return (
        <Card>
            <h3>{props.question.title}</h3>
            <CategoryQCard>{props.question.a}</CategoryQCard>
            <CategoryQCard>{props.question.b}</CategoryQCard>
            <Container>
            </Container>
        </Card>
    )
}
export default Questtion
