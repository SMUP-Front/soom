import React from "react";
import * as S from "./styles";
import BackGround1 from "../../../asset/img/BackGround1.png";

export default function GroupIntroduce() {
  let width: number = window.innerWidth;
  let height: number = window.innerHeight;

  return (
    <>
      <S.ProfileImage width={width}>
          <img src="" alt=""/>
      </S.ProfileImage>
      <S.Banner height={height} />
      <S.Top>
        <S.Title>
          <S.Profile>the moment</S.Profile>
          <hr />
          <div>
            <S.Tag>#동아리</S.Tag>
            <S.Tag>#App</S.Tag>
            <S.Tag>#Web</S.Tag>
            {/* map함수 돌릴 것 */}
          </div>
        </S.Title>
        <div>
          <S.Request>채팅 요청</S.Request>
          <S.Request>가입 요청</S.Request>
        </div>
      </S.Top>
      <S.IntroduceTitle>소개말</S.IntroduceTitle>
      <S.Introduction>
        아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무라아무말아무
      </S.Introduction>
      <S.BackGround>
        <img src={BackGround1} alt="" />
      </S.BackGround>
    </>
  );
}
