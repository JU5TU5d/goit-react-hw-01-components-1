import styled from "styled-components";

export const Section = styled.section`
  width: 268px;
  height: 130px;
  margin: auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: "ProximaNova";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding-top: 25px;
  line-height: 1.2;
  color: #475965;
  background-color: #fff;
  height: 70px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0;
`;

export const ListItem = styled.li`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colorCreator};
`;
export const Label = styled.span`
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  font-family: "ProximaNova", sans-serif;
`;
export const Percentage = styled.span`
  color: #fff;
  font-size: 18px;
  line-height: 20px;
  font-family: "ProximaNova", sans-serif;
`;
