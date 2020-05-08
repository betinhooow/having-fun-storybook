import React, { useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Input } from '../src';
import { FormHandles } from '@unform/core';
import { InputErrored } from '../src/usable/InputErrored';

storiesOf('Input', module)
  .add('Default', () => <Form onSubmit={()=>{}}>
    <Input name="email" icon={FiMail} placeholder="E-mail" />
  </Form>)
  .add('Errored', () => <InputErrored />)