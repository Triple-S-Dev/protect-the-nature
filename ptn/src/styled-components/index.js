import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  padding: 24px 32px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: 'Excon';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.015em;
  color: #000000;
`;

export const Text = styled.p`
  font-family: 'Excon';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.015em;
  color: #878787;
`;

export const Btn = styled.button`
  padding: 14px 108px;
  background: #b0eacd;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: 'Excon', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #2f5d62;
`;

export const EventName = styled.span`
  color: #2f5d62;
`;

export const Image = styled.img`
  width: 329px;
  height: 185px;
  border-radius: 10px 10px 0 0;
`;

export const Cards = styled.div`
  width: 329px;
  height: 347px;
  background: #ffffff;
  border-radius: 10px;
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 12px;
`;

export const CardsTitle = styled.h4`
  font-family: 'Excon';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.015em;
  color: #2f5d62;
  padding: 10px 12px 0 12px;
`;

export const FlexText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// ================== List Card ====================
export const ListCard = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

// ================= Positioning ==================
export const Margin6 = styled.div`
  margin-top: 6px;
`;

export const Margin32 = styled.div`
  margin-top: 32px;
`;
