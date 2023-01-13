import styled from "styled-components";

const HomeFilter = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <Select  onChange={handleChange}>
            <option key="" value="">연애 중에서 일주일간</option>
            <option key="4" value="4">인기순 중에서 일주일간</option>
            <option key="3" value="3">너슨순 중에서 이주일간</option>
            <option key="2" value="2">오슨순 중에서 삼일간</option>
        </Select>
    )
}
export default HomeFilter

const Select = styled.select`
  border-radius: 5px;
  border: solid 2px var(--saboten-green-500);
  color: var(--saboten-green-500);
  background-color: transparent;
  font-size: 15px;
  && span{
    font-weight: bold;
  }
  //margin: 5px 0;
  //cursor: pointer;
  //height: 30px;
  //white-space:nowrap;
  //border: none;
  //font-size: 20px;
  //font-weight: bold;
  //color: var(--saboten-gray-700);
  ////background-color:  #F5F5F5;
  //padding: 5px 10px;
  //border-radius: 10px;
  //&:focus{
  //  border: none;
  //}
`
