import React from "react";
import {
  Card,
  Description,
  Image,
  SubTitle,
  Title,
  Wrapper,
} from "./Suggestion.style";
import WelcomeImage from "../../assets/images/homePageMainImage.png";
import Button from "../shard/button/Button";
const Suggestion = () => {
  return (
    <Wrapper>
      <Image src={WelcomeImage} alt="Welcome Image" />
      <Card>
        <SubTitle>New Arrival</SubTitle>
        <Title>Discover Our New Collection</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Description>
        <Button title="Buy Now" />
      </Card>
    </Wrapper>
  );
};

export default Suggestion;
