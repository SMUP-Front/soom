import * as S from "./styles";
import arrow from "../../../asset/img/left-arrow-angle - white.png";

export default function PostChat() {
  return (
    <>
      <S.Main>
        <S.Head>
          <img src={arrow} alt="" />
        </S.Head>
        <S.Chatting>
          <S.Chat>
            <img src="" alt="" />
            <S.Content>넵 알게씀니따~!~!</S.Content>
            <S.Time>8:32am</S.Time>
          </S.Chat>
        </S.Chatting>
      </S.Main>
    </>
  );
}
