import React from "react";
import Logo from "../../assets/images/mainLogo.png";

import {
  CartIcon,
  FavoriteIcon,
  HeaderList,
  HeaderListItem,
  IconWrapper,
  LogoWrapper,
  PersonIcon,
  Title,
  Wrapper,
} from "./Header.style";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <img src={Logo} alt="" />
        <Title>Furniro</Title>
      </LogoWrapper>
      <nav>
        <HeaderList>
          <HeaderListItem>Home</HeaderListItem>
          <HeaderListItem>Shop</HeaderListItem>
          <HeaderListItem>About</HeaderListItem>
          <HeaderListItem>Contact</HeaderListItem>
        </HeaderList>
      </nav>
      <IconWrapper>
        <PersonIcon />
        <FavoriteIcon />
        <CartIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;
