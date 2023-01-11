import styled from "styled-components";

const CategoryFilter = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <Select  onChange={handleChange}>
            <option key="" value="">최신순</option>
            <option key="4" value="4">인기순</option>
            <option key="3" value="3">무슨순</option>
            <option key="2" value="2">무슨순</option>
            <option key="1" value="1">무슨순</option>
            <option key="0" value="0">무슨순</option>
        </Select>
    )
}
export default CategoryFilter

const Select = styled.select`
  margin: 5px 0;
  cursor: pointer;
  height: 30px;
  white-space:nowrap;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: var(--saboten-gray-700);
  //background-color:  #F5F5F5;
  padding: 5px 10px;
  border-radius: 10px;
  &:focus{
    border: none;
  }
`
