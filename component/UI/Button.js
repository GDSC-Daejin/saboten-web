import styled from "styled-components";

const Button = (props) => {
    return (
        <StyledButton>{props.children}</StyledButton>
    )
}
export default Button;

const StyledButton = styled.button`
  width:55px;
  height: 25px;
  background-color: lightgrey;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 13px;
  margin: 0 5px;
`;
