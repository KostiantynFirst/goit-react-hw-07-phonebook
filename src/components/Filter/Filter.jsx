import { FilterContainer, FilterLabel, FilterInput } from "./Filter.styled";

import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlices";

export const Filter = () => {
   
  const filterValue = useSelector(state => state.filter) 
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value))
  }

  return (
      <FilterContainer>
        <FilterLabel>Find contacts by name:</FilterLabel>
        <FilterInput
          type="text"
          value={filterValue}
          onChange={onChange}
          placeholder="Enter name"
        />
      </FilterContainer>
    );
  };