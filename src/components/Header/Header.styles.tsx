import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: white;
`;

export const ShoppingBagWrapper = styled.div`
  position: relative;
`;

export const ShoppingBagCount = styled.span`
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

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 300px;
`;
