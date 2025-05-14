import { css } from "@emotion/react";
import ShoppingBag from "./icons/ShoppingBag";

const Header = ({ shoppingCount }: { shoppingCount: number }) => {
  return (
    <header css={headerStyle}>
      <span>SHOP</span>
      <div css={shoppingBagStyle}>
        <ShoppingBag />
        <span css={shoppingBagCountStyle}>{shoppingCount}</span>
      </div>
    </header>
  );
};

export default Header;

const headerStyle = css`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: white;
`;

const shoppingBagStyle = css`
  position: relative;
`;

const shoppingBagCountStyle = css`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 50%;
  color: #000;
`;
