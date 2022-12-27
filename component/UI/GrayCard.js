import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 10px;
  border: 2px solid var(--saboten-gray-500);
  padding: 25px;
  width:90%;
  height: 33%;
  margin: 25px auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: auto;
  @media (max-width: 600px) {
    width:250px;
    margin: 15px auto;
    padding: 20px;
  }
`

const GrayCard = (props) => {
    return <StyledCard>{props.children}</StyledCard>
}
export default GrayCard;
