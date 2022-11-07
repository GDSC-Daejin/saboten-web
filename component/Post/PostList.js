import Card from "../UI/Card";
import styled from "styled-components";
import QCard from "../UI/QCard";
import Button from "../UI/Button";
import Post from "./Post";

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding-left: 0;
`

const Li = styled.li`
  //display: inline-block;
`

const PostList = (props) => {
    return (
            <Ul>
                {props.onPosts.map((post)=>(
                    <Li key={post.id}>
                        <Post post={post}/>
                    </Li>

                ))}
            </Ul>
    )
}
export default PostList
