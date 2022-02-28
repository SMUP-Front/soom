import * as S from "./styles";
import uploadImage1 from "../../../asset/img/uploadImage1.png";
import uploadImage2 from "../../../asset/img/uploadImage2.png";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../../lib/export";

export default function CreateGroup() {
  const property: string[] = ["CLUB", "CLUB_MAJOR", "TEAM"];
  const branch: string[] = ["COUNCIL", "ClUB_ETC"];
  type valueType = {
    name: string;
    description: string;
    type: string;
  };

  const [value, setValue] = useState<valueType>({
    name: "",
    description: "",
    type: "",
  });

  async function handleGroupCreate() {
    const params: valueType = {
      name: value.name,
      description: value.description,
      type: value.type,
    };
    console.log(params);

    await axios
      .post<any>(BASE_URL + "/api/v1/group", params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const handleInputChange = (props: string) => (e: any) => {
    setValue({ ...value, [props]: e.target.value });
    console.log(value);
  };

  const handlePropertyChange = (props: string) => (e: any) => {
    setValue({ ...value, type: props });
    console.log(value);
  };

  return (
    <>
      <S.Title>SMUP</S.Title>
      <S.Main>
        <S.Word>
          <S.WordProfile>프로필 사진</S.WordProfile>
          <S.WordBanner>배너 이미지</S.WordBanner>
          <S.WordProperty>그룹 속성</S.WordProperty>
          <S.WordName>그룹 이름</S.WordName>
          <S.WordExplain>그룹 설명</S.WordExplain>
        </S.Word>
        <hr />
        <S.Information>
          <S.ProfileImage>
            <img src={uploadImage1} alt="" />
          </S.ProfileImage>
          <S.BannerImage>
            <img src={uploadImage2} alt="" />
          </S.BannerImage>
          <S.GroupProperty>
            <S.Property>
              {property.map((item) => (
                <button onClick={handlePropertyChange(`${item}`)}>
                  {item}
                </button>
              ))}
            </S.Property>
            <S.Branch>
              {branch.map((item) => (
                <button onClick={handlePropertyChange(`${item}`)}>
                  {item}
                </button>
              ))}
            </S.Branch>
          </S.GroupProperty>
          <S.GroupName>
            <input
              type="text"
              value={value.name}
              onChange={handleInputChange("name")}
              placeholder="비속어, 은어는 사용하지 말아주세요."
            />
          </S.GroupName>
          <S.GroupInformation>
            <textarea
              value={value.description}
              onChange={handleInputChange("description")}
              placeholder="100자 이내로 작성해 주세요."
            />
          </S.GroupInformation>
          <S.Create>
            <button onClick={handleGroupCreate}>그룹 만들기</button>
          </S.Create>
        </S.Information>
      </S.Main>
    </>
  );
}
