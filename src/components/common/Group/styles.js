import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 38px;
  margin: 38px 0px;
  div > div {
    width: 162px;
    height: 162px;
    border-radius: 100px;
    background-color: #e8e8e8;
  }
  div > img {
    width: 100%;
    height: 162px;
    border-radius: 100px;
    object-fit: cover;
  }
  div {
    display: inline-flex;
    width: 906px;
    justify-content: space-between;
  }
  img {
    height: 16px;
    width: 16px;
  }
  main {
    display: flex;
    align-items: center;
    width: 1020px;
    justify-content: space-between;
  }
`;
