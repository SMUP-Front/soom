import React from "react";
import * as S from "./styles";
import web from "../../../asset/img/webGroup.png";
import app from "../../../asset/img/appGroup.png";
import backend from "../../../asset/img/backendGroup.png";
import etc from "../../../asset/img/etcGroup.png";
import GroupInformation from "../../common/GroupInformation";
import addButton from "../../../asset/img/addButton.png";

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
          <main>
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
            <GroupInformation />
          </main>
          {/* 나중에 map함수 돌릴 것! */}
        </S.Club>
        <S.PageNation>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </S.PageNation>
        <S.AddButton>
          <img src={addButton} alt="" />
        </S.AddButton>
      </S.Group>
    </>
  );
}
