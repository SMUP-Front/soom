import * as S from "./styles";
import backGround1 from "../../../asset/img/backGround3.png";
import backGround2 from "../../../asset/img/backGround4.png";
import { BackGround } from "../../common/IntroduceBackGround/styles";

export default function SoomUserSetting() {
  return (
    <>
      <S.Main>
        <S.Profile>
          <S.ProfileImage />
          <S.ProfileChangeButton>
            <button>변경</button>
          </S.ProfileChangeButton>
        </S.Profile>
        <S.UserInformation>
          <S.Information>
            <S.UserName>안진형</S.UserName>
            <hr />
            <S.School>#광주소프트웨어마이스터고등학교</S.School>
          </S.Information>
          <S.InformationChangeButton>
            <button>변경</button>
          </S.InformationChangeButton>
        </S.UserInformation>
        <S.Complete>
          <button>완료</button>
        </S.Complete>
      </S.Main>
      <S.BackGround1>
        <img src={backGround1} alt="" />
      </S.BackGround1>
      <S.BackGround2>
        <img src={backGround2} alt="" />
      </S.BackGround2>
    </>
  );
}
