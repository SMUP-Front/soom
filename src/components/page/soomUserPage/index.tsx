import * as S from "./styles";
import leftArrow from "../../../asset/img/left-arrow-angle.png";
import rightArrow from "../../../asset/img/right-arrow-angle.png";
import background3 from "../../../asset/img/backGround3.png";
import background4 from "../../../asset/img/backGround4.png";

export default function SoomUserPage() {
  const title: string[] = [
    "내가 속한 그룹",
    "대기중인 가입 요청",
    "대기중인 채팅 요청",
  ];

  return (
    <>
      <S.Main>
        <S.Profile>
          <img src="" alt="" />
        </S.Profile>
        <S.Name>안진형</S.Name>
        <hr />
        <S.School>#광주소프트웨어마이스터고등학교</S.School>
        <S.ButtonDiv>
          <S.Button>로그아웃</S.Button>
          <S.Button>설정</S.Button>
        </S.ButtonDiv>

        {title.map((item) => (
          <S.Contents>
            <S.Title>{item}</S.Title>
            <S.Content>
              <div>
                <img src={leftArrow} alt="" />
              </div>
              <S.Group>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                {/* map 함수 돌리기 */}
              </S.Group>
              <div>
                <img src={rightArrow} alt="" />
              </div>
            </S.Content>
            <S.Moment>
              <span>
                <div>the moment</div>
                <div>the moment</div>
                <div>the moment</div>
                <div>the moment</div>
                <div>the moment</div>
                <div>the moment</div>
                {/* map 함수 돌리기 */}
              </span>
            </S.Moment>
          </S.Contents>
        ))}
        <S.Background3>
          <img src={background3} alt="" />
        </S.Background3>
        <S.Background4>
          <img src={background4} alt="" />
        </S.Background4>
      </S.Main>
    </>
  );
}
