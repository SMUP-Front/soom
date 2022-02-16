import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 46px;
  hr {
    width: 209px;
    height: 1px;
    border: none;
    background-color: #242424;
  }
`;

export const Profile = styled.div`
  width: 185px;
  height: 185px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: none;
    background-color: #e7e7e7;
    object-fit: cover;
  }
`;

export const Name = styled.div`
  margin-top: 19px;
  font-size: 24px;
  color: #242424;
`;

export const School = styled.div`
  font-size: 16px;
  color: #9d9d9d;
`;

export const Button = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: center;
  height: 27px;
  border: none;
  border-radius: 24px;
  background-color: #9052df;
  color: #fff;
  padding: 1px 16px 1px 16px;
  font-size: 18px;
  justify-content: center;
`;
export const ButtonDiv = styled.div`
  margin-bottom: 10px;
`;

export const Contents = styled.div`
  margin-top: 38px;
  width: 1020px;
  height: 222px;
`;

export const Title = styled.div`
  margin-left: 45px;
  font-size: 24px;
  color: #242424;
`;

export const Group = styled.div`
  width: 895px;
  display: flex;
  justify-content: space-between;
  img {
    width: 125px;
    height: 125px;
    border-radius: 100px;
    background-color: #e7e7e7;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Moment = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: #242424;
  span {
    display: flex;
    justify-content: space-between;
    width: 865px;
  }
`;

export const Background3 = styled.div`
  position: absolute;
  top: 797px;
  left: 255px;
`;

export const Background4 = styled.div`
  position: absolute;
  top: 757px;
  right: 216px;
`;
