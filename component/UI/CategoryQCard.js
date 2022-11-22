import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 10px;
  border: 2px solid var(--saboten-gray-500);
  padding: 25px;
  width:550px;
  margin-bottom: 25px;
  @media (max-width: 600px) {
    width:250px;
    margin-bottom: 20px;
    padding: 20px;
  }
`

const CategoryQCard = (props) => {
    return (
        <>
            <StyledCard>{props.children}</StyledCard>
        </>
    )
}
export default CategoryQCard;
