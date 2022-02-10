import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: ${(props) => (props.height / 100) * 21.2}px;
  background: #c4c4c4;
`;

export const Top = styled.div`
  margin-left: 25%;
  width: 54.7%;
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

export const Introduction = styled.div`
  display: flex;
  justify-content: center;
  width: 43.6%;
  margin-left: 26.6%;
  font-size: 18px;
  color: #3a3a3a;
`;

export const IntroduceTitle = styled.div`
  margin-bottom: 21px;
  margin-left: 26.1%;
  margin-top: 29px;
  font-size: 18px;
  font-weight: bold;
`;

export const BackGround = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7%;
  img {
    width: 24.74%;
    height: 30.2%;
    object-fit: cover;
  }
`;

export const ProfileImage = styled.div`
  position: absolute;
  width: 8.23%;
  height: ${(props) => (props.width / 100) * 8.23}px;
  background: #e7e7e7;
  border-radius: 100px;
  top: 21.1%;
  left: 17.1%;
  img {
    object-fit: cover;
  }
`;
