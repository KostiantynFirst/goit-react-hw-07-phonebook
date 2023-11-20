import { FilterContainer, FilterLabel, FilterInput } from "./Filter.styled";

import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlices";
import { selectFilterContact } from "redux/selectors";

export const Filter = () => {
   
  const filterValue = useSelector(selectFilterContact) 
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