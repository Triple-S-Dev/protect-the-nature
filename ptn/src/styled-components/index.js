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
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
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

export const InputEmail = styled.input`
  background: #fff;
  border: none;
  border-radius: 10px;
  width: 300px;
  padding: 8px 18px 8px 16px;
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

export const Margin16 = styled.div`
  margin-top: 16px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const FlexPost = styled.div`
  display: flex;
  gap: 18px;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// ================= DETAIL PAGE ====================
export const DetailImage = styled.img`
  width: 794px;
  height: 478px;
  border-radius: 10px;
`;

export const ActivityImage = styled.img`
  max-width: 734px;
  border-radius: 10px;
`;

export const ActivityUser = styled.p`
  font-family: 'Excon';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

export const Avatar = styled.div`
  padding: 8px 16px;
  border-radius: 100px;
  background-color: #c4c4c4;
  font-family: 'Excon';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #000000;
`;

// ============== LANDING PAGE =============
