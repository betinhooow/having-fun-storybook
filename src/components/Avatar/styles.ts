import { Theme } from './../../utils/theme';
import styled from 'styled-components';
import { opacify } from 'polished';

export const Container = styled.div`
  height: 150px;
  width: 150px;
  background: ${opacify(-0.3, Theme.white)};
  color: ${Theme.darkBlue};
  border-radius: 50%;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 50px;
  }
  button {
    background: transparent;
    border: 0;
    height: 30px;
    & + button {
      padding-left: 10px;
    }
    span {
      font-size: 15px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row;
`;