import { Theme } from './../../utils/theme';
import styled, { css } from 'styled-components';

interface Container {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<Container>`
  background: ${Theme.lightBlue};
  border-radius: 10px;
  border: 2px solid ${Theme.lightBlue};
  padding: 16px;
  width: 100%;
  color: ${Theme.darkBlue};
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  .error {
    font-size: 10px;
    color: ${Theme.red};
  }
  ${props =>
    props.isFocused &&
    css`
      color: ${Theme.purple};
      border-color: ${Theme.purple};
    `}
  ${props =>
    props.isFilled &&
    css`
      color: ${Theme.purple};
    `}
  ${props =>
    props.isFocused &&
    props.isErrored &&
    css`
      border-color: ${Theme.red};
    `}
  input {
    background-color: transparent;
    flex: 1;
    border: 0;
    color: ${Theme.darkBlue};
    &::placeholder {
      color: ${Theme.darkBlue};
    }
  }
  svg {
    margin-right: 16px;
  }
`;