import React from "react";
import * as S from "./styles";
import web from "../../../asset/img/webGroup.png";
import app from "../../../asset/img/appGroup.png";
import backend from "../../../asset/img/backendGroup.png";
import etc from "../../../asset/img/etcGroup.png";

export default function SoomGroup() {
  return (
    <>
      <S.Group>
        <S.Top>
          <main>
            <img src={web} alt="" />
            <img src={app} alt="" />
            <img src={backend} alt="" />
            <img src={etc} alt="" />
          </main>
        </S.Top>
        <hr />
        <S.Club>
          
        </S.Club>
      </S.Group>
    </>
  );
}
