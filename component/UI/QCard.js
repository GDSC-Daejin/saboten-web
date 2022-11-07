import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 10px;
  border: 2px solid #00C064;
  padding: 25px;
  width:550px;
  margin-bottom: 25px;
  @media (max-width: 600px) {
    width:250px;
    margin-bottom: 20px;
    padding: 20px;
  }
`

const QCard = (props) => {
    return <StyledCard>{props.children}</StyledCard>
}
export default QCard;
