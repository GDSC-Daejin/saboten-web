import {Flex} from "../../../styles/styledComponentModule";
import styled from "styled-components";
const CategorySlider = () => {
    return (
       <>
       <Slider>
           <img src="/asset/image/category/category_work.png" alt="일카테고리"/>
           <img src="/asset/image/category/category_daily.jpg" alt="데일리카테고리"/>
           <img src="/asset/image/category/category_work.png" alt="일카테고리"/>
       </Slider>
       </>
    )
}
export default CategorySlider

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
