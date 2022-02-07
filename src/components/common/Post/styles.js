import styled from "styled-components";

export const Post = styled.div`
  display: flex;
  justify-content: center;
  main {
    margin-top: 10px;
    width: 900px;
    height: 900px;
    padding: 21px 63px;
    box-shadow: 0px 0px 10px 0px #e8e8e8;
  }
`;

export const Top = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  span {
    display: inline-flex;
  }
  span > img {
    width: 40px;
    height: 40px;
    background-color: #e8e8e8;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 20px;
  }
`;

export const Class = styled.div`
  font-size: 18px;
  color: #242424;
  margin-left: 9px;
`;

export const Time = styled.div`
  font-size: 13px;
  color: #242424;
  margin-left: 9px;
`;
