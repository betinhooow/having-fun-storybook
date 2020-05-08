import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../src';

const pageTestId = "storybook";

storiesOf('Button', module)
  .add('Default', () => <Button testId={pageTestId}>
    Entrar
  </Button>)