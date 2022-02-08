import React from "react";
import * as S from "./styles";
import menu from "../../../asset/img/menu.png";

export default function Post() {
  return (
    <>
      <S.Post>
        <main>
          <S.Top>
            <span>
              <img src="" alt="" />
              <div>
                <S.Class>1-3반</S.Class>
                <S.Time>30분전</S.Time>
              </div>
            </span>
            <img src={menu} alt="" />
          </S.Top>
          <S.Explain>
            이번주 수요일 영어 단어 수행평가 있습니다. 모두 7-1 학습지 단어
            외우고 시험 보시기 바랍니다. 이번주 수요일 영어 단어 수행평가
            있습니다. 모두 7-1 학습지 단어 외우고 시험 보시기 바랍니다.
          </S.Explain>
          <S.Thumbnail>
            <S.BigImage>
              <img src="" alt="" />
            </S.BigImage>
            <S.BigImage>
              <img src="" alt="" />
            </S.BigImage>
            <S.SmallImage>
              <img src="" alt="" />
            </S.SmallImage>
            <S.SmallImage>
              <img src="" alt="" />
            </S.SmallImage>
            <S.SmallImage>
              <img src="" alt="" />
            </S.SmallImage>
            {/* 나중에 map함수 돌리기 big - 2, small - 3 */}
          </S.Thumbnail>
        </main>
      </S.Post>
    </>
  );
}
