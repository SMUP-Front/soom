import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #242424;
  font-size: 64px;
  font-weight: bold;
  margin-top: 94px;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 26.56%;
`;

export const ProfileImage = styled.div`
  margin-top: 49px;
  img {
    width: 100%;
  }
`;

export const BannerImage = styled.div`
  margin-top: 28px;
  img {
    width: 100%;
  }
`;

export const GroupProperty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 123px;
  margin-top: 35px;
  button {
    border: none;
    background-color: #f0f0f0;
    height: 53px;
    border-radius: 3px;
    font-size: 16px;
    color: #242424;
    cursor: pointer;
    outline: none;
  }
`;

export const Property = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 140px;
  }
`;

export const Branch = styled.div`
  margin-top: 17px;
  width: 79.6%;
  display: flex;
  justify-content: space-between;
  button {
    width: 180px;
  }
`;

export const GroupName = styled.div`
  margin-top: 34px;
  width: 100%;
  input {
    width: 91.2%;
    height: 53px;
    border: none;
    outline: none;
    background-color: #f0f0f0;
    font-size: 16px;
    padding: 0px 23px 0px 23px;
    border-radius: 3px;
  }
  input::placeholder {
    color: #828282;
  }
`;

export const GroupInformation = styled.div`
  margin-top: 10px;
  width: 100%;
  textarea {
    width: 91.2%;
    resize: none;
    height: 195px;
    border: none;
    outline: none;
    background: #f0f0f0;
    padding: 15px 23px 15px 23px;
    font-size: 16px;
    border-radius: 3px;
  }
  textarea::placeholder {
    color: #828282;
  }
`;

export const Create = styled.div`
  width: 100%;
  height: 67px;
  margin-top: 44px;
  margin-bottom: 202px;
  button {
    width: 100%;
    height: 100%;
    color: white;
    background-color: #a460fc;
    border: none;
    font-size: 24px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
  }
`;

export const Word = styled.div`
  margin-right: 89px;
  margin-left: -215.6px;
  font-size: 24px;
  font-weight: bold;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  hr {
    position: absolute;
    left: 33%;
    top: 329px;
    border-left: 1px solid #dabcff;
    height: 837px;
  }
`;

export const WordProfile = styled.div`
  margin-top: 93px;
`;

export const WordBanner = styled.div`
  margin-top: 144px;
`;

export const WordProperty = styled.div`
  margin-top: 213px;
`;

export const WordName = styled.div`
  margin-top: 123px;
`;

export const WordExplain = styled.div`
  margin-top: 21px;
`;
