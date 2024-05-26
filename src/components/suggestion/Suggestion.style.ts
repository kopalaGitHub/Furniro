import { styled } from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  font-family: "Montserrat";
`;
export const Image = styled.img`
  width: 100%;
  height: 715px;
  position: absolute;
  z-index: -1;
`;
export const Card = styled.div`
  background-color: #fff3e3;
  position: absolute;
  top: 150px;
  right: 60px;
  max-width: 645px;
  padding: 62px 43px 37px 40px;
`;
export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #333333;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 52px;
  color: #b88e2f;
  line-height: 65px;
  margin: 4px 0 17px;
`;
export const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 45px;
`;
