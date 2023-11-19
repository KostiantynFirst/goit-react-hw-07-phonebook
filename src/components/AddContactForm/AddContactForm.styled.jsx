import styled from "styled-components";

export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const PhonebookFormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PhonebookFormLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
  width: 100px;
`;

export const PhonebookFormInput = styled.input`
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const PhonebookBtn = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #006b8f;
  }
`;