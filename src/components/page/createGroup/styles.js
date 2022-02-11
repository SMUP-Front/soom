import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #242424;
  font-size: 64px;
  font-weight: bold;
  margin-top: 94px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProfileImage = styled.div`
  margin-top: 49px;
`;

export const BannerImage = styled.div`
  margin-top: 28px;
`;

export const GroupProperty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 526px;
  height: 123px;
  margin-top: 35px;
  button {
    border: none;
    background-color: #f0f0f0;
    width: 96px;
    height: 53px;
    border-radius: 3px;
    font-size: 16px;
    color: #242424;
  }
`;

export const Property = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Branch = styled.div`
  margin-top: 17px;
  width: 79.6%;
  display: flex;
  justify-content: space-between;
`;

export const GroupName = styled.div`
  margin-top: 34px;
  input {
    width: 480px;
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
  textarea {
    resize: none;
    width: 480px;
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
  width: 526px;
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
  }
`;
