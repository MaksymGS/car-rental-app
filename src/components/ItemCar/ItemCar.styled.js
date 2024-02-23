import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 274px;
`;
export const Thumb = styled.div`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CarModelPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const CarModelInfo = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;
export const CarModel = styled.span`
  color: #3470ff;
`;
export const Price = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;
export const Information = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 28px;
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: #fff;

  border-radius: 12px;
  border: none;
  background: #3470ff;
  padding: 12px 99px;
  width: 100%;
`;
