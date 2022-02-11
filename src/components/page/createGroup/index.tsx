import * as S from "./styles";
import uploadImage1 from "../../../asset/img/uploadImage1.png";
import uploadImage2 from "../../../asset/img/uploadImage2.png";

export default function CreateGroup() {
  const property: string[] = ["동아리", "사설동아리", "친목", "운동", "스터디"];
  const branch: string[] = ["Web", "App", "Back", "etc."];

  return (
    <>
      <S.Title>SMUP</S.Title>
      <S.Main>
        <S.ProfileImage>
          <img src={uploadImage1} alt="" />
        </S.ProfileImage>
        <S.BannerImage>
          <img src={uploadImage2} alt="" />
        </S.BannerImage>
        <S.GroupProperty>
          <S.Property>
            {property.map((item) => (
              <button>{item}</button>
            ))}
          </S.Property>
          <S.Branch>
            {branch.map((item) => (
              <button>{item}</button>
            ))}
          </S.Branch>
        </S.GroupProperty>
        <S.GroupName>
          <input placeholder="비속어, 은어는 사용하지 말아주세요." />
        </S.GroupName>
        <S.GroupInformation>
          <textarea placeholder="100자 이내로 작성해 주세요." />
        </S.GroupInformation>
        <S.Create>
          <button>그룹 만들기</button>
        </S.Create>
      </S.Main>
    </>
  );
}
