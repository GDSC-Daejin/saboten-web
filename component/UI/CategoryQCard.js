import styled from "styled-components";

const CategoryQCard = (props) => {
    return (
        <>
            <StyledCard>{props.children}</StyledCard>
        </>
    )
}
export default CategoryQCard;


const StyledCard = styled.div`
  border-radius: 10px;
  border: 2px solid var(--saboten-gray-500);
  padding: 25px;
  width:100%;
  margin: 10px auto;
  text-align: center;
  @media (max-width: 600px) {
    margin-bottom: 10px;
    padding: 20px;
  }
`
