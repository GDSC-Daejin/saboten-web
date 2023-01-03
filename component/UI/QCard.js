import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 10px;
  border: 3px solid var(--saboten-green-500);
  padding: 25px;
  width:550px;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  text-align: center;
  @media (max-width: 600px) {
    border: 2px solid var(--saboten-green-500);
    width:100%;
    margin-bottom: 10px;
    padding: 20px;
  }
`
const SelectedStyledCard = styled.div`
  border-radius: 10px;
  background-color: var(--saboten-green-600);
  padding: 25px;
  width:550px;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  text-align: center;
  color: white;
  @media (max-width: 600px) {
    width:100%;
    margin-bottom: 10px;
    padding: 20px;
  }
`
const QCard = (props) => {
    return <>
        {props.selected ?
            <SelectedStyledCard>{props.children}</SelectedStyledCard>:
            <StyledCard>{props.children}</StyledCard>}
        </>
}
export default QCard;
