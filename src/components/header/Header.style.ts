import { styled } from "styled-components";
import { ReactComponent as PersonSvg } from "../../assets/svgs/person.svg";
import { ReactComponent as FavoriteSvg } from "../../assets/svgs/favorite.svg";
import { ReactComponent as CartSvg } from "../../assets/svgs/cart.svg";
export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat";
  padding: 30px 100px 30px 55px;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 34px;
`;
export const HeaderList = styled.ul`
  display: flex;
  gap: 75px;
`;
export const HeaderListItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #b88e30;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  gap: 45px;
`;

export const PersonIcon = styled(PersonSvg)`
  cursor: pointer;
`;
export const FavoriteIcon = styled(FavoriteSvg)`
  cursor: pointer;
`;
export const CartIcon = styled(CartSvg)`
  cursor: pointer;
`;
