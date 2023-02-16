import {Flex} from "../../../styles/styledComponentModule";
import styled from "styled-components";

const CategorySlider = () => {
    return (
        <>
            <Image src="/asset/image/category/category_work.png" alt="일카테고리"/>
            <Image src="/asset/image/category/category_daily.jpg" alt="데일리카테고리"/>
            <Image src="/asset/image/category/category_work.png" alt="일카테고리"/>
        </>

    )
}
export default CategorySlider
const Image = styled.div`
  width: 100px;
  background-color: black;
`
const Slider = styled(Flex)`
    position: relative;
    overflow: auto;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  @media (max-width: 600px) {
    width: 300px;
  }
`
