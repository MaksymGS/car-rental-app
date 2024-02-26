import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: relative;

  border-radius: 24px;
  width: 541px;
  background: #fff;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;
`;
export const CloseButton = styled.button`
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  background: transparent;

  position: absolute;
  top: 14px;
  right: 14px;
`;

export const IconClose = styled.svg`
  width: 18px;
  height: 18px;

  stroke-width: 1.8px;
  stroke: #121417;
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
export const CarModelInfo = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
  margin-bottom: 8px;
`;
export const CarModel = styled.span`
  color: #3470ff;
`;
export const Information = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 14px;
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-bottom: 24px;
`;
export const Accessories = styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-bottom: 8px;
`;
export const AccessoriesDescr = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 24px;
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: #fff;

  border-radius: 12px;
  border: none;
  background: #3470ff;
  padding: 12px 50px;
  width: 168px;
`;
