import styled from "styled-components";

const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px var(--box-dark-shadow);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  margin: 20px auto;
`

const Card = (props) => {
    return <StyledCard>{props.children}</StyledCard>
}
export default Card;
