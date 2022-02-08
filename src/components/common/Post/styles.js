import styled from "styled-components";

export const Post = styled.div`
  display: flex;
  justify-content: center;
  main {
    margin-top: 10px;
    width: 774px;
    height: 858px;
    padding: 21px 63px;
    box-shadow: 0px 0px 10px 0px #e8e8e8;
  }
`;

export const Top = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 752px;
  padding-left: 14px;
  span {
    display: inline-flex;
  }
  span > img {
    width: 40px;
    height: 40px;
    background-color: #e8e8e8;
    border-radius: 6px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 20px;
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BigImage = styled.div`
  img {
    width: 382px;
    height: 382px;
    background-color: #e8e8e8;
  }
`;

export const SmallImage = styled.div`
  img {
    width: 254px;
    height: 254px;
    background-color: #e8e8e8;
  }
`;

export const Explain = styled.div`
  width: 349px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  padding-top: 14px;
  padding-left: 14px;
  margin-bottom: 14px;
`;

export const Class = styled.div`
  font-size: 18px;
  color: #242424;
  margin-left: 9px;
`;

export const Time = styled.div`
  font-size: 13px;
  color: #242424;
  margin-left: 9px;
`;
