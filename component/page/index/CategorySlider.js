import {Flex} from "../../../styles/styledComponentModule";
import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const CategorySlider = () => {
    return (
        <Carousel
            itemWidth={200}
            plugins={[
                'centered',
                'infinite',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 3,
                    },
                },
            ]}
        >
            <img src="/asset/image/category/Category_Work.png" alt="일카테고리" />
            <img src="/asset/image/category/Category_Social.png" alt="사회카테고리" />
            <img src="/asset/image/category/Category_Shopping.png" alt="쇼핑카테고리" />
            <img src="/asset/image/category/Category_Money.png" alt="돈카테고리" />
            <img src="/asset/image/category/Category_Mbti.png" alt="mbti카테고리" />
            <img src="/asset/image/category/Category_Love.png" alt="사랑카테고리" />
            <img src="/asset/image/category/Category_Food.png" alt="음식카테고리" />
            <img src="/asset/image/category/Category_Daily.png" alt="데일리카테고리" />
            <img src="/asset/image/category/Category_Etc.png" alt="기타카테고리" />
            <img src="/asset/image/category/Category_All.png" alt="전체카테고리" />
        </Carousel>
    )
}
export default CategorySlider
const Image = styled.img`
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
