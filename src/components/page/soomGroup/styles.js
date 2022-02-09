import styled from "styled-components";

export const Group = styled.div`
  hr {
    width: 676px;
    height: 1px;
    border: none;
    background-color: #242424;
    margin-bottom: 72px;
  }
`;

export const Top = styled.div`
  margin-top: 36px;
  margin-bottom: 49px;
  display: flex;
  justify-content: center;
  main {
    width: 595px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Club = styled.div`
  display: flex;
  justify-content: center;

  main {
    display: grid;
    grid-template-columns: repeat(5, 160px);
    grid-row-gap: 43px;
    grid-column-gap: 94px;
  }
`;

export const PageNation = styled.div`
  margin-top: 111px;
  display: flex;
  justify-content: center;
  margin-bottom: 99px;
  div {
    width: 54px;
    display: flex;
    justify-content: space-between;
  }
`;

export const AddButton = styled.div`
  position: absolute;
  right: 142px;
  top: 908px;
`;
