import { Theme } from './../../utils/theme';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: ${Theme.darkBlue};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${Theme.white};
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  &:hover {
    &.success {
      background: ${shade(0.2, Theme.white)};
    }
    &.error {
      background: ${shade(0.2, Theme.red)};
    }
    background: ${shade(0.2, Theme.darkBlue)};
  }
  &.success {
    background: ${Theme.green};
  }
  &.error {
    background: ${Theme.red};
  }
`;