import styled from "styled-components";

const Icon = styled.div`
  background-color: var(--saboten-gray-500);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 3px;
`
const Text = styled.p`
  font-size: 18px;
  color: var(--saboten-white);
  margin: 0;
`
const CircleIcon = (props) => {
    return (
        <Icon>
            <Text>{props.text}</Text>
        </Icon>
    )
}
export default CircleIcon
