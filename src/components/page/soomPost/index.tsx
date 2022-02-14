import React from "react";
import Group from "../../common/GroupProfile";
import Post from "../../common/Post";
import PostChat from "../../common/PostChat";
import * as S from "./styles";
import addButton from "../../../asset/img/addButton.png";

export default function SoomPost() {
  return (
    <>
      <S.AddButton>
        <img src={addButton} alt="" />
      </S.AddButton>
      <Group />
      <PostChat/>
      <Post />
      <Post />
      <Post />
    </>
  );
}
