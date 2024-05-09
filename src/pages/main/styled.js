import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  height:300px;
  font-size:30px;
`;
export const StyledButton = styled.div`
  background-color: #c9c9c9;
  padding: 10px 20px;
  cursor:pointer;
  &:hover {
    background-color: blue;
  }
`;
