import React from "react";
import * as S from "./styles";

export default function GroupIntroduce() {
  return (
    <>
      <S.Banner />
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
    </>
  );
}
