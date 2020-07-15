import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;
    left: 50%;
    transform: translateX(-50%);

    width: 160px;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    bottom: calc(100% + 12px);
    border-radius: 4px;
    color: #312e38;
    background: #ff9000;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
