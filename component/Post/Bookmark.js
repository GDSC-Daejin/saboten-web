import styled from "styled-components";

const Bookmark = (props) => {
    //TODO:북마크 onoff api 연결하기
    return (
        <div>
            {props.mark?
                <Img src="/asset/image/icons/bookmark_green.svg" alt="none_Bookmark"/>
            :<Img src="/asset/image/icons/bookmark_gray.svg" alt="none_Bookmark"/>}
        </div>
    )
}
export default Bookmark

const Img = styled.img`
  cursor: pointer;    
`
