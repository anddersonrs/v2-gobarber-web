import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    color: #3172b7;
    background: #ebf8ff;
  `,
  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background: #fddede;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  position: relative;
  width: 360px;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgb(0, 0, 0, 0.2);

  ${({ type }) => toastTypeVariations[type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
