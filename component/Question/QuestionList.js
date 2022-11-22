import Card from "../UI/Card";
import styled from "styled-components";
import QCard from "../UI/QCard";
import Button from "../UI/Button";
import Question from "./Question";

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding-left: 0;
`

const Li = styled.li`
  //display: inline-block;
`

const QuestionList = (props) => {
    return (
            <Ul>
                {props.onQuestions.map((question)=>(
                    <Li key={question.id}>
                        <Question question={question}/>
                    </Li>

                ))}
            </Ul>
    )
}
export default QuestionList
