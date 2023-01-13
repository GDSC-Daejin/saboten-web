import Card from "../UI/Card";
import styled from "styled-components";
import QCard from "../UI/QCard";
import Button from "../UI/Button";
import Post from "./Post";

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding-left: 0;
  width: 600px;
  white-space: nowrap;
  overflow: scroll;
  @media (max-width: 600px) {
    width: 320px;
  }
`

const Li = styled.li`
  display: inline-block;
  width: 100%;
  margin-right: 20px;
`
const PostList = (props) => {
    return (
            <Ul>
                {props.onPosts?.map((post, i)=>(
                    <Li key={i}>
                        <Post post={post}/>
                    </Li>

                ))}
            </Ul>
    )
}
export default PostList
