import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 274px;
  position: relative;
`;
export const FavoriteToggle = styled.button`
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  background: transparent;

  position: absolute;
  top: 14px;
  right: 14px;
`;

export const IconFavorite = styled.svg`
  width: 18px;
  height: 18px;

  fill: transparent;
  stroke-width: 1.5px;
  stroke: rgba(255, 255, 255, 0.8);
  /* opacity: 1; */
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: #3470ff;
    fill: #3470ff;
  }
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
  /* white-space: nowrap;
  text-overflow: hidden; */
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
