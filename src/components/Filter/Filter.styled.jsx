import styled from "styled-components";

export const FilterContainer = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-left: 5px;
  }
  
`;

export const FilterLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const FilterBtn = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #008
`;