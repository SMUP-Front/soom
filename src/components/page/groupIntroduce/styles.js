import styled from "styled-components";

export const Banner = styled.div`
  width: 1920px;
  height: 230px;
  background: #c4c4c4;
`;

export const Top = styled.div`
  margin-left: 494px;
  width: 1083px;
  display: flex;
  justify-content: space-between;
`;

export const Request = styled.button`
  margin-top: 20px;
  margin-left: 13px;
  border: none;
  background: #9052df;
  color: white;
  width: 84px;
  height: 27px;
  font-size: 14px;
  border-radius: 24px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  hr {
    width: 173px;
    height: 1px;
    border: none;
    background-color: #242424;
  }
`;

export const Profile = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Tag = styled.span`
  font-size: 14px;
  color: #a3a3a3;
`;