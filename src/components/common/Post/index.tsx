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
        </main>
      </S.Post>
    </>
  );
}
